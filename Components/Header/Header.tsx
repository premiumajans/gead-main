import Image from "next/image";
import {PropsWithChildren, SetStateAction, useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import {useCategoriesQuery} from "@/Store/Query/GeneralQuery";
import {useDispatch, useSelector} from "react-redux";
import {getLanguage, getSettingState, setLanguage} from "@/Store/Slices/General";
import {useRouter} from "next/router";

const HeaderWraper = ({children}: PropsWithChildren) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)
    const {push} = useRouter()
    const {i18n, t} = useTranslation("common");
    const {data, isLoading} = useCategoriesQuery('');
    const settings = useSelector(getSettingState);
    const inputRef1 = useRef<any>()
    const inputRef2 = useRef<any>()
    const [catItems, setCatItems] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (data?.categories?.length! > 0) {
            setCatItems(data.categories.map(() => false))
        }
    }, [data])

    useEffect(() => {
        setShow(true)
    }, [])

    const openMobileItem = (i: number) => {
        if (window.screen.width < 992) {
            const currentArray:boolean[] = [...catItems]
            currentArray[i] = !currentArray[i]
            setCatItems([...currentArray])
        }
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            const script1 = document.createElement('script')
            script1.setAttribute('class', 'theme')
            script1.src = '/js/theme.js'
            script1.defer = true
            document.head.appendChild(script1)


            const script = document.createElement('script')
            script.setAttribute('class', 'plugin')
            script.src = '/js/theme.init.js'
            script.defer = true
            document.head.appendChild(script)

        }
        return () => {
            document.querySelector('.plugin')!.remove()
            document.querySelector('.theme')!.remove()
            // document.querySelector('.scroll-to-top ')!.remove()
        }
    })

    return (
        <>
            <header
                id="header"
                data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyStartAt': 10, 'stickySetTop': '-109px', 'stickyChangeLogo': true}"
            >

                <div className="header-body" style={{top: "0px"}}>
                    <div style={{height: '100%'}} className="header-container custom-container">
                        <div className="header-row">
                            <div className="header-column">
                                <div className="header-row">
                                    <div
                                        className="header-logo"
                                        style={{height: "90%"}}
                                    >
                                        <Link onClick={() => setMenu(false)} href="/">
                                            <Image
                                                alt="GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai Birliyi"
                                                width="165"
                                                height="130"
                                                data-sticky-width="82"
                                                data-sticky-height="82"
                                                data-sticky-top="94"
                                                src="/img/logo.png"
                                                style={{
                                                    top: "0px",
                                                    width: "165px",
                                                    height: "100%",
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="header-column justify-content-end">
                                <div className="header-row">
                                    <div className="header-nav pt-1 firs-nav">
                                        <div
                                            className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">


                                            {show && <nav className={"collapse " + (menu ? 'show' : '')}>
                                                <div className={'mobile'} style={{
                                                    flexWrap: 'wrap',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}>
                                                    {settings?.length > 0 ? (
                                                        <ul className="header-social-icons social-icons  d-sm-block">
                                                            <li className="social-icons-facebook">
                                                                <a
                                                                    href={`${
                                                                        settings?.find((el) => el.name == "facebook")
                                                                            ?.link
                                                                    }`}
                                                                    target="_blank"
                                                                    title="Facebook"
                                                                >
                                                                    <i className="fab fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li className="social-icons-instagram">
                                                                <a
                                                                    href={`${
                                                                        settings?.find((el) => el.name == "instagram")
                                                                            ?.link
                                                                    }`}
                                                                    target="_blank"
                                                                    title="instagram"
                                                                >
                                                                    <i className="fab fa-instagram"></i>
                                                                </a>
                                                            </li>
                                                            <li className="social-icons-twitter">
                                                                <a
                                                                    href={`${
                                                                        settings?.find((el) => el.name == "twitter")?.link
                                                                    }`}
                                                                    target="_blank"
                                                                    title="twitter"
                                                                >
                                                                    <i className="fab fa-twitter"></i>
                                                                </a>
                                                            </li>

                                                            <li className="social-icons-youtube">
                                                                <a
                                                                    href={`${
                                                                        settings?.find((el) => el.name == "youtube")?.link
                                                                    }`}
                                                                    target="_blank"
                                                                    title="youtube"
                                                                >
                                                                    <i className="fab fa-youtube"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    ) : (
                                                        ""
                                                    )}

                                                    {" "}
                                                    <ul className="nav nav-pills header-nav-top">
                                                        {" "}
                                                        <li className="nav-item dropdown nav-item-left-border  d-sm-block nav-item-left-border-remove nav-item-left-border-md-show">
                                                            {" "}
                                                            <a style={{fontWeight: 'bold'}}
                                                               className="nav-link"
                                                               href="#"
                                                               role="button"
                                                               id="dropdownLanguage"
                                                               data-bs-toggle="dropdown"
                                                               aria-haspopup="true"
                                                               aria-expanded="false"
                                                            >
                                                                {" "}
                                                                <Image
                                                                    width={16}
                                                                    height={11}
                                                                    src="/img/blank.gif"
                                                                    className={
                                                                        "flag " +
                                                                        (i18n.language === "en"
                                                                            ? "flag-us"
                                                                            : "flag-" + i18n.language)
                                                                    }
                                                                    alt="English"
                                                                />{" "}
                                                                {i18n.language == "en"
                                                                    ? "English"
                                                                    : i18n.language == "az"
                                                                        ? "Azərbaycan"
                                                                        : i18n.language == "ru"
                                                                            ? "Русский"
                                                                            : ""}{" "}
                                                                <i className="fas fa-angle-down"></i>{" "}
                                                            </a>{" "}
                                                            <div
                                                                className="dropdown-menu"
                                                                aria-labelledby="dropdownLanguage"
                                                            >
                                                                {" "}
                                                                <a
                                                                    onClick={() => {
                                                                        i18n.changeLanguage("az")
                                                                            .then(() => {
                                                                                dispatch(setLanguage('az'))
                                                                            })

                                                                    }}
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    <Image
                                                                        width={16}
                                                                        height={11}
                                                                        src="/img/blank.gif"
                                                                        className="flag flag-az"
                                                                        alt="Azərbaycan"
                                                                    />{" "}
                                                                    Azərbaycan
                                                                </a>{" "}
                                                                <a
                                                                    onClick={() => {
                                                                        i18n.changeLanguage("en").then(() => {
                                                                            dispatch(setLanguage('en'))
                                                                        })

                                                                    }}
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    <Image
                                                                        width={16}
                                                                        height={11}
                                                                        src="/img/blank.gif"
                                                                        className="flag flag-us"
                                                                        alt="English"
                                                                    />{" "}
                                                                    English
                                                                </a>{" "}
                                                                <a
                                                                    onClick={() => {
                                                                        i18n.changeLanguage("ru")
                                                                            .then(() => {
                                                                                dispatch(setLanguage('ru'))
                                                                            })

                                                                    }}
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    <Image
                                                                        width={16}
                                                                        height={11}
                                                                        src="/img/blank.gif"
                                                                        className="flag flag-ru"
                                                                        alt="Russian"
                                                                    />{" "}
                                                                    Русский
                                                                </a>{" "}
                                                            </div>
                                                            {" "}
                                                        </li>
                                                        {" "}
                                                    </ul>
                                                </div>

                                                <div className={'search_wraper'}>
                                                    <div
                                                        className={"header-nav-features-dropdown  show "}
                                                        id="headerTopSearchDropdown"
                                                    >
                                                        {" "}
                                                        <form onSubmit={(e) => {
                                                            setMenu(false)
                                                            e.preventDefault()
                                                            inputRef2.current!.value && push(`/search-results/${inputRef2.current!.value}`)

                                                        }} role="search">
                                                            {" "}
                                                            <div className="simple-search input-group">
                                                                {" "}
                                                                <input
                                                                    className="form-control text-1"
                                                                    id="headerSearch"
                                                                    name="search"
                                                                    type="search"
                                                                    placeholder={`${t('search')}`}
                                                                    ref={inputRef2}
                                                                />{" "}
                                                                <button className="btn" type="submit">
                                                                    {" "}
                                                                    <i className="fas fa-search header-nav-top-icon"></i>{" "}
                                                                </button>
                                                                {" "}
                                                            </div>
                                                            {" "}
                                                        </form>
                                                        {" "}
                                                    </div>
                                                </div>

                                                {Array.isArray(data?.categories) && data?.categories?.length! > 0 &&
                                                    <ul className="nav nav-pills" id="mainNav">
                                                        {data?.categories?.map((item, index) => {
                                                            return (
                                                                <li style={{cursor: 'pointer'}} key={Math.random()}
                                                                    className={"dropdown " + (catItems[index] ? 'open' : '')}
                                                                >
                                                                    <a onClick={() => openMobileItem(index)}
                                                                       className="dropdown-item dropdown-toggle"

                                                                    >
                                                                        {" "}
                                                                        {
                                                                            item.translations.find(
                                                                                (el) => el.locale == i18n.language
                                                                            )?.name
                                                                        }
                                                                        <i className="fas fa-chevron-down"></i>
                                                                    </a>
                                                                    <ul className={"dropdown-menu " + (catItems[index] ? 'open' : '')}>
                                                                        {item.slug === 'sections' ? <>

                                                                            <li className={'dropdown-submenu ' + (catItems[index] ? 'open' : '')}>
                                                                                <a
                                                                                    className="dropdown-item">{t('gallery')}
                                                                                    <i
                                                                                        className="fas fa-chevron-down"></i></a>
                                                                                <ul className="dropdown-menu">
                                                                                    <li><Link onClick={() => {
                                                                                        setCatItems([])
                                                                                        setMenu(false)
                                                                                    }}
                                                                                              className="dropdown-item"
                                                                                              href='/photo-gallery'>{t('photo-gallery')}</Link>
                                                                                    </li>

                                                                                    <li><Link onClick={() => {
                                                                                        setCatItems([])
                                                                                        setMenu(false)
                                                                                    }}
                                                                                              className="dropdown-item"
                                                                                              href='/video-gallery'>{t('video-gallery')}</Link>
                                                                                    </li>

                                                                                </ul>
                                                                            </li>

                                                                            <li>
                                                                                <Link onClick={() => {
                                                                                    setCatItems([])
                                                                                    setMenu(false)
                                                                                }}
                                                                                      href={'/about'}
                                                                                      className="dropdown-item">{t('about-gead')}</Link>
                                                                            </li>

                                                                            <li>
                                                                                <Link onClick={() => {
                                                                                    setCatItems([])
                                                                                    setMenu(false)
                                                                                }}
                                                                                      href={'/contact'}
                                                                                      className="dropdown-item">{t('contact-us')}</Link>
                                                                            </li>
                                                                        </> : ''}
                                                                        {item.alt.map((alt) => {
                                                                            return (
                                                                                <li
                                                                                    className={
                                                                                        alt.sub.length > 0
                                                                                            ? "dropdown-submenu " + (catItems[index] ? 'open' : '')
                                                                                            : ""
                                                                                    }
                                                                                    key={Math.random()}
                                                                                >
                                                                                    {alt.sub.length > 0 ? <a
                                                                                        className="dropdown-item"
                                                                                    >
                                                                                        {
                                                                                            alt.translations.find(
                                                                                                (el) =>
                                                                                                    el.locale == i18n.language
                                                                                            )?.name
                                                                                        }
                                                                                    </a> : <Link onClick={() => {
                                                                                        setCatItems([])
                                                                                        setMenu(false)
                                                                                    }}
                                                                                                 className="dropdown-item"
                                                                                                 href={'/content/' + (item.id + '/' + alt.id)}
                                                                                    >
                                                                                        {
                                                                                            alt.translations.find(
                                                                                                (el) =>
                                                                                                    el.locale == i18n.language
                                                                                            )?.name
                                                                                        }
                                                                                    </Link>}
                                                                                    <ul className="dropdown-menu">
                                                                                        {alt.sub.map((sub) => {
                                                                                            return (
                                                                                                <li key={Math.random()}>
                                                                                                    <Link
                                                                                                        onClick={() => {
                                                                                                            setCatItems([])
                                                                                                            setMenu(false)
                                                                                                        }}
                                                                                                        className="dropdown-item"
                                                                                                        href={'/content/' + (item.id + '/' + alt.id + '/' + sub.id)}
                                                                                                    >
                                                                                                        {
                                                                                                            sub.translations.find(
                                                                                                                (el) =>
                                                                                                                    el.locale ==
                                                                                                                    i18n.language
                                                                                                            )?.name
                                                                                                        }
                                                                                                    </Link>
                                                                                                </li>
                                                                                            );
                                                                                        })}
                                                                                    </ul>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>}

                                            </nav>}
                                        </div>

                                        <div className={'not-mobile'} style={{
                                            display: 'flex',
                                            flexDirection: 'row-reverse',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <nav className="header-nav-top">
                                                {" "}
                                                <ul className="nav nav-pills">
                                                    {" "}
                                                    <li className="nav-item  nav-item-left-border  d-sm-block nav-item-left-border-remove nav-item-left-border-md-show">
                                                        {" "}
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            role="button"
                                                            id="dropdownLanguage"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            <Image
                                                                width={16}
                                                                height={11}
                                                                src="/img/blank.gif"
                                                                className={
                                                                    "flag " +
                                                                    (i18n.language === "en"
                                                                        ? "flag-us"
                                                                        : "flag-" + i18n.language)
                                                                }
                                                                alt="English"
                                                            />{" "}
                                                            {i18n.language == "en"
                                                                ? "English"
                                                                : i18n.language == "az"
                                                                    ? "Azərbaycan"
                                                                    : i18n.language == "ru"
                                                                        ? "Русский"
                                                                        : ""}{" "}
                                                            <i className="fas fa-angle-down"></i>{" "}
                                                        </a>{" "}
                                                        <div
                                                            style={{width:'min-content'}}
                                                            className="dropdown-menu"
                                                            aria-labelledby="dropdownLanguage"
                                                        >
                                                            {" "}
                                                            <a
                                                                onClick={() => {
                                                                    i18n.changeLanguage("az")
                                                                        .then(() => {
                                                                            dispatch(setLanguage('az'))
                                                                        })

                                                                }}
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                <Image
                                                                    width={16}
                                                                    height={11}
                                                                    src="/img/blank.gif"
                                                                    className="flag flag-az"
                                                                    alt="Azərbaycan"
                                                                />{" "}
                                                                Azərbaycan
                                                            </a>{" "}
                                                            <a
                                                                onClick={() => {
                                                                    i18n.changeLanguage("en")
                                                                        .then(res => {
                                                                            dispatch(setLanguage('en'))
                                                                        })

                                                                }}
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                <Image
                                                                    width={16}
                                                                    height={11}
                                                                    src="/img/blank.gif"
                                                                    className="flag flag-us"
                                                                    alt="English"
                                                                />{" "}
                                                                English
                                                            </a>{" "}
                                                            <a
                                                                onClick={() => {
                                                                    i18n.changeLanguage("ru")
                                                                        .then(() => {
                                                                            dispatch(setLanguage('ru'))
                                                                        })

                                                                }}
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                <Image
                                                                    width={16}
                                                                    height={11}
                                                                    src="/img/blank.gif"
                                                                    className="flag flag-ru"
                                                                    alt="Russian"
                                                                />{" "}
                                                                Русский
                                                            </a>{" "}
                                                        </div>
                                                        {" "}
                                                    </li>
                                                    {" "}
                                                </ul>
                                                {" "}
                                            </nav>
                                            <div className="header-nav-features">
                                                {" "}
                                                <div
                                                    className="header-nav-feature header-nav-features-search d-inline-flex">
                                                    {" "}
                                                    <a onClick={() => {
                                                        setSearch(!search)
                                                    }}
                                                       style={{cursor: "pointer"}}
                                                       className="header-nav-features-toggle text-decoration-none"
                                                       data-focus="headerSearch"
                                                    >
                                                        <i className="fas fa-search header-nav-top-icon"></i>
                                                    </a>{" "}
                                                    <div
                                                        className={"header-nav-features-dropdown " + (search ? 'show' : '')}
                                                        id="headerTopSearchDropdown"
                                                    >
                                                        {" "}
                                                        <form onSubmit={(e) => {
                                                            e.preventDefault()
                                                            inputRef1.current!.value && push(`/search-results/${inputRef1.current!.value}`)

                                                        }} role="search">
                                                            {" "}
                                                            <div className="simple-search input-group">
                                                                {" "}
                                                                <input
                                                                    className="form-control text-1"
                                                                    id="headerSearch"
                                                                    name="search"
                                                                    type="search"
                                                                    placeholder={`${t('search')}`}
                                                                    ref={inputRef1}
                                                                />{" "}
                                                                <button className="btn" type="submit">
                                                                    {" "}
                                                                    <i className="fas fa-search header-nav-top-icon"></i>{" "}
                                                                </button>
                                                                {" "}
                                                            </div>
                                                            {" "}
                                                        </form>
                                                        {" "}
                                                    </div>
                                                    {" "}
                                                </div>
                                                {" "}
                                            </div>
                                            {show && settings?.length > 0 ? (
                                                <ul className="header-social-icons social-icons  d-sm-block">
                                                    <li className="social-icons-facebook">
                                                        <a
                                                            href={`${
                                                                settings?.find((el) => el.name == "facebook")
                                                                    ?.link
                                                            }`}
                                                            target="_blank"
                                                            title="Facebook"
                                                        >
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li className="social-icons-instagram">
                                                        <a
                                                            href={`${
                                                                settings?.find((el) => el.name == "instagram")
                                                                    ?.link
                                                            }`}
                                                            target="_blank"
                                                            title="instagram"
                                                        >
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li className="social-icons-twitter">
                                                        <a
                                                            href={`${
                                                                settings?.find((el) => el.name == "twitter")?.link
                                                            }`}
                                                            target="_blank"
                                                            title="twitter"
                                                        >
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>

                                                    <li className="social-icons-youtube">
                                                        <a
                                                            href={`${
                                                                settings?.find((el) => el.name == "youtube")?.link
                                                            }`}
                                                            target="_blank"
                                                            title="youtube"
                                                        >
                                                            <i className="fab fa-youtube"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <button
                                            onClick={() => setMenu(!menu)}
                                            className="btn header-btn-collapse-nav"
                                            data-bs-toggle="collapse"
                                            data-bs-target=".header-nav-main nav"
                                        >
                                            <i className="fas fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    )
        ;
};


export default HeaderWraper;
