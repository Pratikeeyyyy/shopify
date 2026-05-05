import { useLocation } from "react-router-dom";
import { useState } from "react";
 type Product = {
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  images?: string[];
};
type CartItem = {
  name?: string;
  price?: number;
  image?: string;
  size?: string;
  quantity?: number;
};
export default function ProductDescription() {
  const [selectedSize, setSelectedSize] = useState<string>("M");
 const location = useLocation() as { state: Product };
const product = location.state;
 function handleAddToCart() {
  const storedCart = localStorage.getItem("cart");

  let cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const newItem: CartItem = {
    name: product?.name,
    price: product?.price,
    image: product?.image || product?.images?.[0],
    size: selectedSize,
    quantity: 1,
  };

  cart.push(newItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new Event("cartUpdated"));

  console.log("Cart:", cart);

  alert("Your item is added to cart");
}
  return (
    <>
<div className="bg-dark text-white overflow-x-hidden font-sans w-full">    
<div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] lg:px-[40px]">        
<div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[64px] pt-[24px] sm:pt-[40px] pb-[40px] sm:pb-[60px]">         
     <div className="w-full lg:w-[765px] flex-shrink-0">
              <img
                src={ product?.image || product?.images?.[0] || "/image/jacket.png"
                }
                className="w-full h-[260px] sm:h-[380px] lg:h-[500px] object-cover rounded-[4px]"
              />
            </div>

            <div className="w-full lg:w-[450px] flex-shrink-0">
              <p className="text-[11px] tracking-[2px] text-sec mb-[18px]">
                LIMITED RELEASE / 001
              </p>

<h1 className="text-[24px] sm:text-[32px] lg:text-[40px] leading-[34px] sm:leading-[48px] lg:leading-[60px] font-semibold mb-[14px]">         
         {product?.name || "NEO-CHROME PARKA"}
              </h1>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-pri mb-[20px] sm:mb-[28px]">
                ${product?.price || "wiat for price todisplaay"}
              </p>
              <p className="text-[13px] text-muted leading-[22px] mb-[36px] ">
                {product?.description ||
                  "No description available for this product."}
              </p>

              <p className="text-[10px] tracking-[2px] text-muted mb-[14px]">
                SELECT FINISH
              </p>

              <div className="flex gap-[14px] mb-[34px]">
                <div className="w-[30px] h-[30px] bg-soft rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-soft rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-ter rounded-full"></div>
              </div>

              {/* SIZE */}
              <p className="text-[10px] tracking-[2px] text-muted mb-[14px]">
                SIZE
              </p>
              <div className="flex flex-wrap gap-[10px] sm:gap-[14px] mb-[28px] sm:mb-[36px]">
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-[70px] h-[42px] flex items-center justify-center text-[13px] cursor-pointer border 
                      ${selectedSize === size 
                        ? "border-pri text-pri" 
                        : "border-bordercolor"}`}
                  >
                    {size}
                  </div>
                ))}
              </div>
             

               <button onClick={handleAddToCart}
className="w-full sm:w-[300px] h-[50px] sm:h-[54px] bg-pri text-black text-[14px] rounded-[6px] mb-[18px]"               >
               ADD TO ARCHIVE (CART)
                </button>

              <p className="text-[11px] text-muted mb-[36px]">
                Complimentary worldwide express shipping
              </p>

              <div className="border-t border-bordercolor pt-[22px] text-[13px] space-y-[16px]">
                <p>TECHNICAL SPECIFICATIONS →</p>
                <p>SUSTAINABILITY & ETHICS →</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[64px] py-[40px] sm:py-[80px] items-center">
            <div className="w-full lg:w-[520px] bg-soft p-[20px] sm:p-[28px] lg:p-[34px] rounded-[6px] border border-bordercolor">
              <h2 className="text-[22px] text-pri mb-[16px]">
                Reactive Membrane Technology
              </h2>

              <p className="text-[14px] text-muted leading-[22px] ">
                The outer shell utilizes a proprietary blend of basalt fibers
                and translucent polymers. Under UV light, the molecular
                structure reconfigures to increase breathability while
                maintaining complete water resistance.
              </p>
            </div>

            <img
              src={
                product?.image || product?.images?.[0] || "/image/jacket.png"
              }
              className="w-full lg:w-[600px] h-[240px] sm:h-[320px] lg:h-[380px] object-cover rounded-[6px]"
            />
          </div>

          <div className="pb-[80px]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-[24px] sm:mb-[42px] gap-4">
              <div className="flex flex-col">
                <h2 className="text-[30px] font-semibold mb-[6px]">
                  THE COLLECTIVE VOICE
                </h2>

                <p className="text-[14px] text-sec">
                  ★★★★★ 4.9 / 5.0 (248 Reviews)
                </p>
              </div>

              <button className="border border-pri px-[20px] sm:px-[60px] lg:px-[120px] py-[10px] text-[12px] w-full sm:w-auto">
                WRITE A REVIEW
              </button>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[28px]">
              <div className="w-full bg-soft p-[20px] sm:p-[26px] rounded-[6px]">
                <div className="flex justify-between mb-[10px]">
                  <p className="text-[13px]">ELARA V.</p>
                  <p className="text-sec">★★★★★</p>
                </div>
                <p className="text-[11px] text-muted mb-[10px]">
                  VERIFIED COLLECTOR
                </p>
                 <p className="text-[13px] text-muted leading-[20px]">
                {"The way this jacket catches the evening light is otherworldly. It's more of a piece of architecture than a garment."}
                  </p>``
              </div>

              <div className="w-full bg-soft p-[20px] sm:p-[26px] rounded-[6px]">
                <div className="flex justify-between mb-[10px]">
                  <p className="text-[13px]">MARCUS T.</p>
                  <p className="text-sec">★★★★★</p>
                </div>
                <p className="text-[11px] text-muted mb-[10px]">
                  VERIFIED COLLECTOR
                </p>
               <p className="text-[13px] text-muted leading-[20px]">
                {"Fit is precise. The technical details are functional, not just aesthetic. Surviving the Tokyo monsoon in style."}
                </p>
              </div>

              <div className="w-full bg-soft p-[20px] sm:p-[26px] rounded-[6px]">
                <div className="flex justify-between mb-[10px]">
                  <p className="text-[13px]">JULIAN S.</p>
                  <p className="text-sec">★★★★★</p>
                </div>
                <p className="text-[11px] text-muted mb-[10px]">
                  VERIFIED COLLECTOR
                </p>
                <p className="text-[13px] text-muted leading-[20px]">
                  {"Heavy, structured, yet breathable. This is the peak of the Atelier's archive so far. Don't hesitate."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
