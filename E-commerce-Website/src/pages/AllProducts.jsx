import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeartButton = () => {
  const [active, setActive] = useState(false);
  return (
    <button 
      className={`heart-btn ${active ? 'active' : ''}`}
      onClick={(e) => { e.preventDefault(); setActive(!active); }}
    >
      <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.23z" /></svg>
    </button>
  );
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=28')
      .then(res => res.json())
      .then(data => { setProducts(data.products); setLoading(false); });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="shop-container">
      <main className="magazine-grid">
        {products.map((product, index) => {
          let customClass = "product-card";
          
          // البرتن اللي طلبتيه بالظبط:
          if (index === 0 || index === 1 || index === 3) {
            customClass += " hero-tall"; // الصور الطويلة
          } else if (index === 4){
            customClass += " hero-short-stacked"; // القصيرين اللي فوق بعض
          } else {
            customClass += " regular-short"; // باقي الصور قصيرة
          }

          return (
            <Link to={`/product/${product.id}`} key={product.id} className={customClass}>
              <div className="image-wrapper">
                <HeartButton />
                <img src={product.images[0] || product.thumbnail} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="info-top">
                  <h4 className="title">{product.title}</h4>
                  <span className="price">${product.price}</span>
                </div>
                <p className="desc">{product.description}</p>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
};

export default AllProducts;