import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Swal from "sweetalert2";

const ContentForm = () => {
    const {query} = useRouter()
    const {t} = useTranslation('common')
    const [loading, setLoading] = useState(false)

    let schema = yup.object().shape({
        name: yup
            .string()
            .required(`${t('name-required')}`)
            .min(3, `${t('name-min-3')}`),
        surname: yup
            .string()
            .required(`${t('name-required')}`)
            .min(3, `${t('name-min-3')}`),
        email: yup
            .string()
            .email(`${t('email-valid')}`)
            .required(`${t('email-required')}`)
            .min(3, `${t('email-min-3')}`),
        work: yup
            .string()
            .required(`${t('name-required')}`)
            .min(3, `${t('name-min-3')}`),
        education: yup
            .string()
            .required(`${t('name-required')}`)
            .min(3, `${t('name-min-3')}`),
        phone: yup
            .string()
            .required(`${t('phone-required')}`)
            .min(3, `${t('phone-min-3')}`),
    });



    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        reset
    } = useForm({resolver: yupResolver(schema), mode: "onChange"});


    const onSubmit = async (data: any) => {
        setLoading(true)
        fetch(process.env["NEXT_PUBLIC_MAIN_PATH"] + 'content/' + query.cat_id + '/register',{
            body:JSON.stringify(data),
            method:'POST',
            headers:{
                'Content-type':"application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                    Swal.fire(`${t(res.register)}`, "", "success").then(() => {
                        reset()
                    })

            })
            .catch(err => {
                Swal.fire(`${t('something-went-wrong')}`, "", "error");
            })
    };



    return <>
        <div className="card my-4">
            <h2 className="font-weight-bold text-8 mt-2 mb-0 m-4">
                {t("register")}
            </h2>

            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit(onSubmit)} className="contact-form form-with-icons">


                            <div className="contact-form-error alert alert-danger d-none mt-4">
                                <strong>Error!</strong> There was an error sending your message.
                                <span className="mail-error-message text-1 d-block"></span>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label className="form-label mb-1 text-2">{t('name')}</label>
                                    <div className="position-relative">
                                        <i className="icons icon-user text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50"></i>
                                        <input type="text" {...register('name')}
                                               maxLength={100}      className={`form-control ${
                                                   errors.name ? "is-invalid" : ""}`} name="name"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label className="form-label mb-1 text-2">{t('surname')}</label>
                                    <div className="position-relative">
                                        <i className="icons icon-user text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50"></i>
                                        <input {...register('surname')} type="text"
                                               maxLength={100}
                                                    className={`form-control ${
                                                   errors.surname ? "is-invalid" : ""}`} name="surname"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label className="form-label mb-1 text-2">{t('work_education')}</label>
                                    <div className="position-relative">
                                        <i className="icons icon-info text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50"></i>
                                        <input {...register('education')} type="text"
                                               maxLength={100} className={`form-control ${
                                                   errors.education ? "is-invalid" : ""}`}
                                               name="education"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label className="form-label mb-1 text-2">{t('position')}</label>
                                    <div className="position-relative">
                                        <i className="icons icon-info text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50"></i>
                                        <input {...register('work')} type="text"
                                               maxLength={100}
                                               className={`form-control ${
                                                   errors.work ? "is-invalid" : ""
                                               }`} name="work"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label className="form-label mb-1 text-2">{t('email')}</label>
                                    <div className="position-relative">
                                        <i className="icons icon-user text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50"></i>
                                        <input {...register('email')} type="email"
                                               maxLength={100}      className={`form-control ${
                                                   errors.email ? "is-invalid" : ""}`} name="email"
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-lg-6">
                                    <label className="form-label mb-1 text-2">{t('phone')}</label>
                                    <div className="position-relative">
                                        <i className="icons icon-phone text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50"></i>
                                        <input {...register('phone')} type="text"
                                                maxLength={100}
                                                    className={`form-control ${
                                                   errors.phone ? "is-invalid" : ""}`} name="phone"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col">
                                    <button disabled={Boolean(Object.keys(errors).length)} type="submit" className="btn btn-primary"
                                            data-loading-text="Loading...">{t('submit')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default ContentForm;