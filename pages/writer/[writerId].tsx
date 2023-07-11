import React, {useMemo} from "react";
import ReactHtmlParser from 'react-html-parser'
import {useTranslation} from "react-i18next";
import {contentItem} from "@/interfaces/generalTypesInterfaces";
import {transformDate} from "@/utils/transformDate";
import ModalForm from "@/Components/ModalForm/ModalForm";
import Image from "next/image";
import Head from "next/head";
import AlertComponent from "@/Components/AleryComponent/AlertComponent";
import {useRouter} from "next/router";

const WritePage = ({data: {writers, relatedItems}}: {
    data: { writers: contentItem, relatedItems: contentItem[] }
}) => {
    const {query} = useRouter()
    const {i18n, t} = useTranslation('common')
    const {pdf, translations, view, name, photo, created_at} = writers

    const translatedName = translations?.find(item => item.locale === i18n.language)?.name

    return <>
        <Head>
            <meta name="keywords" content={translations?.find(item => item.locale === i18n.language)?.name}/>
            <title>
                {translations ? translatedName + ' | GEAD' : 'GEAD'}
            </title>

            <meta property="og:title" content={translatedName ? translatedName + ' | GEAD' : 'GEAD'}/>
            <meta property="og:description" content={translations?.find(item => item.locale === i18n.language)?.description}/>
            <meta property="og:image" content={   process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API! + photo}/>
            <meta property="og:url" content={ process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + 'writer/' + query.writerId }/>
        </Head>
        <div role="main" className="main">
            <div
                className="appear-animation custom-container py-4"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="0" style={{animationDuration: "1s", animationDelay: "0ms"}}>
                {(typeof writers !== 'string') ? <>
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
                                            <Image style={{    maxHeight: "600px",
                                                objectFit: 'cover'}} width={1000} height={1000} className="img-fluid border-radius-0"
                                                   src={process.env["NEXT_PUBLIC_MAIN_PATH_WITHOUT_API"] + photo}
                                                   alt={translations?.find(item => item.locale === i18n.language)?.name || 'img'}/>
                                        </div>
                                    </div> : ''}


                                    <div className="post-content ms-0">
                                    {ReactHtmlParser(translations && translations?.find(item => item.locale === i18n.language)?.description!) || ""}
                                    </div>
                                </article>

                            </div>


                        </div>

                    </div>
                    <div className="post-meta mt-4">
                        {pdf?.length > 0 && <ModalForm/>}
                        <span style={{color: '#1d388c'}} className='mx-3'><i
                            className="far fa-calendar"></i> <a>{transformDate(created_at)}</a> </span>

                    </div>

                </> : <AlertComponent imgSrc={'/img/notData.jpg'} />}

            </div>
        </div>
    </>

};

export async function getServerSideProps(context: any) {
    const {query} = context

    const data = await fetch(`https://admin.gead.az/api/writer/${query.writerId}`);

    const json = await data.json();
    return {
        props: {
            data: json
        }
    };
}

export default WritePage;