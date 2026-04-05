import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="detail-loading">Loading...</div>
      </div>
    );
  }

  if (!product) return null;

  const images = product.images?.length ? product.images : [product.thumbnail];

  return (
    <div>
      <Navbar />

      {/* Back button */}
      <div className="detail-back" onClick={() => navigate(-1)}>
        ← Back
      </div>

      <div className="detail-container">
        {/* Images */}
        <div className="detail-images">
          <div className="detail-main-img-wrap">
            <img
              src={images[selectedImage]}
              alt={product.title}
              className="detail-main-img"
            />
            <button
              className="detail-fav-btn"
              onClick={() => setIsFav((f) => !f)}
            >
              <span style={{ color: isFav ? "#F61B5A" : "#ccc", fontSize: 22 }}>♡</span>
            </button>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="detail-thumbs">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`detail-thumb ${selectedImage === i ? "active" : ""}`}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.title}</h1>

          {/* Rating */}
          <div className="detail-rating">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
            <span className="detail-rating-num">{product.rating} / 5</span>
          </div>

          {/* Price */}
          <div className="detail-price-row">
            <span className="detail-price">${product.price}</span>
            {product.discountPercentage && (
              <span className="detail-discount">
                -{Math.round(product.discountPercentage)}% OFF
              </span>
            )}
          </div>

          <p className="detail-desc">{product.description}</p>

          {/* Stats */}
          <div className="detail-stats">
            <div className="detail-stat">
              <span className="detail-stat-label">Brand</span>
              <span className="detail-stat-val">{product.brand || "—"}</span>
            </div>
            <div className="detail-stat">
              <span className="detail-stat-label">Stock</span>
              <span className="detail-stat-val">{product.stock} left</span>
            </div>
            <div className="detail-stat">
              <span className="detail-stat-label">SKU</span>
              <span className="detail-stat-val">{product.sku || "—"}</span>
            </div>
            <div className="detail-stat">
              <span className="detail-stat-label">Warranty</span>
              <span className="detail-stat-val">{product.warrantyInformation || "—"}</span>
            </div>
            <div className="detail-stat">
              <span className="detail-stat-label">Shipping</span>
              <span className="detail-stat-val">{product.shippingInformation || "—"}</span>
            </div>
            <div className="detail-stat">
              <span className="detail-stat-label">Return</span>
              <span className="detail-stat-val">{product.returnPolicy || "—"}</span>
            </div>
          </div>

          {/* Tags */}
          {product.tags?.length > 0 && (
            <div className="detail-tags">
              {product.tags.map((tag) => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="detail-actions">
            <button className="detail-cart-btn">Add to Cart</button>
            <button className="detail-buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews?.length > 0 && (
        <div className="detail-reviews">
          <h2 className="detail-reviews-title">Customer Reviews</h2>
          <div className="detail-reviews-list">
            {product.reviews.map((r, i) => (
              <div key={i} className="detail-review-card">
                <div className="detail-review-top">
                  <span className="detail-review-name">{r.reviewerName}</span>
                  <span className="detail-review-stars">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </span>
                </div>
                <p className="detail-review-comment">{r.comment}</p>
                <span className="detail-review-date">
                  {new Date(r.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}