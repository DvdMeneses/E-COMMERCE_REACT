import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ResultSearch from "../../components/ResultSearch";
import Footer from "../../components/Footer";

export default function Products() {
    return (
        <div>
            <Header/>
            <Menu active="products"/>
            <ResultSearch/>
            <Footer/>

            Pagina de Produtos
        </div>
    );
}
