import { useLocation } from "react-router-dom";
export default function ProductDescription() {
  const location = useLocation();
  const product = location.state;
  return (
    <>
      <div className="bg-dark text-white  overflow-x-hidden font-sans w-[1265px] ">
        <div className="w-[1440px] mx-auto px-[40px]">
          <div className="flex gap-[64px] pt-[40px] pb-[60px]">
            <div className="w-[736px] flex-shrink-0">
              <img
                src={
                  product?.image || product?.images?.[0] || "/image/jacket.png"
                }
                className="w-full h-[820px] object-cover rounded-[4px]"
              />
            </div>

            <div className="w-[520px] flex-shrink-0">
              <p className="text-[11px] tracking-[2px] text-sec mb-[18px]">
                LIMITED RELEASE / 001
              </p>

              <h1 className="text-[56px] leading-[60px] font-semibold mb-[14px]">
                {product?.name || "NEO-CHROME PARKA"}
              </h1>
              <p className="text-[20px] text-pri mb-[28px]">
                ${product?.price || "wiat for price todisplaay"}
              </p>
              <p className="text-[13px] text-muted leading-[22px] mb-[36px] mr-[60px]">
                {product?.description ||
                  "No description available for this product."}
              </p>

              <p className="text-[10px] tracking-[2px] text-muted mb-[14px]">
                SELECT FINISH
              </p>

              <div className="flex gap-[14px] mb-[34px]">
                <div className="w-[30px] h-[30px] border-[2px] border-pri rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-soft rounded-full"></div>
                <div className="w-[30px] h-[30px] bg-ter rounded-full"></div>
              </div>

              {/* SIZE */}
              <p className="text-[10px] tracking-[2px] text-muted mb-[14px]">
                SIZE
              </p>

              <div className="flex gap-[14px] mb-[36px]">
                <div className="w-[70px] h-[42px] border border-bordercolor flex items-center justify-center text-[13px]">
                  S
                </div>
                <div className="w-[70px] h-[42px] border border-pri text-pri flex items-center justify-center text-[13px]">
                  M
                </div>
                <div className="w-[70px] h-[42px] border border-bordercolor flex items-center justify-center text-[13px]">
                  L
                </div>
                <div className="w-[70px] h-[42px] border border-bordercolor flex items-center justify-center text-[13px]">
                  XL
                </div>
              </div>

              <button className="w-[400px] h-[54px] bg-pri text-black text-[14px] rounded-[6px] mb-[18px]">
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

          <div className="flex gap-[64px] py-[80px] items-center">
            <div className="w-[520px] bg-soft p-[34px] rounded-[6px] border border-bordercolor ml-[10px]">
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
              className="w-[736px] h-[380px] object-cover rounded-[6px]"
            />
          </div>

          <div className="pb-[80px]">
            <div className="flex items-center justify-between w-full mb-[42px]">
              <div className="flex flex-col">
                <h2 className="text-[30px] font-semibold mb-[6px]">
                  THE COLLECTIVE VOICE
                </h2>

                <p className="text-[14px] text-sec">
                  ★★★★★ 4.9 / 5.0 (248 Reviews)
                </p>
              </div>

              <button className="border border-pri px-[160px] py-[10px] text-[12px]  w-20px">
                WRITE A REVIEW
              </button>
            </div>

            <div className="flex gap-[28px]">
              <div className="w-[380px] bg-soft p-[26px] rounded-[6px]">
                <div className="flex justify-between mb-[10px]">
                  <p className="text-[13px]">ELARA V.</p>
                  <p className="text-sec">★★★★★</p>
                </div>
                <p className="text-[11px] text-muted mb-[10px]">
                  VERIFIED COLLECTOR
                </p>
                <p className="text-[13px] text-muted leading-[20px]">
                  "The way this jacket catches the evening light is
                  otherworldly. It's more of a piece of architecture than a
                  garment."
                </p>
              </div>

              <div className="w-[380px] bg-soft p-[26px] rounded-[6px]">
                <div className="flex justify-between mb-[10px]">
                  <p className="text-[13px]">MARCUS T.</p>
                  <p className="text-sec">★★★★★</p>
                </div>
                <p className="text-[11px] text-muted mb-[10px]">
                  VERIFIED COLLECTOR
                </p>
                <p className="text-[13px] text-muted leading-[20px]">
                  "Fit is precise. The technical details are functional, not
                  just aesthetic. Surviving the Tokyo monsoon in style."
                </p>
              </div>

              <div className="w-[380px] bg-soft p-[26px] rounded-[6px]">
                <div className="flex justify-between mb-[10px]">
                  <p className="text-[13px]">JULIAN S.</p>
                  <p className="text-sec">★★★★★</p>
                </div>
                <p className="text-[11px] text-muted mb-[10px]">
                  VERIFIED COLLECTOR
                </p>
                <p className="text-[13px] text-muted leading-[20px]">
                  "Heavy, structured, yet breathable. This is the peak of the
                  Atelier's archive so far. Don't hesitate."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
