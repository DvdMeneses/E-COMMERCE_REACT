import "./style.scss";
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';


export default function SearchAppBar() {
  return (
    <header className="header" id="header-top">
        <section id="header-top__logo">
            <img src={logo} alt="Digital Store" title="Logomarca do sistema"/>
        </section>
        <section id="header-top__search">
            <form action="#" method="get">
                <input type="text" name="s" placeholder="Pesquisar produto..."/>
                <button>
                    <img src={search} alt="Lupa" title="Pesquisar"/>
                </button>
            </form>
        </section>
        <section id="header-top__links">
            <a href="#">Cadastre-se</a>
            <a href="#">Entrar</a>
        </section>
        <section id="header-top__cart">
            <a href="#" data-value="2">
                <img src={cart} alt="Carrinho" title="Carrinho"/>
            </a>
        </section>
    </header>
  );
}
