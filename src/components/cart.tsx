import { useEffect, useState } from "react";
type CartItem = {
  name?: string;
  price?: number;
  size: string;
  quantity: number;
  image?: string;
};
export default function Cart() {
const [cartItems, setCartItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);
function removeItem(index: number) {  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  setCartItems(cart);

  window.dispatchEvent(new Event("cartUpdated"));
}

  return (
    <div className="min-h-screen bg-dark text-white p-10">

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Cart is empty</p>
      ) : (
        cartItems.map((item, i) => (
          <div key={i} className="border-b border-gray-600 py-4">
            <p className="text-lg">{item.name}</p>
            <p className="text-sm text-gray-400">
              Size: {item.size} | Rs {item.price}
            </p>
            <button
      onClick={() => removeItem(i)}
      className="text-red-500 text-sm"
    >
      Remove
    </button>
          </div>
        ))
      )}
    
    </div>
  );
}