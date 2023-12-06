import CardForGallery from "@/Components/Card/CardForGallery";
import {galleryInterface} from "@/interfaces/generalTypesInterfaces";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import {useTranslation} from "next-i18next";
import Head from "next/head";
import React from "react";
import AlertComponent from "@/Components/AleryComponent/AlertComponent";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const PhotoGalery = ({data}: { data: galleryInterface[] }) => {
    const {t} = useTranslation('common')
    return <>
        <Head>
            <meta name="keywords" content={`${t('photo-gallery')}`}/>
            <title>
                {t('photo-gallery') !== 'photo-gallery' ? t('photo-gallery') + ' | GEAD' : 'GEAD'}
            </title>
        </Head>
        <div className="custom-container my-3">
            {Array.isArray(data) ? <>
                <CustomHeader>
                    {t('photo-gallery')}
                </CustomHeader>

                <div className='my-4 row'>
                    {data?.sort((a,b) => b.id - a.id).map((item) => {
                        return <CardForGallery key={item.id} item={item}
                                               width={'none'}/>
                    })}
                </div>
            </> : <AlertComponent imgSrc={'/img/noData.jpg'} />}

        </div>
    </>
};


export async function getServerSideProps(context: any) {

    const data = await fetch(`https://admin.gead.az/api/gallery`)
    const json = await data.json();
    return {
        props: {
            data: json?.gallery,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    };
}


export default PhotoGalery;