import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { getSettingState } from "@/Store/Slices/General";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostContactMutation, useSettingsQuery } from "@/Store/Query/GeneralQuery";
import Swal from "sweetalert2";
import Head from "next/head";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {
  const { t, i18n } = useTranslation("common");
  const settings = useSelector(getSettingState);
  const apiSettings = useSettingsQuery()?.data?.settings
  const [postData, { isLoading }] = usePostContactMutation();

  let schema = yup.object().shape({
    name: yup
      .string()
      .required(`${t("name-required")}`)
      .min(3, `${t("name-min-3")}`),
    email: yup
      .string()
      .email(`${t("email-valid")}`)
      .required(`${t("email-required")}`)
      .min(3, `${t("email-min-3")}`),
    subject: yup.string(),
    phone: yup
      .string()
      .required(`${t("phone-required")}`)
      .min(3, `${t("phone-min-3")}`),
    message: yup
      .string()
      .required(`${t("message-required")}`)
      .min(3, `${t("message-min-3")}`),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data: any) => {
    postData(data).then((res) => {
      if ("data" in res) {
        Swal.fire(`${t(res.data.message)}`, "", "success").then(() => {
          reset();
        });
      } else {
        Swal.fire(`${t("something-went-wrong")}`, "", "error");
      }
    });
  };
  // console.log(settings.map((item) => item));

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content={
            "gead.az, GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai Birliyi"
          }
        />
        <title>
          {t("contact-us") !== "contact-us"
            ? t("contact-us") + " | GEAD"
            : "GEAD"}
        </title>
      </Head>
      <div
        className="appear-animation"
        data-appear-animation="fadeIn"
        data-appear-animation-delay="0"
        style={{ animationDuration: "1s", animationDelay: "0ms" }}
      >
        <div className="custom-container">
          <div className="row py-4">
            <div className="col-lg-6">
              <h2 className="font-weight-bold text-8 mt-2 mb-0">
                {t("contact-us")}
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact-form"
                action="https://www.okler.net/previews/porto/9.9.0/php/contact-form.php"
                method="POST"
                noValidate={false}
              >
                <div className="contact-form-error alert alert-danger d-none mt-4">
                  <strong>Error!</strong> There was an error sending your
                  message.
                  <span className="mail-error-message text-1 d-block"></span>
                </div>

                <div className="row">
                  <div className="form-group col-lg-6">
                    <label className="form-label mb-1 text-2">
                      {t("full-name")}
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      data-msg-required="Please enter your name."
                      maxLength={100}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      name="name"
                      required={false}
                    />
                    {errors.name ? (
                      <div className="fv-plugins-message-container invalid-feedback">
                        <div>{errors.name.message as string}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group col-lg-6">
                    <label className="form-label mb-1 text-2">
                      {t("email-adress")}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      data-msg-required="Please enter your email address."
                      data-msg-email="Please enter a valid email address."
                      maxLength={100}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      name="email"
                      required={false}
                    />
                    {errors.email ? (
                      <div className="fv-plugins-message-container invalid-feedback">
                        <div>{errors.email.message as string}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label className="form-label mb-1 text-2">
                      {t("subject")}
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      data-msg-required="Please enter the subject."
                      maxLength={100}
                      className={`form-control ${
                        errors.subject ? "is-invalid" : ""
                      }`}
                      name="subject"
                      required={false}
                    />
                    {errors.subject ? (
                      <div className="fv-plugins-message-container invalid-feedback">
                        <div>{errors.subject.message as string}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="form-group col">
                    <label className="form-label mb-1 text-2">
                      {t("phone")}
                    </label>
                    <input
                      {...register("phone")}
                      type="text"
                      data-msg-required="Please enter the phone  number."
                      maxLength={100}
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      name="phone"
                      required={false}
                    />
                    {errors.phone ? (
                      <div className="fv-plugins-message-container invalid-feedback">
                        <div>{errors.phone.message as string}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label className="form-label mb-1 text-2">
                      {t("message")}
                    </label>
                    <textarea
                      {...register("message")}
                      maxLength={5000}
                      data-msg-required="Please enter your message."
                      rows={8}
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      name="message"
                      required={false}
                    ></textarea>
                    {errors.message ? (
                      <div className="fv-plugins-message-container invalid-feedback">
                        <div>{errors.message.message as string}</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="btn btn-primary btn-modern"
                      data-loading-text="Loading..."
                    >
                      {t("send-message")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: "18px" }} className="contact-item">
                <div
                  className="appear-animation animated fadeIn appear-animation-visible"
                  data-appear-animation="fadeIn"
                  data-appear-animation-delay={800}
                  style={{ animationDelay: "800ms" }}
                />
                <h4 className="mt-2 mb-1">{t("our-office")}</h4>
                <ul className="list list-icons list-icons-style-2 mt-2">
                  <li>
                    <i
                      style={{ fontSize: "13px" }}
                      className="fas fa-map-marker-alt top-6"
                    ></i>{" "}
                    <strong className="text-dark">{t("address")}:</strong>{" "}
                    {apiSettings?.find((el) => el.name == "address_"+ i18n.language)?.link}
                  </li>
                  <li>
                    <i
                      style={{ fontSize: "13px" }}
                      className="fas fa-phone top-6"
                    ></i>{" "}
                    <strong className="text-dark">{t("phone")}:</strong>{" "}
                    <a
                      style={{ color: "#777" }}
                      href={`tel:${
                        apiSettings?.find((el) => el.name == "phone")?.link
                      }`}
                    >
                      {apiSettings?.find((el) => el.name == "phone")?.link}
                    </a>
                  </li>
                  <li>
                    <i
                      style={{ fontSize: "13px" }}
                      className="fas fa-envelope top-6"
                    ></i>{" "}
                    <strong className="text-dark"> {t("email")}:</strong>
                    <a
                      style={{ color: "#777" }}
                      href={
                        "mailto:" +
                        apiSettings?.find((el) => el.name == "email")?.link
                      }
                    >
                      {" "}
                      {apiSettings?.find((el) => el.name == "email")?.link}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="custom-container pb-5"
        style={{ borderRadius: "10px", overflow: "hidden" ,height: "450px"}}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3039.467202547477!2d49.8050934!3d40.3763368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4db0cf1419%3A0x42172d7484985ab6!2zR0VBRCDEsEIgLSBHyZluY2zJmXJpbiBFbG1pIEFyYcWfZMSxcm1hbGFyxLFuYSBEyZlzdMmZaw!5e0!3m2!1str!2saz!4v1695803626441!5m2!1str!2saz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps(context: any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common"])),
    },
  };
}
