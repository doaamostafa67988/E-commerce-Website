import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, image, title, price, desc, isFav, onFav }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
        <div className="fav-circle" onClick={onFav}>
          <span className={isFav ? "fav active" : "fav"}>♡</span>
        </div>
      </div>
      <div className="card-body">
        <div className="title-row">
          <h4
            className="card-title-link"
            onClick={() => navigate(`/product/${id}`)}
          >
            {title}
          </h4>
          <span className="price">${price}</span>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}