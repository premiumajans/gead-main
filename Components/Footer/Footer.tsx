import {useTranslation} from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const {t} = useTranslation("common");
    return (
        <>
            <footer id="footer">
                <div className="footer-copyright">
                    <div className="container container-xl-custom py-2">
                        <div className="row py-4">
                            <div
                                className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                                <Link href="/" className="logo pe-0 pe-lg-3">
                                    {" "}
                                    <Image
                                        width={165}
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "20%",
                                            background: "white",
                                        }}
                                        alt="GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai Birliyi"
                                        src="/img/logo.png"
                                        height="50"
                                    />
                                </Link>
                            </div>
                            <div style={{fontSize: '1.2rem'}}
                                 className="copyright col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                                <p>
                                    © {t('copyright')} {new Date().getFullYear()}. {t("rights")}
                                </p>
                            </div>
                            <div
                                className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
                                <nav id="sub-menu">
                                    <ul>
                                        <li>
                                            <a href="https://www.premium.az/">
                                                {t('developed')}
                                        </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
