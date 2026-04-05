import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div>
      <Navbar />
      <Banner />
      <h2 className="section-title">Products</h2>
      <div className="products">
        {visibleProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.thumbnail}
            title={item.title}
            price={item.price}
            desc={item.description}
            isFav={favorites.includes(item.id)}
            onFav={() => toggleFavorite(item.id)}
          />
        ))}
      </div>
      {!showAll && (
        <button className="see-more" onClick={() => setShowAll(true)}>
          See More
        </button>
      )}
    </div>
  );
}