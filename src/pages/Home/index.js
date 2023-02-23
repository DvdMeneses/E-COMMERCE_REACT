import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

import HighlightCards from "../../components/HighlightCards";
import EmAlta from "../../components/EmALta";
import OfertaEspecial from "../../components/OfertaEspecial";
import HighlightIcon from "../../components/HighlightIcon";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div >
            <Header/>
            
            <Menu active="home"/>

            <Banner/>

            <HighlightCards/>

            <HighlightIcon/>

            <EmAlta/>
            
            <OfertaEspecial/>

            <Footer/>

        </div>
    );
}
