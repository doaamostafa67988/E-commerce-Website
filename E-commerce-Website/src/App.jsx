// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AllProducts from "./pages/AllProducts";
// import ProductDetails from './pages/ProductDetails';
// import logoSvg from './assets/logo.svg'; 
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* الجزء ده بتاع الناف بار واللوجو */}
//         <nav className="main-navbar">
//           <Link to="/" className="nav-logo-section">
//             <img src={logoSvg} alt="Minimal Shopping Logo" className="brand-logo" />
//             <span className="brand-text">
//               Minimal <span className="color">Shop</span>ping
//             </span>
//           </Link>

//           <div className="nav-actions-section">
//             <Link to="/login" className="user-login-btn" title="Login / Register">
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="12" cy="7" r="4"></circle>
//               </svg>
//             </Link>
//           </div>
//         </nav>

//         {/* هنا ترتيب الصفحات عشان كله يشتغل سوا */}
//         <Routes>
//           {/* الصفحة الرئيسية بتعرض كل المنتجات */}
//           <Route path="/" element={<AllProducts />} />
          
//           {/* صفحة تفاصيل المنتج */}
//           <Route path="/product/:id" element={<ProductDetails />} />
//         </Routes>
//       </div>
//     </Router>
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import ProductDetail from "./pages/ProductDetail";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;












import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"; // شغل دعاء
import Login from "./pages/Login"; // شغل دعاء
import AllProducts from "./pages/AllProducts";
import ProductDetails from './pages/ProductDetails';
import logoSvg from './assets/logo.svg'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* الجزء بتاعك: الناف بار واللوجو هيفضلوا ظاهرين في كل الصفحات */}
        <nav className="main-navbar">
          <Link to="/" className="nav-logo-section">
            <img src={logoSvg} alt="Minimal Shopping Logo" className="brand-logo" />
            <span className="brand-text">
              Minimal <span className="color">Shop</span>ping
            </span>
          </Link>

          <div className="nav-actions-section">
            <Link to="/login" className="user-login-btn" title="Login / Register">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          </div>
        </nav>

        {/* هنا ترتيب الصفحات: دمجنا شغلك مع شغل دعاء */}
        <Routes>
          {/* لو الصفحة الرئيسية هي AllProducts خليها كدة، لو دعاء عملت Home جديدة بدليها */}
          <Route path="/" element={<Home />} /> 
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;