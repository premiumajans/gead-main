import CardTopImg from "../Card/CardTopImg";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
import {contentItem} from "@/interfaces/generalTypesInterfaces";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import CustomHeaderLineless from "@/Components/CustomHeaderLineless/CustomHeaderLineless";
import React from "react";
import CardWithText from "@/Components/Card/CardWithText";

const CarouselWithCard = ({items, title, link}: { items: contentItem[], title: string, link?: string }) => {
    const {pathname} = useRouter()
    const {t} = useTranslation('common')
    const OwlCarousel = dynamic(() => import('react-owl-carousel'),
        {
            ssr: false,
        }
    )

    return (
        <>

            <div className="row py-4">
                {Array.isArray(items) && <div className="col">
                    {pathname !== '/' ? <CustomHeader>
                        {t(title)}
                    </CustomHeader> : <CustomHeaderLineless>
                        {t('writers')}
                    </CustomHeaderLineless>}


                    <OwlCarousel responsive={{
                        '0': {'items': 1},
                        '576': {'items': 2},
                        '768': {'items': 3},
                        '992': {'items': 3},
                        '1200': {'items': 4}
                    }} dots={false} className='owl-theme' loop margin={10} autoplay autoplayTimeout={3000}>
                        {Array.isArray(items) && items.map(item => {
                            return <div key={item.id} className="item">

                                <div>
                                    <CardWithText link={(link ? link + item.id : '')} item={item} width={'auto'}/>
                                </div>

                            </div>
                        })}

                    </OwlCarousel>
                </div>}
            </div>
        </>
    );
};

export default CarouselWithCard;
