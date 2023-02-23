import "./style.scss";
import ofertaEspecial from "../../assets/ofertaEspecial.png";



export default function OfertaEspecial () {
    return (
        <section className="container" id= "boxProducts">
            
            <section id="boxOferta">
           <div > <img src= {ofertaEspecial} /></div>
           
            <div id="infos">
                <div id="title">
                    <h1>Oferta especial</h1>
                </div>
                <h2>Air Jordan edição de colecionador</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</h3>
                <button className="veroferta">Ver Oferta</button>
            </div>
           
            </section>

        </section>
    )
};