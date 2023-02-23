import "./style.scss";
import tenisEmAlta from "../../assets/tenisEmAlta.png";

export default function EmAlta() {
    return (
        <section className="EmAlta" id="boxProducts">
            <div id="title">
                <h1>Produtos em alta</h1>
                <a className="link" href="#">Ver todos  {"->"}</a>
            </div>
            
            <section className="items">
                <div className="item">
                    <div className="boxImage discount" data-discount="30% OFF">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>

                <div className="item">
                    <div className="boxImage discount" data-discount="30% OFF">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>

                <div className="item">
                    <div className="boxImage">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>

                <div className="item">
                    <div className="boxImage">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>
            
                <div className="item">
                    <div className="boxImage">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>

                <div className="item">
                    <div className="boxImage">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>

                <div className="item">
                    <div className="boxImage">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>

                <div className="item">
                    <div className="boxImage">
                        <img src={tenisEmAlta}/>
                    </div>
                    <span className="category">Tênis</span>
                    <h2 className="productName">K-Swiss V8 - Masculino</h2>
                    <div className="price">
                        <h3>$200</h3>
                        <h3>$100</h3>
                    </div>
                </div>

               
            </section>
        </section>
    );
}
