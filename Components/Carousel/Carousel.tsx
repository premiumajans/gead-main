import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
import {usefulLink} from '@/interfaces/generalTypesInterfaces';
import Image from "next/image";

const Carousel = ({data}: { data: usefulLink[] | undefined }) => {
    const OwlCarousel = dynamic(() => import('react-owl-carousel'),
            {
                ssr: false,
            }
        )
    ;

    return <>
        {Array.isArray(data) && <>
            <div className="row">
                <div className="col">
                    <hr className="solid my-3"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <OwlCarousel responsive={{
                        '0': {'items': 1},
                        '376': {'items': 2},
                        '576': {'items': 3},
                        '768': {'items': 4},
                        '992': {'items': 5},
                        '1200': {'items': 6}
                    }} dots={true} className='owl-theme' loop margin={10} autoplay autoplayTimeout={3000}
                                 items={7}>
                        {data.length > 0 && data?.map(item => (
                            <div key={item.id} className="item" style={{width: "159.429px", margin: '0 auto'}}>
                                <div>
                                    <a target='_blank' href={item.link!}>
                                        <Image width={150} height={150} style={{height: '150px', objectFit:'cover'}} className="img-fluid"
                                             src={process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + item.photo} alt={process.env.NEXT_PUBLIC_MAIN_PATH_WITHOUT_API + item.photo}/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <hr className="solid my-3"/>
                </div>
            </div>
        </>}
    </>


};

export default Carousel;
