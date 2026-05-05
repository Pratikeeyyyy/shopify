import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "./api"; 
type Product = {
  _id?: string;
  name: string;
  price: number;
  images?: string[];
  category?: {
    name?: string;
  };
};
export default function ProductCatalog() {
const [products, setProducts] = useState<Product[]>([]);  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get("/products");
        const productsArray = response.data?.data?.items || [];
          console.log(response.data);
          console.log("product array", productsArray)
        setProducts(productsArray);
      } catch (err) {
        console.log(err);
        setProducts([]);
      }
    }

    fetchProducts();
  }, []);
    //   const OuterWear= products.reduce((acc,item)=>{
    //   const key=item.category;
    //     if (!acc[key]) acc[key]=[];
    //     acc[key].push(item);

    //   return acc;
    // }, {});
  
// const filteredProducts = products.filter((item) => {
//   if (category === "all") return true;
//   return item.category?.name === category;
// });
  const filteredProducts = products.filter((item) => {
  if (category === "all") return true;

  return item.category?.name?.toLowerCase() === category.toLowerCase();
});

  return (
    <div className="bg-dark text-white min-h-screen font-sans">
      <div className="px-[16px] sm:px-[24px] lg:px-[48px]pt-[40px] pb-[30px]">
        <p className="text-[11px] text-sec tracking-widest uppercase mb-[12px]">
          Season 04 // springsummer
        </p>
        <h1 className="text-[42px] sm:text-[64px] lg:text-[96px] font-bold leading-tight uppercase">
                The Curated <br />
          <span className="text-pri">collection</span>
        </h1>
      </div>

<div className="flex flex-col lg:flex-row w-full">
<aside className="w-full lg:w-[260px] px-[16px] lg:px-[24px] py-[12px] lg:py-[24px] border-b lg:border-b-0 lg:border-r border-bordercolor">      
      <h2 className="text-[12px] tracking-[0.2em]  text-white mb-[24px]">
            CATEGORIES
          </h2>
          <ul className="space-y-[16px] text-[14px]">
            <li className="flex justify-between  text-muted">
             <span onClick={()=> setCategory("all")} >All Objects</span>
              <span className="text-muted">{products.length}</span>
            </li>
          </ul>
<div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-[16px] lg:gap-[12px]">
          <p  className="text-[14px] sm:text-[16px] tracking-[2px] font-sans text-muted mt-[12px] sm:mt-[15px] cursor-pointer " >
            OuterWear
          </p>
          <p className="text-[14px] sm:text-[16px] tracking-[2px] font-sans text-muted mt-[12px] sm:mt-[15px] cursor-pointer">
            Accesories
          </p>
          <p className="text-[14px] sm:text-[16px] tracking-[2px] font-sans text-muted mt-[12px] sm:mt-[15px] cursor-pointer">
            FootWears
          </p> 
          <p className=" text-[14px] sm:text-[16px] tracking-[2px] font-sans text-muted mt-[12px] sm:mt-[15px] cursor-pointer">
            Refined By
          </p>
          <p className="text-[14px] sm:text-[16px] tracking-[2px] font-sans text-muted mt-[12px] sm:mt-[15px] cursor-pointer">
            PriceRange
          </p>
          <p className="text-[14px] sm:text-[16px] tracking-[2px] font-sans text-muted mt-[12px] sm:mt-[15px] cursor-pointer">
            Materials
          </p> </div>


          <div className="mt-[56px] p-[16px] bg-soft border border-bordercolor text-[12px] text-muted leading-[18px]">
            Every piece in the Atelier is hand-selected for its architectural
            integrity and material quality.s
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          {/* HEADER BAR */}

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-[16px] sm:px-[48px] mb-[24px] sm:mb-[40px] pt-[16px] sm:pt-[24px] gap-2">            <p className="text-[12px] tracking-[0.2em] text-muted">
              SHOWING {products.length} ARTIFACTS
            </p>

            <p className="text-[14px] text-muted">
              SORT BY <span className="text-pri">Newest Arrivals</span>
            </p>
          </div>

          <div className="px-[16px] sm:px-[24px] lg:px-[48px] pb-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[24px] sm:gap-x-[40px] lg:gap-x-[56px] gap-y-[32px] sm:gap-y-[48px] lg:gap-y-[64px]">
              {filteredProducts?.map((item, index) => (
                <div key={item._id || index}>
<div
  className="bg-soft h-[200px] sm:h-[240px] lg:h-[260px] flex items-center justify-center border border-bordercolor cursor-pointer"                    onClick={() =>
                      navigate("/productdescription", { state: item })
                    }
                  >
                    <img
                      src={item.images?.[0] || "/image/jacket.png"}
                      className="h-[200px]  object-contain "
                    />
                  </div>

                <div className="mt-[12px] sm:mt-[20px]">                 
                  <div className="flex justify-between items-center">
                      <h3 className="text-[14px]">{item.name}</h3>
                      <span className="text-[14px] text-sec">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-[12px] text-muted mt-[8px]">
                      {/* {item.category?.name || "CATEGORY"} */}
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
