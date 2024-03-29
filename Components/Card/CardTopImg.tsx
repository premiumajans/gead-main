import Image from "next/image";
import {useTranslation} from "next-i18next";
import {contentItem} from "@/interfaces/generalTypesInterfaces";
import Link from "next/link";

const CardTopImg = ({width, item, link}: { width?: string, item?: contentItem, link?:string }) => {
    const {t, i18n} = useTranslation('common')
    return <>
        <Link
            href={(link) || `/content/${item?.id}`}
            className="news-card col-lg-3 col-md-4   col-sm-6 mb-lg-0"
            style={{width: width}}>

            <div style={{animationDelay: "200ms"}} className="card my-3 appear-animation"  data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">
                <Image loading={'lazy'} width='150' height='200'
                       style={{maxHeight: "200px", height: '200px', objectFit: 'cover'}} className="card-img-top"
                       src={(process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API! + item?.photo) || "/img/blog/wide/blog-11.jpg"}
                       alt={item?.translations.find((item => item.locale === i18n.language))?.name || 'img'}/>
                <div style={{padding: '1rem'}} className="card-body">
                    <h4 className="truncate card-title mb-1 text-4 font-weight-bold">{'Cart title ' && item?.translations.find(item => item.locale === i18n.language)?.name}</h4>
                    <Link
                        href={(link) || `/content/${item?.id}`}
                        className="read-more text-color-primary font-weight-semibold d-block text-2">{t('read-more')}<i
                        className="fas fa-angle-right position-relative top-1 ms-1"></i></Link>
                </div>
            </div>
        </Link>

    </>
}

export default CardTopImg