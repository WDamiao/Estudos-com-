import Head from "next/head";
import Banner from "../src/components/banner";
import Footer from "../src/components/Footer";
import Menu from "../src/components/Menu";
import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZEDNFZZLL"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-PZEDNFZZLL');`    
                    }}
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Menu />
            <Banner />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}