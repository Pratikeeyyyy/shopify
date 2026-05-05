import { useEffect, useState } from "react";
// import { Toaster } from "sonner";
// import axios from "axios";
// import Login from "./login";
import apiClient from "./api";
import Toast from "../toaster";
import { ResponseProps } from "../type/type";
import { Link, useNavigate } from "react-router-dom";
// {id,name,description,price}
export default function LandingPage(  ) {
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);
    const [products, setProducts] = useState<ResponseProps[]>([]);
  // fetach gareko data
  type ProductApiResponse = {
  data: {
    items: ResponseProps[];
  };
};
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await apiClient.get<ProductApiResponse>("/products");

      console.log(response.data);

      const data = response.data.data;
      const productsArray = data?.items || [];
      setProducts(productsArray);
    } catch (err) {
      console.log(err);
      setProducts([]);
    }
  };

  fetchProducts();
}, []);

const next = () => {
  setStartIndex(Math.min(products.length - 4, startIndex + 1))
}

const prev = () => {
  setStartIndex(Math.max(0, startIndex - 1))
}

  return (
    <>
      <div className="bg-dark text-white  py-[64px]  grid grid-cols-1 lg:grid-cols-2 px-[16px] sm:px-[24px] lg:px-[32px] gap-[24px] lg:gap-[40px] items-center w-[] mx-auto">
        <div>
          <p className="text-[12px] text-sec mb-[16px] tracking-widest uppercase">
            FW24 DROP · NEO-MINIMALISM
          </p>

          <h1 className="text-[48px] font-bold leading-tight">
            THE <br />
            <span className="text-pri uppercase">LUMINOUS</span> <br />
            SHIFT
          </h1>

          <p className="text-gray-400 mt-[24px] max-w-md text-[14px]">
            Redefining structural boundaries through light and form. Discover
            the collection that exists at the intersection of digital void and
            physical presence.
          </p>

          <div className="flex gap-[16px] mt-[24px]" 
>             <div className="flex-none">
  {showToast && <Toast message="You need to login first " />}

              </div>
    
              <button
               onClick={() => setShowToast(true)} 
              className="bg-pri text-black px-[24px] py-[8px] rounded-[6px] text-[14px] uppercase"  >
              SHOP COLLECTION
            </button>
            <button className="bg-soft px-[24px] py-[8px] rounded-[6px] text-[14px] uppercase">
              VIEW LOOKBOOK
            </button>
                   

        
      
          </div>
        </div>

        <div className="relative w-full max-w-[600px] mx-auto">
          <img
            src="/image/jacket.png"
            className="shadow-glow border-slate-800 border-[8px] w-full"
            alt=""
          />
          <div className="absolute bottom-[16px] left-[16px] bg-black/70 p-[16px] rounded-[8px] text-[14px]">
            <p className="text-sec text-[12px] uppercase">FEATURED ITEM</p>
            <p>Monolith Chrome Shell</p>
            <p className="text-gray-400">$1,850.00</p>
          </div>
        </div>
      </div>

      <section className="bg-dark text-white py-[64px] font-sans w-full px-[16px] sm:px-[24px] lg:px-[32px] mx-auto">
        <div className="flex justify-between items-start mb-[40px]">
          <div>
            <p className="text-[12px] text-muted tracking-widest mb-[8px]">
              NAVIGATION
            </p>
            <h2 className="text-[30px] font-semibold">Explore the Monolith</h2>
          </div>

          <a
            href="#"
            className="text-[12px] text-pri tracking-widest hover:underline"
          >
            ALL DEPARTMENTS
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          <div className="col-span-2 relative rounded-[12px] overflow-hidden  bg-soft w-full h-[300px] sm:h-[400px] lg:h-[600px]">
            <img src="/image/readytowear.png" />

            <div className="absolute bottom-[24px] left-[80px]">
              <h3 className="text-[20px] font-semibold">READY TO WEAR</h3>
              <p className="text-muted text-[14px] mt-[4px]">
                84 New Items Available
              </p>
              <Link to="/login"> 
              <button  className="text-sec text-[14px] mt-[8px] inline-block" >EXPLORE →
              </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="relative rounded-[12px] overflow-hidden flex-wrap bg-soft">
                            <Link to="/login"> 

              <img
                src="/image/footwear.png"
                className="w-full object-cover opacity-70"
              />
              <p className="text-[20px] ">Footwear</p>
              <p className="  text-[9.6px] text-white ">View Collection↗</p>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-[12px] sm:gap-[24px]">
              <div className="relative rounded-[12px] overflow-hidden bg-soft h-[160px]">
                 <Link to="/login"> 

                <img
                  src="/image/sneakers.png"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute bottom-[12px] left-[12px]">
                  <p className="text-[14px]">ACCESSORIES</p>
                </div>
                </Link>
              </div>

              <div className="relative rounded-[12px] overflow-hidden bg-soft h-[160px]">
                <Link to="/login">
                <img
                  src="/image/accesories.png"
                  className="w-full h-full object-cover opacity-70"
                  />
                <div className="absolute bottom-[12px] left-[12px]">
                  <p className="text-[14px]">SNEAKERS</p>
                </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* //trending wala section  */}
      <div className="bg-dark text-white w-full px-[16px] sm:px-[24px] lg:px-[32px] mx-auto">

<h2 className="text-[20px] mb-[32px] flex">
  TRENDING <span className="font-bold text-pri mx-[8px]">{'//'}</span> NOW
  <span className="flex ml-auto gap-[8px]">
<button onClick={prev} className="border border-pri px-[8px] py-[2px]">
  &lt;
</button>

<button onClick={next} className="border border-pri px-[8px] py-[2px]">
  &gt;
</button>
  </span>
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[24px]">
  {(products || [])
    .slice(startIndex, startIndex + 4)
  .map((item, index) => {
    return (
      <div
        key={index}
        className="bg-soft p-[16px] rounded-[12px] cursor-pointer"
        onClick={() =>
          navigate("/productdescription", { state: item as ResponseProps })
        }
      >
        <img
          src={item.image || item.images?.[0]}
          className="w-full h-[200px] object-cover"
        />
        <p>{item.name}</p>
        <p className="text-sec">${item.price}</p>
      </div>
    );
  })}
</div>
        <div className="bg-black text-white rounded-[12px]  my-[40px]  py-[64px] w-full mx-auto px-[16px] sm:px-[24px] lg:px-[32px] ">
          <div className="max-w-xl">
            <h2 className="text-[30px] font-semibold mb-[16px]">
              JOIN THE <br /> INNER CIRCLE
            </h2>

            <p className="text-gray-400 text-[14px] mb-[24px]">
              Sign up for early access to limited edition drops, secret archive
              sales, and private exhibition invitations.
            </p>

            <div className="flex gap-[16px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black px-[16px] py-[8px] rounded-[6px] w-full outline-none"
              />
              <button className="bg-sec text-black px-[24px] py-[8px] rounded-[6px]">
                SUBSCRIBE
              </button> 
              {/* <button className="bg-sec text-black px-[24px] py-[8px] rounded-[6px]"  
       onClick={() => setShowToast(true)}
              > Toaster
      {showToast && <Toast message="This is toast" />}  
              </button>
     */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



