import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Basic --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="keywords" content="WebSite Template" />
        <meta
          name="description"
          content="Porto - Multipurpose Website Template"
        />
        <meta name="author" content="okler.net" />

        {/* <!-- Favicon --> */}
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />

        {/* <!-- Mobile Metas --> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />


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
        <script  defer src="/js/views/view.home.js"></script>

        {/* <!-- Theme Initialization Files --> */}
        <script defer src="/js/theme.init.js"></script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-42715764-11"
        ></Script>
        {/* <script>
      {' window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', 'UA-42715764-11');'}
		</script> */}
        {/* <!-- Vendor -->		 */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
