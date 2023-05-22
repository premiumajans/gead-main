import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getSettingState} from "@/Store/Slices/General";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {usePostContactMutation} from "@/Store/Query/GeneralQuery";
import Swal from "sweetalert2";
import {Simulate} from "react-dom/test-utils";
import Head from "next/head";
import React from "react";

const Contact = () => {
    const {t, i18n} = useTranslation("common");
    const settings = useSelector(getSettingState);
    const [postData, {isLoading}] = usePostContactMutation()

    let schema = yup.object().shape({
        name: yup
            .string()
            .required(`${t('name-required')}`)
            .min(3, `${t('name-min-3')}`),
        email: yup
            .string()
            .email(`${t('email-valid')}`)
            .required(`${t('email-required')}`)
            .min(3, `${t('email-min-3')}`),
        subject: yup
            .string(),
        phone: yup
            .string()
            .required(`${t('phone-required')}`)
            .min(3,`${t('phone-min-3')}`),
        message: yup
            .string()
            .required(`${t('message-required')}`)
            .min(3,`${t('message-min-3')}`),
    });

    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        reset
    } = useForm({resolver: yupResolver(schema), mode: "onChange"});

    const onSubmit = async (data: any) => {
        postData(data)
            .then(res => {
                if ('data' in res) {
                    Swal.fire(`${t(res.data.message)}`, "", "success").then(() => {
                        reset()
                    })
                } else {
                    Swal.fire(`${t('something-went-wrong')}`, "", "error");
                }
            })
    };

    return (
        <>
            <Head>
                <meta name="keywords" content={'gead.az, GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai Birliyi'}/>
                <title>
                    {t("contact-us") + ' | GEAD'}
                </title>
            </Head>
            <div
                className="appear-animation"
                data-appear-animation="fadeIn"
                data-appear-animation-delay="0" style={{animationDuration: "1s", animationDelay: "0ms"}}>

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
                                <div className="contact-form-success alert alert-success d-none mt-4">
                                    <strong>Success!</strong> Your message has been sent to us.
                                </div>

                                <div className="contact-form-error alert alert-danger d-none mt-4">
                                    <strong>Error!</strong> There was an error sending your message.
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
                                        <label className="form-label mb-1 text-2">{t("phone")}</label>
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
                            <div style={{fontSize: "18px"}} className="contact-item">
                                <div
                                    className="appear-animation animated fadeIn appear-animation-visible"
                                    data-appear-animation="fadeIn"
                                    data-appear-animation-delay={800}
                                    style={{animationDelay: "800ms"}}
                                />
                                <h4 className="mt-2 mb-1">{t("our-office")}</h4>
                                <ul className="list list-icons list-icons-style-2 mt-2">
                                    <li>
                                        <i
                                            style={{fontSize: "13px"}}
                                            className="fas fa-map-marker-alt top-6"
                                        ></i>{" "}
                                        <strong className="text-dark">{t("address")}:</strong>{" "}
                                        {
                                            settings.find((el) => el.name == "address_" + i18n.language)
                                                ?.link
                                        }
                                    </li>
                                    <li>
                                        <i
                                            style={{fontSize: "13px"}}
                                            className="fas fa-phone top-6"
                                        ></i>{" "}
                                        <strong className="text-dark">{t("phone")}:</strong>{" "}
                                        {settings.find((el) => el.name == "phone")?.link}
                                    </li>
                                    <li>
                                        <i
                                            style={{fontSize: "13px"}}
                                            className="fas fa-envelope top-6"
                                        ></i>{" "}
                                        <strong className="text-dark"> {t("email")}:</strong>
                                        <a
                                            href={
                                                "mailto:" +
                                                settings.find((el) => el.name == "email")?.link
                                            }
                                        ></a>
                                        {' '}{settings.find((el) => el.name == "email")?.link}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Contact;
