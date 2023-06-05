import Image from "next/image";
import {useTranslation} from "react-i18next";
import {contentItem} from "@/interfaces/generalTypesInterfaces";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {getLanguage} from "@/Store/Slices/General";

const CardTopImg = ({width, item, link}: { width?: string, item?: contentItem, link?:string }) => {
    const dispatch = useDispatch()
    const {t, i18n} = useTranslation('common')
    const language = useSelector(getLanguage)
    return <>
        <Link
            href={(link) || `/content/${item?.id}`}
            className="col-lg-3 col-md-4   col-sm-6 mb-lg-0"
            style={{width: width}}>



            <div style={{animationDelay: "200ms"}} className="card my-3 appear-animation"  data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">
                <Image loading={'lazy'} width='150' height='200'
                       style={{maxHeight: "200px", height: '200px', objectFit: 'cover'}} className="card-img-top"
                       src={(process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API! + item?.photo) || "/img/blog/wide/blog-11.jpg"}
                       alt={item?.translations.find((item => item.locale === language))?.name || 'img'}/>
                <div style={{padding: '1rem'}} className="card-body">
                    <h4 className="card-title mb-1 text-4 font-weight-bold">{'Cart title ' && item?.translations.find(item => item.locale === language)?.name}</h4>
                    <Link
                        href={(link) || `/content/${item?.id}`}
                        className="read-more text-color-primary font-weight-semibold text-2">{t('read-more')}<i
                        className="fas fa-angle-right position-relative top-1 ms-1"></i></Link>
                </div>
            </div>
        </Link>

    </>
}

export default CardTopImg