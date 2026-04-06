import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, image, title, price, desc, isFav, onFav }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="image-wrapper" style={{ cursor: 'pointer' }}>
        {/* خليت الصورة كمان لما تتداس تفتح صفحة المنتج زي الـ Title */}
        <img 
          src={image} 
          alt={title} 
          onClick={() => navigate(`/product/${id}`)} 
        />
        
        <div className="fav-circle" onClick={(e) => {
          e.stopPropagation(); // عشان لما تدوسي قلب ميروحش لصفحة المنتج
          onFav();
        }}>
          <span className={isFav ? "fav active" : "fav"}>
            {isFav ? "♥" : "♡"}
          </span>
        </div>
      </div>

      <div className="card-body">
        <div className="title-row">
          <h4
            className="card-title-link"
            style={{ cursor: 'pointer' }}
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