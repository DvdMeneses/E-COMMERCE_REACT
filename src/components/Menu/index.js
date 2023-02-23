import { Link } from "react-router-dom";

import "./styles.scss";

export default function Menu(props) {

    const activeItem = (item) => {
        return item === props.active ? "selected" : "";
    };

    return (
        <div>
            <ul className="menu">
                <li> <Link className={activeItem('home')} to="/">Home</Link> </li>
                <li> <Link className={activeItem('products')} to="/produtos">Produtos</Link> </li>
                <li> <Link className={activeItem('categories')} to="/categorias">Categorias</Link> </li>
                <li> <Link className={activeItem('orders')} to="/meus-pedidos">Meus Pedidos</Link> </li>
            </ul>
        </div>
    );
}
