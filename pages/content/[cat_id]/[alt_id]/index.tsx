import CardTopImg from "@/Components/Card/CardTopImg";
import {useTranslation} from "react-i18next";
import {useCategoriesQuery} from "@/Store/Query/GeneralQuery";
import {contentItem} from "@/interfaces/generalTypesInterfaces";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import React, {useMemo} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";

const ContentPage = ({data}:{data:{content:contentItem[]}}) => {
    const {query: {cat_id, alt_id}} = useRouter()
    const {t, i18n} = useTranslation('common')
    const {data:categories, isLoading} = useCategoriesQuery('');

    const myHeaderInfo = categories?.categories.find((item => item.id === +cat_id!))

    const header = `${myHeaderInfo?.translations.find(item => item.locale === i18n.language)?.name.toLowerCase()} / ${myHeaderInfo?.alt.find(item => item.id === +alt_id!)?.translations.find(item => item.locale === i18n.language)?.name.toLowerCase()}`


    return <>
        <Head>
            <meta name="keywords" content={header}/>
            <title>
                {header + ' | GEAD'}
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
    const {query} = context

    const data = await fetch(`https://admin.gead.az/api/content/${query.cat_id}/${query.alt_id}`);
    const json = await data.json();
    return {
        props:{
            data: json
        }
    };
}


export default ContentPage;