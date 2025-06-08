import React from "react";
import "./maincards.css";
import cards from "../data/cardsData.json";
import { Link } from "react-router-dom";

function Maincards() {
  return (
    <div className="maincards-wrapper">
      <div className="left-card">
        <Link
          to={`/article/${cards[0].id}`}
          className="card large"
          style={{ backgroundPosition: "center", backgroundImage: `url(${cards[0].image})` }}
        >
          <div className="overlay">
            <h2 className="title">{cards[0].title}</h2>
            <p>{cards[0].content}</p>
          </div>
        </Link>
      </div>
      <div className="right-cards">
        {cards.slice(1).map((card) => (
          <Link
            key={card.id}
            to={`/article/${card.id}`}
            className="card small"
            style={{ backgroundPosition: "center", backgroundImage: `url(${card.image})` }}
          >
            <div className="overlay">
              <h3 className="small_titel">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Maincards;
