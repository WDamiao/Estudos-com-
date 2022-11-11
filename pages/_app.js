import Banner from "../src/components/banner";
import Footer from "../src/components/Footer";
import Menu from "../src/components/Menu";
import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Menu />
            <Banner />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}