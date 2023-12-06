import CardTopImg from "@/Components/Card/CardTopImg";
import {useTranslation} from "next-i18next";
import {categoryItem, contentItem} from "@/interfaces/generalTypesInterfaces";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import React from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import CardWithText from "@/Components/Card/CardWithText";


const ContentPage = ({data,category:{categories}}: { data: { content: contentItem[] },category:{categories:categoryItem[]} }) => {
    const {query: {cat_id, alt_id, sub_id}} = useRouter()
    const {t, i18n} = useTranslation('common')
    const myHeaderInfo =  categories.find((item => item.id === +cat_id!))


    const headerTranslatedNames = [myHeaderInfo?.translations.find(item => item.locale === i18n.language)?.name, myHeaderInfo?.alt.find(item => item.id === +alt_id!)?.translations.find(item => item.locale === i18n.language)?.name, myHeaderInfo?.alt?.find(item => item.id === +alt_id!)?.sub?.find(item => item.id === +sub_id!)?.translations.find(item => item.locale === i18n.language)?.name]
    const header = `${headerTranslatedNames[0]?.toLowerCase()} | ${headerTranslatedNames[1]?.toLowerCase()} | ${headerTranslatedNames[2]?.toLowerCase()}`

    return <>
        <Head>
            <meta name="keywords" content={header}/>
            <title>
                {(header.toUpperCase() + ' | GEAD')}
            </title>
        </Head>
        <div className="custom-container py-4">
            {Array.isArray(data.content) ? <>
                <CustomHeader>
                    {header}
                </CustomHeader>

                <div className='my-4 row'>
                    {data?.content.length > 0 && data?.content.sort((a,b) => b.id - a.id).map((item) => {
                        return <CardWithText key={item.id} item={item} width={"none"}/>
                    })}
                </div>
            </> : <div className="appear-animation custom-container py-4"
                       data-appear-animation="fadeIn"
                       data-appear-animation-delay="0"
                       style={{textAlign: 'center', animationDuration: "1s", animationDelay: "0ms"}}><Image
                style={{objectFit: 'contain', maxWidth: '100%', height: 'min-content'}} src={'/img/noData.jpg'}
                alt={'img'} width={1000} height={600}/></div>}
        </div>
    </>
};


export async function getServerSideProps(context: any) {
    const {query} = context

    const data = await fetch(`https://admin.gead.az/api/content/${query.cat_id}/${query.alt_id}/${query.sub_id}`,{ cache: 'no-store' })
    const json = await data.json();

    const category = await fetch(`https://admin.gead.az/api/categories`,{ cache: 'no-store' })
    const categoryJson = await category.json();

    return {
        props: {
            data: json,
            category:categoryJson,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    };
}


export default ContentPage;