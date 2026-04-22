import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://ecommerce-api-ten-jade.vercel.app/api/v1/products",
        );

        const data = res.data.data;
        const productsArray = data?.items || [];

        setProducts(productsArray);
      } catch (err) {
        console.log(err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen font-sans">
      <div className="px-[48px] pt-[40px] pb-[30px]">
        <p className="text-[11px] text-sec tracking-widest uppercase mb-[12px]">
          Season 04 // springsummer
        </p>

        <h1 className="text-[96px] font-bold leading-tight uppercase">
          The Curated <br />
          <span className="text-pri">collection</span>
        </h1>
      </div>

      <div className="flex">
        <aside className="w-[260px] px-[24px] py-[24px] border-r border-bordercolor">
          <h2 className="text-[12px] tracking-[0.2em]  text-white mb-[24px]">
            CATEGORIES
          </h2>
          <ul className="space-y-[16px] text-[14px]">
            <li className="flex justify-between  text-muted">
              <span>All Objects</span>
              <span className="text-muted">{products.length}</span>
            </li>
          </ul>
          <p className="text-[16px] tracking-[2px] font-sans text-muted mt-[15px]">
            OuterWear
          </p>
          <p className="text-[16px] tracking-[2px] font-sans text-muted mt-[15px]">
            Accesories
          </p>
          <p className="text-[16px] tracking-[2px] font-sans text-muted mt-[15px]">
            FootWears
          </p>
          <p className=" font-serif mt-[25px] text-[11px] font-bold uppercase">
            Refined By
          </p>
          <p className="text-[16px] tracking-[2px] font-sans text-muted mt-[14px]">
            PriceRange
          </p>
          <p className="text-[16px] tracking-[2px] font-sans text-muted mt-[14px]">
            Materials
          </p>

          <div className="mt-[56px] p-[16px] bg-soft border border-bordercolor text-[12px] text-muted leading-[18px]">
            Every piece in the Atelier is hand-selected for its architectural
            integrity and material quality.
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          {/* HEADER BAR */}
          <div className="flex justify-between items-center px-[48px] mb-[40px] pt-[24px]">
            <p className="text-[12px] tracking-[0.2em] text-muted">
              SHOWING {products.length} ARTIFACTS
            </p>

            <p className="text-[14px] text-muted">
              SORT BY <span className="text-pri">Newest Arrivals</span>
            </p>
          </div>

          <div className="px-[48px] pb-[60px]">
            <div className="grid grid-cols-3 gap-x-[56px] gap-y-[64px]">
              {products.map((item, index) => (
                <div key={item._id || index}>
                  <div
                    className="bg-soft h-[260px] flex items-center justify-center border border-bordercolor cursor-pointer"
                    onClick={() =>
                      navigate("/productdescription", { state: item })
                    }
                  >
                    <img
                      src={item.images?.[0] || "/image/jacket.png"}
                      className="h-[150px] object-contain"
                    />
                  </div>

                  <div className="mt-[20px]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[14px]">{item.name}</h3>
                      <span className="text-[14px] text-sec">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-[12px] text-muted mt-[8px]">
                      {item.category?.name || "CATEGORY"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
