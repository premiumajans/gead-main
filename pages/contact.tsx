import HeaderWraper from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";

const Contact = () => {
    return <>
        <Head>
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

            {/*<script*/}
            {/*    defer*/}
            {/*    src="/vendor/rs-plugin/js/jquery.themepunch.tools.min.js"*/}
            {/*></script>*/}
            {/*<script*/}
            {/*    defer*/}
            {/*    src="/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"*/}
            {/*></script>*/}
            {/*<script*/}
            {/*    defer*/}
            {/*    src="/vendor/circle-flip-slideshow/js/jquery.flipshow.min.js"*/}
            {/*></script>*/}
            {/*<script defer src="/js/views/view.home.js"></script>*/}

            {/*<script defer src="/js/theme.init.js"></script>*/}
        </Head>
        <HeaderWraper/>
        <div className="custom-container">

            <div className="row py-4">
                <div className="col-lg-6">

                    <h2 className="font-weight-bold text-8 mt-2 mb-0">Contact Us</h2>
                    <p className="mb-4">Feel free to ask for details, don`t save any questions!</p>

                    <form className="contact-form"
                          action="https://www.okler.net/previews/porto/9.9.0/php/contact-form.php" method="POST"
                          noValidate={false}>
                        <div className="contact-form-success alert alert-success d-none mt-4">
                            <strong>Success!</strong> Your message has been sent to us.
                        </div>

                        <div className="contact-form-error alert alert-danger d-none mt-4">
                            <strong>Error!</strong> There was an error sending your message.
                            <span className="mail-error-message text-1 d-block"></span>
                        </div>

                        <div className="row">
                            <div className="form-group col-lg-6">
                                <label className="form-label mb-1 text-2">Full Name</label>
                                <input type="text" value="" data-msg-required="Please enter your name." maxLength={100}
                                       className="form-control text-3 h-auto py-2" name="name" required={false}/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="form-label mb-1 text-2">Email Address</label>
                                <input type="email" value="" data-msg-required="Please enter your email address."
                                       data-msg-email="Please enter a valid email address." maxLength={100}
                                       className="form-control text-3 h-auto py-2" name="email" required={false}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label className="form-label mb-1 text-2">Subject</label>
                                <input type="text" value="" data-msg-required="Please enter the subject."
                                       maxLength={100} className="form-control text-3 h-auto py-2" name="subject"
                                       required={false}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label className="form-label mb-1 text-2">Message</label>
                                <textarea maxLength={5000} data-msg-required="Please enter your message." rows={8}
                                          className="form-control text-3 h-auto py-2" name="message"
                                          required={false}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <input type="submit" value="Send Message" className="btn btn-primary btn-modern"
                                       data-loading-text="Loading..."/>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="col-lg-6" style={{
                    display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column"
                }}>

                    <div style={{fontSize: '18px'}} className="contact-item">
                        <div className="appear-animation animated fadeIn appear-animation-visible"
                             data-appear-animation="fadeIn" data-appear-animation-delay={800}
                             style={{animationDelay: '800ms'}}/>
                        <h4 className="mt-2 mb-1">Our <strong>Office</strong></h4>
                        <ul className="list list-icons list-icons-style-2 mt-2">
                            <li><i style={{fontSize: '13px'}} className="fas fa-map-marker-alt top-6"></i> <strong
                                className="text-dark">Address:</strong> 1234 Street Name, City Name, United States
                            </li>
                            <li><i style={{fontSize: '13px'}} className="fas fa-phone top-6"></i> <strong
                                className="text-dark">Phone:</strong> (123) 456-789
                            </li>
                            <li><i style={{fontSize: '13px'}} className="fas fa-envelope top-6"></i> <strong
                                className="text-dark">Email:</strong>
                                <a href="mailto:mail@example.com">mail@example.com</a></li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>

        <Footer/>

    </>
};

export default Contact;