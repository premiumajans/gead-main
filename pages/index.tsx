import Carousel from "@/Components/Carousel/Carousel";
import CarouselWithCard from "@/Components/Carousel/CarouselWithCard";
import Footer from "@/Components/Footer/Footer";
import HeaderWraper from "@/Components/Header/Header";
import Head from "next/head";
import CardTopImg from "@/Components/Card/CardTopImg";


export default function Home() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/vendor/fontawesome-free/css/all.min.css"/>
                <link rel="stylesheet" href="/vendor/animate/animate.compat.css"/>
                <link
                    rel="stylesheet"
                    href="/vendor/simple-line-icons/css/simple-line-icons.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/vendor/owl.carousel/assets/owl.carousel.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/vendor/owl.carousel/assets/owl.theme.default.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/vendor/magnific-popup/magnific-popup.min.css"
                />

                {/* <!-- Theme CSS --> */}
                <link rel="stylesheet" href="/css/theme.css"/>
                <link rel="stylesheet" href="/css/theme-elements.css"/>
                <link rel="stylesheet" href="/css/theme-blog.css"/>
                <link rel="stylesheet" href="/css/theme-shop.css"/>

                {/* <!-- Revolution Slider CSS --> */}
                <link rel="stylesheet" href="/vendor/rs-plugin/css/settings.css"/>
                <link rel="stylesheet" href="/vendor/rs-plugin/css/layers.css"/>
                <link rel="stylesheet" href="/vendor/rs-plugin/css/navigation.css"/>
                {/* <!-- Current Page CSS --> */}ff
                <link
                    rel="stylesheet"
                    href="/vendor/circle-flip-slideshow/css/component.css"
                />

                {/* <!-- Skin CSS --> */}
                <link id="skinCSS" rel="stylesheet" href="/css/skins/default.css"/>

                {/* <!-- Theme Custom CSS --> */}
                <link rel="stylesheet" href="/css/custom.css"/>

                <script defer src="/vendor/plugins/js/plugins.min.js"></script>

                {/* <!-- Theme Base, Components and Settings --> */}

                <script defer src="/js/theme.js"></script>

                <script defer src="/js/owl.carousel.min.js"></script>
                <script defer src="/vendor/modernizr/modernizr.min.js"></script>

                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

                {/* <script
          defer
          data-cfasync="false"
          src="../../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
        ></script> */}
                <script defer src="/vendor/plugins/js/plugins.min.js"></script>

                {/* <!-- Circle Flip Slideshow Script -->	 */}
                <script
                    defer
                    src="/vendor/circle-flip-slideshow/js/jquery.flipshow.min.js"
                ></script>

                {/* <!-- Current Page Views -->	 */}
                <script defer src="/js/views/view.home.js"></script>

                {/* <!-- Theme Initialization Files --> */}
                <script defer src="/js/theme.init.js"></script>

                {/* <!-- Head Libs --> */}
                <script defer src="/vendor/modernizr/modernizr.min.js"></script>

                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-42715764-11"
                ></script>
                <script defer src="/js/theme.js"></script>

                <script
                    defer
                    src="/vendor/rs-plugin/js/jquery.themepunch.tools.min.js"
                ></script>
                <script
                    defer
                    src="/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"
                ></script>
                <script
                    defer
                    src="/vendor/circle-flip-slideshow/js/jquery.flipshow.min.js"
                ></script>
                <script defer src="/js/views/view.home.js"></script>

                <script defer src="/js/theme.init.js"></script>
            </Head>
            <HeaderWraper>
                <div
                    className="slider-container rev_slider_wrapper"
                    style={{height: "670px"}}
                >
                    <div
                        id="revolutionSlider"
                        className="slider rev_slider"
                        data-version="§5.4.8"
                        data-plugin-revolution-slider
                        data-plugin-options="{'delay': 9000, 'gridwidth': 1170, 'gridheight': 670, 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,500], 'parallax': {'type': 'scroll', 'origo': 'enterpoint', 'speed': 1000, 'levels': [2,3,4,5,6,7,8,9,12,50], 'disable_onmobile': 'on'}, 'navigation' : {'arrows': {'enable': true}, 'bullets': {'enable': true, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 70, 'h_offset': 0}}}"
                    >
                        <ul>
                            <li data-transition="fade">
                                <img
                                    src="/img/slides/slide-bg.jpg"
                                    alt=""
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    className="rev-slidebg"
                                />

                                <div
                                    className="tp-caption tp-resizeme"
                                    data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"opacity:0;x:100%;y:-100%;","to":"o:1;x:0;y:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-type="image"
                                    data-x="right"
                                    data-y="top"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    data-basealign="slide"
                                >
                                    <img src="img/slides/slide-devices.jpg" alt=""/>
                                </div>

                                <div
                                    className="tp-caption tp-resizeme"
                                    data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"opacity:0;x:-100%;y:-100%;","to":"o:1;x:0;y:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-type="image"
                                    data-x="left"
                                    data-y="center"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    data-basealign="slide"
                                >
                                    <img src="img/slides/slide-laptop.jpg" alt=""/>
                                </div>

                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-7"
                                    data-frames='[{"delay":2500,"speed":1500,"frame":"0","from":"opacity:0;x:-50%;y:-50%;","to":"opacity:1;x:0;y:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-type="image"
                                    data-x="-500"
                                    data-y="-700"
                                    data-width="['auto']"
                                    data-height="['auto']"
                                    data-basealign="slide"
                                >
                                    <img
                                        src="img/slides/slide-parallax-porto-symbol.png"
                                        alt=""
                                    />
                                </div>

                                <div
                                    className="tp-caption"
                                    data-x="center"
                                    data-hoffset="['-150','-150','-150','-240']"
                                    data-y="center"
                                    data-voffset="['-50','-50','-50','-75']"
                                    data-start="1000"
                                    data-transform_in="x:[-300%];opacity:0;s:500;"
                                    data-transform_idle="opacity:0.2;s:500;"
                                >
                                    <img src="img/slides/slide-title-border.png" alt=""/>
                                </div>

                                <div
                                    className="tp-caption text-color-light font-weight-normal"
                                    data-x="center"
                                    data-y="center"
                                    data-voffset="['-50','-50','-50','-75']"
                                    data-start="700"
                                    data-fontsize="['22','22','22','40']"
                                    data-lineheight="['25','25','25','45']"
                                    data-transform_in="y:[-50%];opacity:0;s:500;"
                                >
                                    DO YOU NEED A NEW
                                </div>

                                <div
                                    className="tp-caption d-none d-md-block"
                                    data-frames='[{"delay":2400,"speed":500,"frame":"0","from":"opacity:0;x:10%;","to":"opacity:1;x:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-hoffset="['80','80','80','135']"
                                    data-y="center"
                                    data-voffset="['-33','-33','-33','-55']"
                                >
                                    <img src="img/slides/slide-blue-line.png" alt=""/>
                                </div>

                                <div
                                    className="tp-caption"
                                    data-x="center"
                                    data-hoffset="['150','150','150','240']"
                                    data-y="center"
                                    data-voffset="['-50','-50','-50','-75']"
                                    data-start="1000"
                                    data-transform_in="x:[300%];opacity:0;s:500;"
                                    data-transform_idle="opacity:0.2;s:500;"
                                >
                                    <img src="img/slides/slide-title-border.png" alt=""/>
                                </div>

                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light negative-ls-2"
                                    data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-y="center"
                                    data-fontsize="['50','50','50','90']"
                                    data-lineheight="['55','55','55','95']"
                                >
                                    WEB DESIGN?
                                </div>

                                <div
                                    className="tp-caption font-weight-light"
                                    data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":2000,"split":"chars","splitdelay":0.05,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                    data-x="center"
                                    data-y="center"
                                    data-voffset="['40','40','40','80']"
                                    data-fontsize="['18','18','18','50']"
                                    data-lineheight="['20','20','20','55']"
                                    style={{color: "#b5b5b5"}}
                                >
                                    Check out our options and features
                                </div>
                            </li>
                            <li className="slide-overlay" data-transition="fade">
                                <img
                                    src="img/slides/slide-bg-2.jpg"
                                    alt=""
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    className="rev-slidebg"
                                />

                                <div
                                    className="tp-caption"
                                    data-x="center"
                                    data-hoffset="['-170','-170','-170','-350']"
                                    data-y="center"
                                    data-voffset="['-50','-50','-50','-75']"
                                    data-start="1000"
                                    data-transform_in="x:[-300%];opacity:0;s:500;"
                                    data-transform_idle="opacity:0.2;s:500;"
                                >
                                    <img src="img/slides/slide-title-border.png" alt=""/>
                                </div>

                                <div
                                    className="tp-caption text-color-light font-weight-normal"
                                    data-x="center"
                                    data-y="center"
                                    data-voffset="['-50','-50','-50','-75']"
                                    data-start="700"
                                    data-fontsize="['16','16','16','40']"
                                    data-lineheight="['25','25','25','45']"
                                    data-transform_in="y:[-50%];opacity:0;s:500;"
                                >
                                    WE WORK HARD AND PORTO HAS
                                </div>

                                <div
                                    className="tp-caption"
                                    data-x="center"
                                    data-hoffset="['170','170','170','350']"
                                    data-y="center"
                                    data-voffset="['-50','-50','-50','-75']"
                                    data-start="1000"
                                    data-transform_in="x:[300%];opacity:0;s:500;"
                                    data-transform_idle="opacity:0.2;s:500;"
                                >
                                    <img src="img/slides/slide-title-border.png" alt=""/>
                                </div>

                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light negative-ls-1"
                                    data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-y="center"
                                    data-fontsize="['50','50','50','90']"
                                    data-lineheight="['55','55','55','95']"
                                >
                                    THE BEST DESIGN
                                </div>

                                <div
                                    className="tp-caption font-weight-light ws-normal text-center"
                                    data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":2000,"split":"chars","splitdelay":0.05,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                    data-x="center"
                                    data-y="center"
                                    data-voffset="['60','60','60','105']"
                                    data-width="['530','530','530','1100']"
                                    data-fontsize="['18','18','18','40']"
                                    data-lineheight="['26','26','26','45']"
                                    style={{color: "#b5b5b5"}}
                                >
                                    Trusted by over{" "}
                                    <strong className="text-color-light">30,000</strong> satisfied
                                    users, Porto is a huge success in the one of largest world` `s
                                    MarketPlace.
                                </div>
                            </li>
                            <li
                                className="slide-overlay slide-overlay-primary"
                                data-transition="fade"
                            >
                                <img
                                    src="img/slides/slide-bg-6.jpg"
                                    alt=""
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    className="rev-slidebg"
                                />

                                <div
                                    className="tp-caption"
                                    data-x="center"
                                    data-hoffset="['-145','-145','-145','-320']"
                                    data-y="center"
                                    data-voffset="['-80','-80','-80','-130']"
                                    data-start="1000"
                                    data-transform_in="x:[-300%];opacity:0;s:500;"
                                    data-transform_idle="opacity:0.2;s:500;"
                                >
                                    <img src="img/slides/slide-title-border.png" alt=""/>
                                </div>

                                <div
                                    className="tp-caption text-color-light font-weight-normal"
                                    data-x="center"
                                    data-y="center"
                                    data-voffset="['-80','-80','-80','-130']"
                                    data-start="700"
                                    data-fontsize="['16','16','16','40']"
                                    data-lineheight="['25','25','25','45']"
                                    data-transform_in="y:[-50%];opacity:0;s:500;"
                                >
                                    WE CREATE DESIGNS, WE ARE
                                </div>

                                <div
                                    className="tp-caption"
                                    data-x="center"
                                    data-hoffset="['145','145','145','320']"
                                    data-y="center"
                                    data-voffset="['-80','-80','-80','-130']"
                                    data-start="1000"
                                    data-transform_in="x:[300%];opacity:0;s:500;"
                                    data-transform_idle="opacity:0.2;s:500;"
                                >
                                    <img src="img/slides/slide-title-border.png" alt=""/>
                                </div>

                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light"
                                    data-frames='[{"delay":1300,"speed":1000,"frame":"0","from":"opacity:0;x:-50%;","to":"opacity:0.7;x:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-hoffset="['-155','-155','-155','-255']"
                                    data-y="center"
                                    data-fontsize="['145','145','145','250']"
                                    data-lineheight="['150','150','150','260']"
                                >
                                    P
                                </div>

                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light"
                                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"opacity:0;x:-50%;","to":"opacity:0.7;x:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-hoffset="['-80','-80','-80','-130']"
                                    data-y="center"
                                    data-fontsize="['145','145','145','250']"
                                    data-lineheight="['150','150','150','260']"
                                >
                                    O
                                </div>

                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light"
                                    data-frames='[{"delay":1700,"speed":1000,"frame":"0","from":"opacity:0;x:-50%;","to":"opacity:0.7;x:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-y="center"
                                    data-fontsize="['145','145','145','250']"
                                    data-lineheight="['150','150','150','260']"
                                >
                                    R
                                </div>

                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light"
                                    data-frames='[{"delay":1900,"speed":1000,"frame":"0","from":"opacity:0;x:-50%;","to":"opacity:0.7;x:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-hoffset="['65','65','65','115']"
                                    data-y="center"
                                    data-fontsize="['145','145','145','250']"
                                    data-lineheight="['150','150','150','260']"
                                >
                                    T
                                </div>

                                <div
                                    className="tp-caption font-weight-extra-bold text-color-light"
                                    data-frames='[{"delay":2100,"speed":1000,"frame":"0","from":"opacity:0;x:-50%;","to":"opacity:0.7;x:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-hoffset="['139','139','139','240']"
                                    data-y="center"
                                    data-fontsize="['145','145','145','250']"
                                    data-lineheight="['150','150','150','260']"
                                >
                                    O
                                </div>

                                <div
                                    className="tp-caption font-weight-light text-color-light"
                                    data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":2300,"split":"chars","splitdelay":0.05,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                    data-x="center"
                                    data-y="center"
                                    data-voffset="['85','85','85','140']"
                                    data-fontsize="['18','18','18','40']"
                                    data-lineheight="['26','26','26','45']"
                                >
                                    The best choice for your new website
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="custom-container py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <CarouselWithCard/>
                            <div className="list">
                                <h2><span className="badge badge-primary">Xəbərlər</span></h2>
                                <div className="row d-flex flex-nowrap py-4 ">
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                </div>

                                <div className="row d-flex flex-nowrap  py-4 ">
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                </div>
                                <div className="row d-flex flex-nowrap  py-4 ">
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                    <CardTopImg width={'25%'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Carousel/>
                </div>
                <Footer/>
            </HeaderWraper>
        </>
    )
        ;
}
