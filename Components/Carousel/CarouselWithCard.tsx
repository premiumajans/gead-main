import CardTopImg from "../Card/CardTopImg";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
import {contentItem} from "@/interfaces/generalTypesInterfaces";
import CustomHeader from "@/Components/CustomHeader/CustomHeader";
import {useTranslation} from "react-i18next";

const CarouselWithCard = ({items, title, link}:{items:contentItem[], title:string, link?:string}) => {
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
                    <CustomHeader>
                        {t(title)}
                    </CustomHeader>
                    <OwlCarousel responsive={{
                        '0': {'items': 1},
                        '576': {'items': 2},
                        '768': {'items': 3},
                        '992': {'items': 3},
                        '1200': {'items': 4}
                    }} dots={false} className='owl-theme' loop margin={10} autoplay autoplayTimeout={3000} >
                        { Array.isArray(items) && items.map(item => {
                            return <div key={item.id} className="item">

                                <div>
                                    <CardTopImg link={(link ? link + item.id : '')} item={item} width={'auto'}/>
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
