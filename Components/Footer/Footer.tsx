import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getSettingState } from "@/Store/Slices/General";
import React from "react";
import { useSettingsQuery } from "@/Store/Query/GeneralQuery";

const Footer = () => {
  const { t } = useTranslation("common");
  const settings = useSelector(getSettingState);
  // console.log(settings);
  // console.log(apiSettings);
  const apiSettings = useSettingsQuery()?.data?.settings
  
  return (
    <>
      <footer id="footer">
        <div className="footer-copyright">
          <div className="container container-xl-custom py-2">
            <div className="row py-4">
              <div className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
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
              <div
                style={{ fontSize: "1.2rem" }}
                className="copyright col-lg-7 d-flex  align-items-center justify-content-start    mb-4 mb-lg-0"
              >
                <p>
                  © {t("copyright")} {new Date().getFullYear()}. {t("rights")}
                </p>
              </div>
              <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
                <nav id="sub-menu">
                  <ul>
                    <li>
                      <a href="https://www.premium.az/">{t("developed")}</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ul className="header-social-icons social-icons   d-sm-flex gap-1">
                <li className="social-icons-facebook" style={{paddingRight:"6px"}}>
                  <a
                    href={`${
                      apiSettings?.find((el) => el.name == "facebook")?.link
                    }`}
                    target="_blank"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-icons-instagram" style={{paddingRight:"6px"}}>
                  <a
                    href={`${
                      apiSettings?.find((el) => el.name == "instagram")?.link
                    }`}
                    target="_blank"
                    title="instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="social-icons-twitter" style={{paddingRight:"6px"}}>
                  <a
                    href={`${
                      apiSettings?.find((el) => el.name == "twitter")?.link
                    }`}
                    target="_blank"
                    title="twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li className="social-icons-youtube" style={{paddingRight:"6px"}}>
                  <a
                    href={`${
                      apiSettings?.find((el) => el.name == "youtube")?.link
                    }`}
                    target="_blank"
                    title="youtube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="social-icons-linkedin" style={{paddingRight:"6px"}}>
                  <a
                    href={`${
                      apiSettings?.find((el) => el.name == "linkedin")?.link
                    }`}
                    target="_blank"
                    title="youtube"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div>
                <i className="fas fa-phone top-6" style={{ fontSize: 13 }}></i>{" "}
                <strong style={{ color: "white" }}>{t("phone")}:</strong>{" "}
                <a
                  style={{ color: "#777" }}
                  href={`tel:${
                    apiSettings?.find((el) => el.name == "phone")?.link
                  }`}
                >
                  {apiSettings?.find((el) => el.name == "phone")?.link}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
