import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const [products, setProducts] = useState([]);
  // fetach gareko data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-api-ten-jade.vercel.app/api/v1/products",
        );

        console.log("responce of data", res.data);

        const data = res.data.data;

        console.log("the data that is come  object", data);
        const productsArray = data?.items || [];
        console.log(
          "this is the array of product coming frim url",
          productsArray,
        );

        setProducts(productsArray);
      } catch (err) {
        console.log(err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-dark text-white px-[32px] py-[64px] grid grid-cols-2 gap-[40px] items-center w-[] mx-auto">
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

          <div className="flex gap-[16px] mt-[24px]">
            <button className="bg-pri text-black px-[24px] py-[8px] rounded-[6px] text-[14px] uppercase">
              SHOP COLLECTION
            </button>
            <button className="bg-soft px-[24px] py-[8px] rounded-[6px] text-[14px] uppercase">
              VIEW LOOKBOOK
            </button>
          </div>
        </div>

        <div className="relative w-[600px]">
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

      <section className="bg-dark text-white px-[32px] py-[64px] font-sans w-[1265px] mx-auto">
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

        <div className="grid grid-cols-3 gap-[24px]">
          <div className="col-span-2 relative rounded-[12px] overflow-hidden ml-[64px] bg-soft h-[600px] w-[600px]">
            <img src="/image/readytowear.png" />

            <div className="absolute bottom-[24px] left-[80px]">
              <h3 className="text-[20px] font-semibold">READY TO WEAR</h3>
              <p className="text-muted text-[14px] mt-[4px]">
                84 New Items Available
              </p>
              <a
                href="#"
                className="text-sec text-[14px] mt-[8px] inline-block"
              >
                EXPLORE →
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] mr-[64px]">
            <div className="relative rounded-[12px] overflow-hidden flex-wrap bg-soft">
              <img
                src="/image/footwear.png"
                className="w-full object-cover opacity-70"
              />
              <p className="text-[20px] ">Footwear</p>
              <p className="  text-[9.6px] text-white ">View Collection↗</p>
            </div>

            <div className="grid grid-cols-2 gap-[24px]">
              <div className="relative rounded-[12px] overflow-hidden bg-soft h-[160px]">
                <img
                  src="/image/sneakers.png"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute bottom-[12px] left-[12px]">
                  <p className="text-[14px]">ACCESSORIES</p>
                </div>
              </div>

              <div className="relative rounded-[12px] overflow-hidden bg-soft h-[160px]">
                <img
                  src="/image/accesories.png"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute bottom-[12px] left-[12px]">
                  <p className="text-[14px]">SNEAKERS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //trending wala section */}
      <div className="bg-dark text-white px-[32px] w-[1265px] mx-auto">
        <h2 className="text-[20px] mb-[32px] flex">
          TRENDING <p className="font-bold text-pri"> // </p> NOW
          <span className="flex ml-[900px] gap-[8px]">
            <button className="border border-pri px-[8px] py-[2px] text-[12px]">
              &lt;
            </button>
            <button className="border border-pri px-[8px] py-[2px] text-[12px]">
              &gt;
            </button>
          </span>
        </h2>
        {/* //maping gareko*/}
        <div className="grid grid-cols-4 gap-[24px]">
          {(products || []).slice(0, 4).map((item, index) => (
            <div
              key={item._id || index}
              className="bg-soft p-[16px] rounded-[12px] "
              onClick={() => navigate("/productdescription", { state: item })}
            >
              <img
                src={item.image || item.images?.[0] || "/image/placeholder.png"}
                className="w-full h-[200px] object-cover"
                alt={item.name || "product"}
              />

              <p className="text-[14px]">{item.name || "Product Name"}</p>

              <p className="text-sec text-[14px]">${item.price || 0}</p>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-[12px] mx-[32px] my-[40px] px-[32px] py-[64px] w-[1200px] ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
