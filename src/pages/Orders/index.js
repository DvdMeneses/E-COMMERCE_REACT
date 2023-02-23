import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Orders() {
    return (
        <div>
            <Header/>
            <Menu active="orders"/>
            <Banner/>

            Pagina de Pedidos
        </div>
    );
}
