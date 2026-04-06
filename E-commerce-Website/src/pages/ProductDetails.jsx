// import { useState, useEffect } from 'react';
// import '../styles/ProductDetails.css';
// import logoImage from '../assets/logo.svg'; 

// function ProductDetails() {
//   const [product, setProduct] = useState(null);
//   const [showAdded, setShowAdded] = useState(false);
//   const [selectedSize, setSelectedSize] = useState('S');

//   useEffect(() => {
//     fetch('https://dummyjson.com/products/1')
//       .then(res => res.json())
//       .then(data => setProduct(data))
//       .catch(err => console.log("Error:", err));
//   }, []);

//   const handleAddToCart = () => {
//     setShowAdded(true);
//     setTimeout(() => setShowAdded(false), 3000);
//   };

//   if (!product) return <div className="loading">Loading...</div>;

//   const sizes = ['XS', 'S', 'M', 'L'];

//   return (
//     <div className="page-wrapper">
//       <header className="header">
//         <div className="logo-section">
//           <img src={logoImage} alt="logo" className="logo-img-file" />
//           <span className="logo-text">Minimal <span className="shop-red">Shop</span>ping</span>
//         </div>
//         <div className="header-icons"><span className="icon-item">👤</span></div>
//       </header>

//       <main className="product-container">
//         <div className="product-image-wrapper">
//           <img src={product.thumbnail} alt={product.title} className="main-product-img" />
//         </div>

//         <div className="product-info-section">
//           <p className="new-tag">New!</p>
//           <h1 className="product-title">{product.title}</h1>
//           <p className="product-price">${product.price}</p>
//           <div className="product-description">
//             <p>Relaxed fit.</p>
//             <p>Crew neck.</p>
//             <p>Drop shoulder sleeves.</p>
//             <p>Elasticated neckline, hemline and cuffs.</p>
//             <p>Made in Russia.</p>
//           </div>

//           <div className="size-selector">
//             <p className="size-label">Size</p>
//             <div className="size-buttons">
//               {sizes.map((size) => (
//                 <button 
//                   key={size}
//                   className={selectedSize === size ? 'active' : ''} 
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           <div className="bottom-actions">
//             <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
//             {showAdded && <p className="success-msg">Added to Cart!</p>}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ProductDetails;



























import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 1. ضفنا دي عشان نجيب الـ ID
import '../styles/ProductDetails.css';
import logoImage from '../assets/logo.svg'; 

function ProductDetails() {
  const { id } = useParams(); // 2. استخراج الـ id من الـ URL
  const [product, setProduct] = useState(null);
  const [showAdded, setShowAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('S');

  useEffect(() => {
    // 3. استبدلنا رقم 1 بمتغير الـ id اللي جاي من الصفحة
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log("Error:", err));
  }, [id]); // 4. ضفنا id هنا عشان لو اتغير الصفحة تتحدث

  const handleAddToCart = () => {
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 3000);
  };

  if (!product) return <div className="loading">Loading...</div>;

  const sizes = ['XS', 'S', 'M', 'L'];

  return (
    <div className="page-wrapper">
      <main className="product-container">
        <div className="product-image-wrapper">
          {/* دلوقت الصورة هتتغير حسب المنتج */}
          <img src={product.images?.[0] || product.thumbnail} alt={product.title} className="main-product-img" />
        </div>

        <div className="product-info-section">
          <p className="new-tag">New!</p>
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">${product.price}</p>
          
          <div className="product-description">
            {/* عرض الوصف الحقيقي للمنتج بدل الكلام الثابت */}
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating} / 5</p>
          </div>

          <div className="size-selector">
            <p className="size-label">Size</p>
            <div className="size-buttons">
              {sizes.map((size) => (
                <button 
                  key={size}
                  className={selectedSize === size ? 'active' : ''} 
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bottom-actions">
            <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
            {showAdded && <p className="success-msg">Added to Cart!</p>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;