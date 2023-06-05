import {useSettingsQuery} from "@/Store/Query/GeneralQuery";
import {getLanguage, setSettings} from "@/Store/Slices/General";
import {store} from "@/Store/store";
import {ni18nConfig} from "@/ni18n.config";
import "@/styles/globals.scss";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {createWrapper} from "next-redux-wrapper";
import type {AppProps} from "next/app";
import {appWithI18Next} from "ni18n";
import {StrictMode, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {categoryItem} from "@/interfaces/generalTypesInterfaces";
import HeaderWraper from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import {useTranslation} from "react-i18next";

function App({Component, pageProps}: AppProps<{ categories: categoryItem[] }>) {
    const language = useSelector(getLanguage)
    const {data} = useSettingsQuery('');
    const {i18n,t} = useTranslation()

    const dispatch = useDispatch();
    useEffect(() => {
        AOS.init();
        if (Array.isArray(data?.settings) && data?.settings?.length > 0) {
            dispatch(setSettings(data.settings));
        }
    }, [data]);


    useEffect(() => {
        const load = async () => {
            await i18n.changeLanguage(language);
        };
        load();
    },[])




    if(!t) {
        return <></>
    }

    return <>
        <StrictMode>

            <HeaderWraper>
                <Component {...pageProps} />
                <Footer/>
            </HeaderWraper>
        </StrictMode>
    </>
}

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(appWithI18Next(App, ni18nConfig));

export async function getServerSideProps(locale: any) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
    // }
}





