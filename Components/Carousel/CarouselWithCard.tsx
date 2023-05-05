import CardTopImg from "../Card/CardTopImg";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";

const CarouselWithCard = () => {
    const OwlCarousel = dynamic(() => import('react-owl-carousel'),
            {
                ssr: false,
            }
        )
    ;
    return (
        <>
            <div className="row">
                <div className="col">
                    <hr className="solid my-5"/>
                </div>
            </div>
            <div className="row py-4">
                <div className="col">
                    <OwlCarousel responsive={{
                        '0': {'items': 1},
                        '476': {'items': 1},
                        '768': {'items': 5},
                        '992': {'items': 4},
                        '1200': {'items': 4}
                    }} dots={false} className='owl-theme' loop margin={10} autoplay  autoplayTimeout={3000} items={7}>
                        <div className="item" >

                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>

                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item " >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item " >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item " >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item " >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item " >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item " >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item " >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                        <div className="item" >
                            <div>
                                <CardTopImg width={'auto'}/>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    );
};

export default CarouselWithCard;
