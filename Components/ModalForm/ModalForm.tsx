import {useTranslation} from "next-i18next";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import {useContentMailMutation} from "@/Store/Query/GeneralQuery";
import {useRouter} from "next/router";


const ModalForm = () => {
    const {query, reload} = useRouter()
    const [checkPdf, {isLoading}] = useContentMailMutation()
    const {t} = useTranslation('common')



    let schema = yup.object().shape({
        email: yup
            .string()
            .email(`${t('email-valid')}`)
            .required(`${t('email-required')}`)
            .min(3, `${t('email-min-3')}`),
    });

    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema), mode: "onChange"});

    const onSubmit = async (data: any) => {
        data.content_id = query.cat_id
        checkPdf(data)
            .then((res) => {
                if ('error' in data) {
                    Swal.fire(`${t('something-went-wrong')}`, "", "error");
                } else {
                    const responseData = (res as { data: { email: string, pdf: string } }).data
                    window.open(responseData.pdf, '_blank')
                    document.querySelector('.modal')!.classList.remove('show')
                    document.querySelector('.modal-backdrop')!.remove()
                    sessionStorage.setItem('sessionData', JSON.stringify(data.email))
                    reload()
                }
            })
    };


    return <>
        <div className="modal fade" id="formModal" tabIndex={-1} aria-labelledby="formModalLabel"
             style={{display: "none"}} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="formModalLabel">{t('add-email')}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true">×
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onSubmit)} id="demo-form" className="mb-4">
                            <div className="form-group row align-items-center">
                                <label className="col-sm-3 text-start text-sm-end mb-0">Email</label>
                                <div className="col-sm-9">
                                    <input    {...register("email")} type="text" name="email"
                                              className={`form-control ${
                                                  errors.email ? "is-invalid" : ""
                                              }`}
                                              placeholder="example@gmail.com" required={false}/>
                                    {errors.email ? (
                                        <div className="fv-plugins-message-container invalid-feedback">
                                            <div>{errors.email.message as string}</div>
                                        </div>
                                    ) : (
                                        ""
                                    )}

                                </div>
                            </div>
                            <div className="modal-footer">

                                <button data-bs-dismiss="modal" type="button"
                                        className="btn btn-light">{t('close')}</button>
                                <button disabled={isLoading} type="submit"
                                        className="btn btn-primary">{t('get-pdf')}</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
};

export default ModalForm;