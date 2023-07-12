
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {searchItem} from "@/interfaces/generalTypesInterfaces";
import {transformDate} from "@/utils/transformDate";
import {useTranslation} from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


const Search_text = ({data: {result}}: { data: { result: searchItem[] } }) => {
    const inputRef = useRef<any>()
    const [pagination, setPagination] = useState(1)
    const {i18n, t} = useTranslation('common')
    const {query, push} = useRouter()
    const isArrayResult = Array.isArray(result)
    useEffect(() => {
        setPagination(1)
    },[result])

    const generatePagination = (result: any) => {
        const paginationList = []
        const length = Math.ceil(result.length / 10)
        for (let i = 1; i <= length; i++) {
            paginationList.push(<li className="page-item">
                <a onClick={() => setPagination(i)} style={{cursor: 'pointer'}}
                   className={"page-link " + (i === pagination && 'active')}>
                    {i}
                </a>
            </li>)
        }

        return paginationList
    }

    return (
        <>
            <Head>
                <title>
                    {t('photo-gallery') !== 'photo-gallery' ? (isArrayResult ? result.length : 0 + t('search-result-1') + query.search_text + ' | GEAD') : 'GEAD'}
                </title>
            </Head>
            <div role="main" className="main">
                <section
                    className="page-header page-header-modern page-header page-header-modern bg-color-primary page-header-md m-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 align-self-center p-static order-2 text-center">
                                {" "}
                                <h1 className="text-light text-10">
                                    <strong>{t('search')}</strong>
                                </h1>{" "}
                            </div>
                            {" "}
                        </div>
                    </div>
                </section>
                <hr className="m-0"/>

                <section style={{padding: '20px 0'}} className="section section-default border-0 m-0">
                    <div className="container py-4">
                        <div className="row pb-4">
                            <div className="col">
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    inputRef.current!.value && push(`/search-results/${inputRef.current!.value}`)
                                }} role="search" method="get">
                                    {" "}
                                    <div className="input-group input-group-lg">
                                        {" "}
                                        <input
                                            className="form-control h-auto"
                                            id="headerSearch"
                                            name="search"
                                            type="search"
                                            placeholder={`${t('search')}`}
                                            ref={inputRef}
                                        />{" "}
                                        <button className="btn" type="submit">
                                            {" "}
                                            <i className="fas fa-search header-nav-top-icon"></i>{" "}
                                        </button>
                                        {" "}
                                    </div>
                                    {" "}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container py-5 mt-3">
                    <div className="row">
                        <div className="col">
                            <h2 className="font-weight-normal text-7 mb-0">
                                {isArrayResult ? result.length : 0} {t('search-result-1')}: <strong>{query.search_text}</strong>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pt-2 mt-1">
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {isArrayResult ? <>
                                <ul className="simple-post-list m-0">
                                    {result && result.length > 0 && result.slice((pagination - 1) * 10, (pagination - 1) * 10 + 10).map(item => {
                                        return <li key={item.id}>
                                            <div style={{display:'flex', alignItems:'center'}} className="post-info">
                                                {item?.photo?.length > 0 &&  <Link
                                                    href={`/content/${item.id}`}><Image style={{marginRight:'15px', objectFit: "cover"}} width={150} height={75} src={process.env["NEXT_PUBLIC_MAIN_PATH_WITHOUT_API"] + item.photo} alt={item?.translations.find(item => item.locale === i18n.language)?.name || 'img'}/></Link>}
                                                <div className="text_info">
                                                    <Link
                                                        href={`/content/${item.id}`}>{item.translations.find(item => item.locale === i18n?.language)?.name}</Link>
                                                    <div className="post-meta">
                                                        {transformDate(item.created_at)}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    })}
                                </ul>

                                <ul className="pagination float-end">
                                    <li onClick={() => setPagination(value => {
                                        if (!(value - 1 <= 0)) {
                                            return value - 1
                                        } else {
                                            return value
                                        }
                                    })} className="page-item">
                                        <a className="page-link">
                                            <i className="fas fa-angle-left"></i>
                                        </a>
                                    </li>
                                    {generatePagination(result)}
                                    <li onClick={() => setPagination(value => {
                                        if (!(value + 1 > Math.ceil(result.length / 10))) {
                                            return value + 1
                                        } else {
                                            return value
                                        }
                                    })} className="page-item">
                                        <a className="page-link">
                                            <i className="fas fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </> : <h1>{t(result)}</h1>}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export function getServerSideProps(context: any) {
    return fetch(process.env["NEXT_PUBLIC_MAIN_PATH"] + 'search/' + context.query.search_text)
        .then(async (res) => {
            const data = await res.json()
            return {
                props: {
                    data: data,
                    ...(await serverSideTranslations(context.locale, ["common"])),

                }
            }
        })
}

export default Search_text;
