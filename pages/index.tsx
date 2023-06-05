import Carousel from "@/Components/Carousel/Carousel";
import CarouselWithCard from "@/Components/Carousel/CarouselWithCard";
import CardTopImg from "@/Components/Card/CardTopImg";
import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {contentItem, mainSliderInterface, usefulLink} from "@/interfaces/generalTypesInterfaces";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import {useTranslation} from "react-i18next";
import CustomHeaderLineless from "@/Components/CustomHeaderLineless/CustomHeaderLineless";
import {useRouter} from "next/router";

export default function Home({data, link: {links}, news: {news}, writer: {writers}}: {
    data: { sliders: mainSliderInterface[] },
    link: { links: usefulLink[] },
    news: { news: contentItem[] },
    writer: { writers: contentItem[] }
}) {
    const Slider = dynamic(() => import('react-slick'), {ssr: false})
    const  {locale:language} = useRouter()
    const {t, i18n} = useTranslation('common')

    const settings = {
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
        ],
    }




    return (
        <>
            <Head>
                <meta name="keywords" content={'gead.az, GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai Birliyi'}/>
                <title>
                    {t('main-page') !== 'main-page' ? t('main-page') + ' | GEAD' : 'GEAD'}

                </title>
            </Head>


            <div style={{height: '75vh'}} className="slider_wraper ">
                <div
                    className="appear-animation"
                    data-appear-animation="fadeIn"
                    data-appear-animation-delay="0" style={{animationDuration: "1s", animationDelay: "0ms"}}>
                    <Slider {...settings}>
                        {Array.isArray(data?.sliders) && data?.sliders.length! > 0 && data?.sliders.map((item, index) => {
                            return <div key={item.id}>
                                <Image width={1500} height={1500}
                                       style={{width: '100%', height: '75vh', objectFit: 'cover'}}
                                       src={process.env["NEXT_PUBLIC_MAIN_PATH_WITHOUT_API"] + item.photo}
                                       alt={item.alt}/>
                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light negative-ls-2   animate__fadeInDown animate__delay-1s "
                                    style={{
                                        whiteSpace: 'normal',
                                        textAlign: 'center',
                                        width: '100%',
                                        fontSize: '2rem',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    {item.translations.find(item => item.locale === language)?.title}
                                </div>
                            </div>
                        })
                        }
                    </Slider>
                </div>
            </div>

            <div className="custom-container py-4">
                <div className="row">
                    <div className="col-lg-12">

                        <CarouselWithCard link={'/writer/'} title={'writers'} items={writers}/>
                        {Array.isArray(news) ? <div className="list">
                            <CustomHeaderLineless>
                                {t('news')}
                            </CustomHeaderLineless>
                            <div className="row d-flex flex-wrap py-4 ">
                                {news.map(item => {
                                    return <CardTopImg key={item.id} item={item} width={""}/>
                                })}
                            </div>
                        </div> : ''}
                    </div>
                </div>
                <div
                    className="appear-animation"
                    data-appear-animation="fadeIn"
                    data-appear-animation-delay="0" style={{animationDuration: "1s", animationDelay: "0ms"}}>
                    <Carousel data={links}/>
                </div>

            </div>
        </>

    );
}


export async function getServerSideProps(context: any) {



    const data = await fetch(`https://admin.gead.az/api/slider`);
    const link = await fetch(`https://admin.gead.az/api/useful-links`);
    const news = await fetch(`https://admin.gead.az/api/content-news`);
    const writer = await fetch(`https://admin.gead.az/api/writer`);

    const dataJson = await data.json();
    const linkJson = await link.json();
    const newsJson = await news.json();
    const writerJson = await writer.json();


    return {
        props: {
            data: dataJson,
            link: linkJson,
            news: newsJson,
            writer: writerJson

        }
    };
}
