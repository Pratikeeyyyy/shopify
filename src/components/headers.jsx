export default function Header() {
  return (
    <>
      <div className=" px-[32px] py-[16px] flex  justify-between bg-slate-900 font-sans flex-nowrap w-[1265px] ">
        <h1 className="text-[18px] font-semibold tracking-wide ">
          <span className="text-pri">ShopiFy</span>
        </h1>

        <nav className="flex gap-[32px] text-[14px] ">
          <a className="text-white">Collections</a>
          <a className="text-pri">New Arrivals</a>
          <a className="text-white">Archive</a>
        </nav>

        <div className="flex items-center gap-[16px] ">
          <input
            type="text"
            placeholder="Search Collection"
            className="bg-slate-600 text-[14px] px-[16px] py-[8px] rounded-[6px] outline-none"
          />

          <div className="flex gap-[12px] text-[18px] ">
            <span>🛒</span>
            <span>👤</span>
          </div>
        </div>
      </div>
    </>
  );
}
