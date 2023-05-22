import CarouselWithCard from "@/Components/Carousel/CarouselWithCard";
import FsLightbox from "fslightbox-react";
import React, {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser'
import {useTranslation} from "react-i18next";
import {categoryItem, contentItem} from "@/interfaces/generalTypesInterfaces";
import {transformDate} from "@/utils/transformDate";
import ModalForm from "@/Components/ModalForm/ModalForm";
import Swal from "sweetalert2";
import {useCategoriesQuery, useContentMailMutation} from "@/Store/Query/GeneralQuery";
import {useRouter} from "next/router";
import Head from "next/head";
import AlertComponent from "@/Components/AleryComponent/AlertComponent";

const NewPage = ({data}: { data: { content: contentItem, related: contentItem[] } }) => {
    const {query} = useRouter()
    const {i18n, t} = useTranslation('common')
    const {pdf, translations, view, name, photo, created_at, photos} = data.content
    const related = data.related
    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [checkPdf, {isLoading}] = useContentMailMutation()
    const imgs = useMemo(() => {
        return photos?.map((el => process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + el.photo))
    }, [photos])
    const [session, setSession] = useState('')
    const {data: categories} = useCategoriesQuery('');
    const currentCategory: categoryItem | undefined = useMemo(() => {
        return categories?.categories?.find(item => item.id === +data.content.category_id)
    }, [categories])

    useEffect(() => {
        setSession(JSON.parse(sessionStorage.getItem('sessionData')!))
    }, [])


    return <>
        <Head>
            <meta name="keywords"
                  content={`${currentCategory?.translations.find(item => item.locale === i18n.language)?.name}, ${currentCategory?.alt?.find(item => item.id === +data.content.alt_id)?.translations.find(item => item.locale === i18n.language)?.name}, ${currentCategory?.alt?.find(item => item.id === +data.content.alt_id)?.sub.find((item => item.id === +data.content.sub_id))?.translations.find(item => item.locale === i18n.language)?.name}, ${translations?.find(item => item.locale === i18n.language)?.name}`}/>
            <title>
                {translations?.find(item => item.locale === i18n.language)?.name + ' | GEAD'}
            </title>
        </Head>
        <div role="main" className="main">
            <ModalForm/>
            <FsLightbox
                toggler={toggler}
                sources={imgs?.map((el, index) => <Image style={{objectFit: 'contain'}} width={1000} height={1000}
                                                         key={Math.random()} src={el}
                                                         alt={translations.find(item => item.locale === i18n.language)?.name || 'img'}/>)}
                sourceIndex={slideIndex}
            />
            <div
                className="appear-animation custom-container my-4"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="0" style={{animationDuration: "1s", animationDelay: "0ms"}}>
                {(data.content.status !== 404 && data.content.toString() !== 'content-is-empty') ? <>
                    <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 align-self-center p-static order-2 text-center"><h1
                                    className="text-dark font-weight-bold text-8">{translations?.find(item => item.locale === i18n.language)?.name}</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="row">
                        <div className="col">
                            <div className="blog-posts single-post">
                                <article className="post post-large blog-single-post border-0 m-0 p-0">
                                    {photo?.length > 0 ? <div className="post-image ms-0">
                                        <div className="img-thumbnail border-0 p-0 d-block">
                                            <Image width={250} height={250} className="img-fluid border-radius-0"
                                                   src={process.env["NEXT_PUBLIC_MAIN_PATH_WITHOUT_API"] + photo}
                                                   alt={translations.find(item => item.locale === i18n.language)?.name || 'img'}/>
                                        </div>
                                    </div> : ''}


                                    <div className="post-content ms-0">
                                        {ReactHtmlParser(translations && translations?.find(item => item.locale === i18n.language)?.content || '')}
                                    </div>
                                </article>

                            </div>

                            <div className={'row my-4 blogs'}>
                                {photos.length > 0 ? photos?.map((el, index) => {
                                    return <>

                                <span
                                    style={{width: "250px", cursor: "pointer"}}
                                    key={el.id}
                                    onClick={() => {
                                        setSlideIndex(index);
                                        setToggler(!toggler);
                                    }}
                                    className="thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten md-col col-md-3  col-sm-6"
                                >
                  <span style={{height: '160px'}} className="thumb-info-wrapper  m-2">
                    <Image
                        width={250}
                        height={250}
                        className="img-fluid rounded"
                        style={{margin: "0 !important", height: '100%', objectFit: 'cover'}}
                        src={
                            process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API! +
                            el.photo
                        }
                        alt={translations.find(item => item.locale === i18n.language)?.name || 'img'}
                    />
                    <span className="thumb-info-action">
                      <span className="thumb-info-action-icon">
                        <i className="fas fa-plus"></i>
                      </span>
                    </span>
                  </span>
                </span>
                                    </>
                                }) : ''}
                            </div>
                        </div>

                    </div>
                    <div className="post-meta mt-4">
                        {pdf?.length > 0 ? session?.length > 0 ?
                            <button onClick={() => {
                                checkPdf({email: session, content_id: query.cat_id!.toString()})
                                    .then((res) => {
                                        if ('error' in data) {
                                            Swal.fire(`${t('something-went-wrong')}`, "", "error");
                                        } else {
                                            const data = (res as { data: { email: string, pdf: string } }).data
                                            window.open(data.pdf, '_blank')
                                        }
                                    })
                            }} className="btn btn-modern btn-primary">
                                {t('download')+' ▼'}
                            </button> : <button className="btn btn-modern btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#formModal">
                                {t('download')+' ▼'}
                            </button> : ''
                        }
                        <span style={{color: '#1d388c'}} className='mx-3'><i
                            className="far fa-calendar"></i> <a>{transformDate(created_at)}</a> </span>
                        <span style={{color: '#1d388c'}} className='mx-3'><i
                            className="far fa-eye"></i> <a>{view}</a></span>


                    </div>
                    {related.length > 0 ? <div className="carousel mt-5">
                        <CarouselWithCard title={'related_news'} items={related}/>
                    </div> : ''
                    }
                </> : <AlertComponent imgSrc={'/img/notData.jpg'}/>}

            </div>
        </div>
    </>

};

export async function getServerSideProps(context: any) {
    const {query} = context

    const data = await fetch(`https://admin.gead.az/api/content/${query.cat_id}`);

    const json = await data.json();
    return {
        props: {
            data: json
        }
    };
}

export default NewPage;