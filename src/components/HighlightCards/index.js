import React from "react";
import "./styles.scss";

export default function HighlightCards() {
  const Links = [
    {
        discount: "30% OFF",
        text: "Novo drop Supreme",
        actionButton: "Comprar",
        image: "/images/star-wars-shirts.png",
    },
    {
        discount: "30% OFF",
        text: "Coleção Adidas",
        actionButton: "Comprar",
        image: "/images/tennis.png",
    },
    {
        discount: "30% OFF",
        text: "Novo Beats Bass",
        actionButton: "Comprar",
        image: "/images/headphone-card.png",
    },
  ];

  return (
    <section className="container-cards">
      <h3 className="title-cards">Coleções em destaque</h3>
        <div className="content-cards">
        {Links.map((Links) => (
          <div className="container-highlight-cards">
            <div className="cards">
              <span className="spanCards">{Links.discount}</span>
              <h1>{Links.text}</h1>
              <button>{Links.actionButton}</button>
            </div>
            <div>
              <img src={Links.image}/>  
            </div>
          </div>
        ))}
        </div>
    </section>
  );
}