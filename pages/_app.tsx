import {useSettingsQuery} from "@/Store/Query/GeneralQuery";
import {setSettings} from "@/Store/Slices/General";
import {store} from "@/Store/store";
import "@/styles/globals.scss";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {createWrapper} from "next-redux-wrapper";
import type {AppProps} from "next/app";
import {StrictMode, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {categoryItem} from "@/interfaces/generalTypesInterfaces";
import HeaderWraper from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import {useRouter} from "next/router";
import {appWithTranslation} from "next-i18next";

function App({Component, pageProps}: AppProps<{ categories: categoryItem[] }>) {
    const {data} = useSettingsQuery('');
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const router = useRouter()
    useEffect(() => {
        AOS.init();
        if (Array.isArray(data?.settings) && data?.settings?.length > 0) {
            dispatch(setSettings(data.settings));
        }
    }, [data]);

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true)
        };

        const handleRouteComplete = () => {
            setLoading(false)
        };

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)// If the component is unmounted, unsubscribe

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])


    return <>
        <StrictMode>
            {loading ? <div className="page-preloader">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div> : ''}
            <HeaderWraper>
                <Component {...pageProps} />
                <Footer/>
            </HeaderWraper>
        </StrictMode>
    </>
}

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(appWithTranslation(App));

export async function getServerSideProps(locale: any) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
    // }
}





