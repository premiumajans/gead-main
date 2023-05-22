import CardForGallery from "@/Components/Card/CardForGallery";
import {galleryInterface} from "@/interfaces/generalTypesInterfaces";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import {useTranslation} from "react-i18next";
import Head from "next/head";
import React from "react";

const PhotoGalery = ({data}: { data: galleryInterface[] }) => {
    const {t} = useTranslation('common')
    return <>
        <Head>
            <meta name="keywords" content={`${t('photo-gallery')}`}/>
            <title>
                {t('photo-gallery') + ' | GEAD'}
            </title>
        </Head>
        <div className="custom-container my-3">
            {Array.isArray(data) ? <>
                <CustomHeader>
                    {t('photo-gallery')}
                </CustomHeader>

                <div className='my-4 row'>
                    {data?.map((item) => {
                        return <CardForGallery key={item.id} item={item}
                                               width={'none'}/>
                    })}
                </div>
            </> : ''}

        </div>
    </>
};


export async function getServerSideProps(context: any) {

    const data = await fetch(`https://admin.gead.az/api/gallery`)
    const json = await data.json();
    return {
        props: {
            data: json?.gallery
        }
    };
}


export default PhotoGalery;