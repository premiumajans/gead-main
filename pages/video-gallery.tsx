import React from "react";
import {useTranslation} from "react-i18next";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import {videoItem} from "@/interfaces/generalTypesInterfaces";
import Head from "next/head";
import AlertComponent from "@/Components/AleryComponent/AlertComponent";

const GalleryVideos = ({videos}: { videos: videoItem[] }) => {
    const {i18n, t} = useTranslation('common')

    return (
        <>
            <Head>
                {/*<meta name="keywords" content={translations.find(el => el.locale == i18n.language)?.name}/>*/}
                <title>
                    {t('video-gallery') !== 'video-gallery' ? t('video-gallery') + ' | GEAD' : '...'}
                </title>
            </Head>
            <main className="custom-container my-4">

                <div className="row my-4">
                    {videos?.length > 0 && Array.isArray(videos) ? <>
                            <CustomHeader>
                                {t('video-gallery')}
                            </CustomHeader>
                        {videos?.map(({id, link}) => {
                            return <iframe allowFullScreen className={'col-lg-4 col-sm-6 col-12 my-2'} key={id} src={link} height={250}/>
                        })}
                        </>
                    : <AlertComponent imgSrc={'/img/noData.jpg'}/> }
                </div>
            </main>
        </>
    );
};

export async function getServerSideProps(context: any) {
    const data = await fetch(`https://admin.gead.az/api/video`)
    const json = await data.json();
    return {
        props: {
            videos: json?.videos
        }
    };
}

export default GalleryVideos;
