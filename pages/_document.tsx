import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel={'preconnect'} href={'https://fonts.googleapis.com'}/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta
                    name="description"
                    content="GƏNCLƏRİN ELMİ ARAŞDIRMALARINA DƏSTƏK İctimai Birliyi"
                />
                <meta name="author" content="Taleh Maharramov, Tofiq Rehimov, Elgiz Ismayilov"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
                />
                <meta property="og:site_name" content="GEAD IB" />
                <meta property="og:locale" content="az_AZE" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/favicon/site.webmanifest"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <script defer src="/js/theme.js"></script>
                <script defer src="/js/theme.init.js"></script>
                <script defer src="/vendor/plugins/js/plugins.min.js"></script>


            </Head>
            <body>
            <Main/>
            <NextScript/>

            <a style={{display: "none"}} className="scroll-to-top hidden-mobile" href="#" aria-label="Scroll To Top"><i
                className="fas fa-chevron-up"></i></a>
            </body>
        </Html>
    );
}
