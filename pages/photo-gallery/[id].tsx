import FsLightbox from "fslightbox-react";
import Image from "next/image";
import React, {useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import {galleryInterface} from "@/interfaces/generalTypesInterfaces";
import Head from "next/head";
import AlertComponent from "@/Components/AleryComponent/AlertComponent";


const GalleryPhotos = ({gallery:{photos,translations}}:{gallery:galleryInterface}) => {
    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const {i18n,t} = useTranslation('common')
    const translatedName = useMemo(() => translations.find(el => el.locale == i18n.language)?.name,[i18n.language, translations])
    return (
        <>
            <Head>
                <meta name="keywords" content={translations.find(el => el.locale == i18n.language)?.name}/>
                <title>
                    {translatedName ? translatedName + ' | GEAD' : 'GEAD'}
                </title>
            </Head>
            <main className="custom-container my-4">
                <FsLightbox
                    toggler={toggler}
                    sources={photos?.map((el => <Image style={{objectFit:'contain'}} width={1000} height={1000} key={el.id}
                                                     src={process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + el.photo}
                                                     alt={process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + el.photo}/>))}
                    sourceIndex={slideIndex}
                />
                {photos?.length > 0 ? <>
                    <CustomHeader>
                        {translations.find(el => el.locale == i18n.language)?.name}
                    </CustomHeader>
                    <div>
                        <div className={'row my-4 blogs'}>
                            {photos.map((el, index) => {
                                return <>

                                <span
                                    data-appear-animation="fadeInUpShorter"
                                    data-appear-animation-delay="200"
                                    style={{width: "250px", cursor: "pointer", animationDelay: "200ms"}}
                                    key={index}
                                    onClick={() => {
                                        setSlideIndex(index);
                                        setToggler(!toggler);
                                    }}
                                    className="thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten md-col col-md-3  col-sm-6  appear-animation"
                                >
                  <span
                      style={{height: '160px'}}
                      className="thumb-info-wrapper  m-2">
                    <Image
                        width={250}
                        height={250}
                        className="img-fluid rounded"
                        style={{margin: "0 !important", height: '100%', objectFit: 'cover'}}
                        src={
                            process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API! +
                            el.photo
                        }
                        alt={translations.find(el => el.locale == i18n.language)?.name || 'img'}
                    />
                    <span className="thumb-info-action">
                      <span className="thumb-info-action-icon">
                        <i className="fas fa-plus"></i>
                      </span>
                    </span>

                  </span>

                </span>
                                </>
                            })}
                        </div>
                    </div>
                </> : <AlertComponent imgSrc={'/img/noData.jpg'} />}
            </main>
        </>
    );
};

export async function getServerSideProps(context: any) {

    const {id} = context.query

    const data = await fetch(`https://admin.gead.az/api/gallery/` + id )
    const json = await data.json();
    return {
        props: {
            gallery: json?.gallery
        }
    };
}

export default GalleryPhotos;
