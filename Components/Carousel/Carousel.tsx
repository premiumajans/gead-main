import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";

const Carousel = () => {
    const OwlCarousel = dynamic(() => import('react-owl-carousel'),
            {
                ssr: false,
            }
        )
    ;

    return <>
        <div className="row">
            <div className="col">
                <hr className="solid my-5"/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <OwlCarousel responsive={{'0': {'items': 1},
                    '476': {'items': 1},
                    '768': {'items': 5},
                    '992': {'items': 7},
                    '1200': {'items': 7}}} dots={false} className='owl-theme' loop margin={10} autoplay autoplayTimeout={3000} items={7}>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-3.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-4.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-5.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-6.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-4.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-3.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-4.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-5.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-6.png" alt=""/>
                        </div>
                    </div>
                    <div className="item " style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-4.png" alt=""/>
                        </div>
                    </div>
                    <div className="item " style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="item " style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="item " style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="item " style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-3.png" alt=""/>
                        </div>
                    </div>
                    <div className="item " style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-4.png" alt=""/>
                        </div>
                    </div>
                    <div className="item " style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-5.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-6.png" alt=""/>
                        </div>
                    </div>
                    <div className="item" style={{width: "159.429px"}}>
                        <div>
                            <img className="img-fluid" src="img/logos/logo-4.png" alt=""/>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

        </div>
        <div className="row">
            <div className="col">
                <hr className="solid my-5"/>
            </div>
        </div>
    </>


};

export default Carousel;
