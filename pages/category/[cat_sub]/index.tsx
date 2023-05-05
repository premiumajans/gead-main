import HeaderWraper from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";
import CarouselWithCard from "@/Components/Carousel/CarouselWithCard";
import {useRouter} from "next/router";
import FsLightbox from "fslightbox-react";
import {useState} from "react";
import Image from "next/image";

const NewPage = () => {
    const {query} = useRouter()

    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
        '/img/blog/square/blog-1.jpg',
        '/img/blog/square/blog-2.jpg',
        '/img/blog/square/blog-3.jpg',
        '/img/blog/square/blog-4.jpg',
        '/img/blog/square/blog-5.jpg',
        '/img/blog/square/blog-7.jpg',
        '/img/blog/square/blog-8.jpg',
        '/img/blog/square/blog-9.jpg',

    ]

    return <>
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
            <link rel="stylesheet" href="/css/theme.css"/>
            <link rel="stylesheet" href="/css/theme-elements.css"/>
            <link rel="stylesheet" href="/css/theme-blog.css"/>
            <link rel="stylesheet" href="/css/theme-shop.css"/>
            <link rel="stylesheet" href="/vendor/rs-plugin/css/settings.css"/>
            <link rel="stylesheet" href="/vendor/rs-plugin/css/layers.css"/>
            <link rel="stylesheet" href="/vendor/rs-plugin/css/navigation.css"/>
            <link
                rel="stylesheet"
                href="/vendor/circle-flip-slideshow/css/component.css"
            />
            <link id="skinCSS" rel="stylesheet" href="/css/skins/default.css"/>
            <link rel="stylesheet" href="/css/custom.css"/>
            <script defer src="/vendor/plugins/js/plugins.min.js"></script>
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
        <HeaderWraper/>
        <div role="main" className="main">

            <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center p-static order-2 text-center"><h1
                            className="text-dark font-weight-bold text-8">Post Slider Gallery</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="custom-container py-4">
                <div className="row">
                    <div className="col">
                        <div className="blog-posts single-post">
                            <article className="post post-large blog-single-post border-0 m-0 p-0">
                                <div className="post-image ms-0">
                                    <div className="img-thumbnail border-0 p-0 d-block">
                                        <img className="img-fluid border-radius-0"
                                             src="/img/blog/wide/blog-24.jpg" alt=""/>
                                    </div>
                                </div>


                                <div className="post-content ms-0">

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus lacus,
                                        rutrum sit amet placerat et, bibendum nec mauris. Duis molestie, purus eget
                                        placerat
                                        viverra, nisi odio gravida sapien, congue tincidunt nisl ante nec tellus.
                                        Vestibulum
                                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa
                                        fringilla
                                        consequat blandit, mauris ligula porta nisi, non tristique enim sapien vel nisl.
                                        Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis in
                                        faucibus
                                        orci luctus et ultrices posuere cubilia Curae; Praesent nec tempus nibh. Donec
                                        mollis commodo metus et fringilla. Etiam venenatis, diam id adipiscing
                                        convallis,
                                        nisi eros lobortis tellus, feugiat adipiscing ante ante sit amet dolor.
                                        Vestibulum
                                        vehicula scelerisque facilisis. Sed faucibus placerat bibendum. Maecenas
                                        sollicitudin commodo justo, quis hendrerit leo consequat ac. Proin sit amet
                                        risus
                                        sapien, eget interdum dui. Proin justo sapien, varius sit amet hendrerit id,
                                        egestas
                                        quis mauris.</p>
                                    <p>Ut ac elit non mi pharetra dictum nec quis nibh. Pellentesque ut fringilla elit.
                                        Aliquam non ipsum id leo eleifend sagittis id a lorem. Sociis natoque penatibus
                                        et
                                        magnis dis parturient montes, nascetur ridiculus mus. Aliquam massa mauris,
                                        viverra
                                        et rhoncus a, feugiat ut sem. Quisque ultricies diam tempus quam molestie vitae
                                        sodales dolor sagittis. Praesent commodo sodales purus. Maecenas scelerisque
                                        ligula
                                        vitae leo adipiscing a facilisis nisl ullamcorper. Vestibulum ante ipsum primis
                                        in
                                        faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                                    <p>Curabitur non erat quam, id volutpat leo. Nullam pretium gravida urna et
                                        interdum.
                                        Suspendisse in dui tellus. Cras luctus nisl vel risus adipiscing aliquet.
                                        Phasellus
                                        convallis lorem dui. Quisque hendrerit, lectus ut accumsan gravida, leo tellus
                                        porttitor mi, ac mattis eros nunc vel enim. Nulla facilisi. Nam non nulla sed
                                        nibh
                                        sodales auctor eget non augue. Pellentesque sollicitudin consectetur mauris, eu
                                        mattis mi dictum ac. Etiam et sapien eu nisl dapibus fermentum et nec
                                        tortor.</p>
                                    <p>Curabitur nec nulla lectus, non hendrerit lorem. Quisque lorem risus, porttitor
                                        eget
                                        fringilla non, vehicula sed tortor. Proin enim quam, vulputate at lobortis quis,
                                        condimentum at justo. Phasellus nec nisi justo. Ut luctus sagittis nulla at
                                        dapibus.
                                        Aliquam ullamcorper commodo elit, quis ornare eros consectetur a. Curabitur
                                        nulla
                                        dui, fermentum sed dapibus at, adipiscing eget nisi. Aenean iaculis vehicula
                                        imperdiet. Donec suscipit leo sed metus vestibulum pulvinar. Phasellus bibendum
                                        magna nec tellus fringilla faucibus. Phasellus mollis scelerisque volutpat. Ut
                                        sed
                                        molestie turpis. Phasellus ultrices suscipit tellus, ac vehicula ligula
                                        condimentum
                                        et.</p>
                                    <p>Aenean metus nibh, molestie at consectetur nec, molestie sed nulla. Lorem ipsum
                                        dolor
                                        sit amet, consectetur adipiscing elit. Aliquam nec euismod urna. Donec gravida
                                        pharetra ipsum, non volutpat ipsum sagittis a. Phasellus ut convallis ipsum. Sed
                                        nec
                                        dui orci, nec hendrerit massa. Curabitur at risus suscipit massa varius
                                        accumsan.
                                        Proin eu nisi id velit ultrices viverra nec condimentum magna. Ut porta orci
                                        quis
                                        nulla aliquam at dictum mi viverra. Maecenas ultricies elit in tortor
                                        scelerisque
                                        facilisis. Mauris vehicula porttitor lacus, vel pretium est semper non. Ut
                                        accumsan
                                        rhoncus metus non pharetra. Quisque luctus blandit nisi, id tempus tellus
                                        pulvinar
                                        eu. Nam ornare laoreet mi a molestie. Donec sodales scelerisque congue. </p>


                                </div>
                            </article>

                        </div>

                        <div className='d-flex justify-content-center align-content-center'>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(5, 1fr)'

                            }}>

                                {images.map((el, index) => {
                                    return <span style={{width: '250px', cursor: 'pointer'}} key={index}
                                                 onClick={() => {
                                                     setSlideIndex(index)
                                                     setToggler(!toggler)
                                                 }}
                                                 className="thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
											<span className="thumb-info-wrapper  m-2">
                                                      <Image width={250} height={250}
                                                             className="img-fluid rounded"
                                                             style={{margin: '0 !important'}}
                                                             src={el} alt=""/>
												<span className="thumb-info-action">
													<span className="thumb-info-action-icon"><i
                                                        className="fas fa-plus"></i></span>
												</span>
											</span>
                            </span>

                                })}


                                <FsLightbox
                                    toggler={toggler}
                                    sources={images}
                                    sourceIndex={slideIndex}
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="post-meta mt-4">
                    <span><i className="far fa-user"></i> By <a href="#">John Doe</a> </span>
                    <span><i className="far fa-folder"></i> <a href="#">Lifestyle</a>, <a
                        href="#">Design</a> </span>
                    <span><i className="far fa-comments"></i> <a href="#">12 Comments</a></span>
                </div>
                <div className="carousel">
                    <CarouselWithCard/>
                </div>
            </div>

        </div>
        <Footer/>
    </>

};

export default NewPage;