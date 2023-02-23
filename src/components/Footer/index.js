import React from "react";
import "./styles.scss";

export default function Footer() {
    return (
        <section className="container-footer">
            <div className="container-columns">
                <div className="column1">
                    <div className="digital-store">
                        <img className="logo-footer" src="/images/Logo-footer.svg"/>
                        <h1>Digital Store</h1>
                    </div>
                    <div className="footer-lorem">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    </div>
                    <div className="social-media">
                        <a><img src="/images/Facebook.svg" /></a>
                        <a><img src="/images/Instagram.svg" /></a>
                        <a><img src="/images/Twitter.svg" /> </a>
                    </div>
                </div>
                <div className="column2">
                    <h4>Informação</h4>
                    <a>Sobre Drip Store</a>
                    <a>Segurança</a>
                    <a>Wishlist</a>
                    <a>Blog</a>
                    <a>Trabalhe Conosco</a>
                    <a>Meus Pedidos</a>
                </div>
                <div className="column3">
                    <h4>Categorias</h4>
                        <a>Camisetas</a>
                        <a>Calças</a>
                        <a>Bonés</a>
                        <a>Headphones</a>
                        <a>Tênis</a>
                </div>
                <div className="column4">
                    <h4>Contato</h4>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <span>(85) 3051-3411</span>
                </div>
            </div>
            <div className="footer-bottom">
                <div></div>
                <span>@ 2022 Digital College</span>
            </div>

        </section>
    )
}