import CardTopImg from "@/Components/Card/CardTopImg";
import {useTranslation} from "react-i18next";
import {useCategoriesQuery} from "@/Store/Query/GeneralQuery";
import {categoryItem, contentItem} from "@/interfaces/generalTypesInterfaces";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import React, {useMemo} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import {useSelector} from "react-redux";
import {getLanguage} from "@/Store/Slices/General";

const ContentPage = ({data,category:{categories}}:{data:{content:contentItem[]}, category:{categories:categoryItem[]} }) => {
    const {query: {cat_id, alt_id}} = useRouter()
    const {t, i18n} = useTranslation('common')
    const language = useSelector(getLanguage)

    const myHeaderInfo = categories.find((item => item.id === +cat_id!))

    const header = `${myHeaderInfo?.translations.find(item => item.locale === language)?.name.toLowerCase()} | ${myHeaderInfo?.alt.find(item => item.id === +alt_id!)?.translations.find(item => item.locale === language)?.name.toLowerCase()}`


    return <>
        <Head>
            <meta name="keywords" content={header}/>
            <title>
                {!(header.indexOf('undefined') >= 0)  ? header.toUpperCase() + ' | GEAD' : 'GEAD'}
            </title>
        </Head>
        <div className="custom-container py-4">
       
            {Array.isArray(data.content) ? <>
                <CustomHeader>
                    {header}
                </CustomHeader>


                <div className='my-4 row'>
                    {data?.content.length > 0 && data?.content.map((item) => {
                        return <CardTopImg  key={item.id} item={item}
                                            width={'none'}/>
                    })}
                </div>
            </> : <div className="appear-animation custom-container py-4"
                       data-appear-animation="fadeIn"
                       data-appear-animation-delay="0"
                       style={{textAlign: 'center', animationDuration: "1s", animationDelay: "0ms"}}><Image
                style={{objectFit: 'contain', maxWidth: '100%', height: 'min-content'}} src={'/img/noData.jpg'}
                alt={'img'} width={1000} height={600}/></div> }
        </div>
    </>
};


export async function getServerSideProps(context:any) {
    const {query,locale} = context

    console.log(locale)

    const data = await fetch(`https://admin.gead.az/api/content/${query.cat_id}/${query.alt_id}`);
    const json = await data.json();

    const category = await fetch(`https://admin.gead.az/api/categories`)
    const categoryJson = await category.json();
    return {
        props:{
            data: json,
            category:categoryJson
        }
    };
}


export default ContentPage;