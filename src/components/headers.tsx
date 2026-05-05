import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// type Product = {
//   id: number;
//   name: string;
// };
export default function Header() {
  const [loggedin, setLoggedin] = useState(false);
  // const [showCartitem, setShowCartitem] = useState(false);
const [cartItems, setCartItems] = useState<string[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedin(!!token);
  }, []);

 useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  };

  updateCart();

  window.addEventListener("cartUpdated", updateCart);

  return () => window.removeEventListener("cartUpdated", updateCart);
}, []);
  function logout() {
    localStorage.removeItem("token");
    setLoggedin(false);
  }

  return (
<div className="relative px-[16px] sm:px-[24px] lg:px-[32px] py-[12px] sm:py-[16px] flex flex-wrap items-center justify-between bg-slate-900 text-white gap-[12px]">
  <Link to="/" >
  <h1 className="text-[16px] sm:text-[18px] font-semibold text-pri">
        ShopiFy
      </h1>
  </Link>

<nav className="flex gap-[16px] sm:gap-[24px] text-[13px] sm:text-[14px] overflow-x-auto whitespace-nowrap w-full sm:w-auto order-3 sm:order-none">
        <a>Collections</a>
        <a className="text-pri">New Arrivals</a>
        <a>Archive</a>
      </nav>

<div className="flex items-center gap-[8px] sm:gap-[12px] lg:gap-[16px] w-full sm:w-auto justify-between sm:justify-end order-2">        <input
          placeholder="Search"
          className="bg-slate-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded w-full sm:w-[160px] lg:w-[220px]"
        />

        {/* CART BUTTON */}
       <Link to="/cart" className="whitespace-nowrap">
  🛒 ({cartItems.length})
</Link>
        {loggedin ? (
          <button onClick={logout} className="text-pri font-bold whitespace-nowrap">
            Logout
          </button>
        ) : (
          <Link to="/login" className="whitespace-nowrap text-pri font-bold">
            Login
          </Link>
        )}

      </div>

    </div>
  );
}
