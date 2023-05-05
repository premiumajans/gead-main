const Footer = () => {
    return <>
        <footer id="footer">
            <div className="footer-copyright">
                <div className="container container-xl-custom py-2">
                    <div className="row py-4">
                        <div
                            className="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                            <a href="index.html" className="logo pe-0 pe-lg-3"> <img alt="Porto Website Template"
                                                                                     src="/img/logo.png"
                                                                                     className="opacity-5" height="50"/>
                            </a></div>
                        <div
                            className="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                            <p>© Copyright {new Date().getFullYear()}. All Rights Reserved.</p></div>
                        <div
                            className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
                            <nav id="sub-menu">
                                <ul>
                                    <li><i className="fas fa-angle-right"></i><a href="/page-faq.html"
                                                                                 className="ms-1 text-decoration-none"> FAQ`s</a>
                                    </li>
                                    <li><i className="fas fa-angle-right"></i><a href="/sitemap.html"
                                                                                 className="ms-1 text-decoration-none"> Sitemap</a>
                                    </li>
                                    <li><i className="fas fa-angle-right"></i><a href="/contact-us.html"
                                                                                 className="ms-1 text-decoration-none"> Contact
                                        Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer