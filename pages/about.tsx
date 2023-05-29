import {useTranslation} from "react-i18next";
import ReactHtmlParser from 'react-html-parser';
import {aboutResponse} from "@/interfaces/generalTypesInterfaces";
import Image from "next/image";
import Head from "next/head";
import React from "react";

const About = ({data}: { data: aboutResponse[] }) => {
    const {i18n,t} = useTranslation('common')
    return (
        <>
            <Head>
                <meta name="keywords" content={'gead.az, GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai Birliyi'}/>
                <title>
                    {t('about') !== 'about' ? t('about') + ' | GEAD' : '...'}
                </title>
            </Head>
            <div style={{minHeight: '60vh'}} role="main" className="main">
                <div className="custom-container pt-5">
                    {Array.isArray(data) ? data?.map(item => {
                        const currentData = item.translations.find(elem => elem.locale == i18n.language)
                        return <div key={item.id} className="row py-4 mb-2">
                            <div className="col-md-7 order-2">
                                <div className="overflow-hidden">
                                    <h2
                                        className="text-color-dark font-weight-bold text-12 mb-3 pt-0 mt-0 appear-animation animated maskUp appear-animation-visible"
                                        data-appear-animation="maskUp"
                                        data-appear-animation-delay="300"
                                        style={{animationDelay: "300ms"}}
                                    >
                                        {currentData?.title}
                                    </h2>
                                </div>
                                <p
                                    className="lead appear-animation"
                                    data-appear-animation="fadeInUpShorter"
                                    data-appear-animation-delay="700"
                                    style={{animationDelay: "700ms"}}
                                >
                                {ReactHtmlParser(currentData?.description!)}
                                </p>


                            </div>
                            {item.photo ? <div
                                className="col-md-5 order-md-2 mb-4 mb-lg-0 appear-animation animated fadeInRightShorter appear-animation-visible"
                                data-appear-animation="fadeInRightShorter"
                                style={{animationDelay: "100ms"}}
                            >
                                <Image
                                    height={450}
                                    width={450}
                                    style={{width: "450px", height: '450px', objectFit: "cover"}}
                                    src={process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + item.photo}
                                    className="img-fluid mb-2"
                                    alt={item?.translations.find((item => item.locale === i18n.language))?.title || 'img'}
                                />
                            </div> : ''}
                            <hr
                                className="solid my-4 appear-animation animated fadeInUpShorter appear-animation-visible"
                                data-appear-animation="fadeInUpShorter"
                                data-appear-animation-delay="900"
                                style={{animationDelay: "900ms"}}
                            />
                        </div>
                    }) : <div className="appear-animation custom-container py-4"
                              data-appear-animation="fadeIn"
                              data-appear-animation-delay="0"
                              style={{textAlign: 'center', animationDuration: "1s", animationDelay: "0ms"}}><Image
                        style={{objectFit: 'contain', maxWidth: '100%', height: 'min-content'}} src={'/img/noData.jpg'}
                        alt={'img'} width={1000} height={600}/></div>}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps(context: any) {

    const data = await fetch(`https://admin.gead.az/api/about`)
    const json = await data.json();
    return {
        props: {
            data: json?.about
        }
    };
}

export default About;
