export default function Footer() {
  return (
    <div className="bg-dark text-gray-400 px-[32px] py-[40px] mt-[40px] w-[1265px]">
      <div className="flex justify-between items-center mx-auto whitespace-nowrap">
        <h1 className="text-pri text-[16px]">THE ATELIER</h1>

        <h1 className="text-[14px]">© 2024 ALL RIGHTS RESERVED</h1>

        <div className="flex gap-[24px] text-[14px]">
          <a href="#">Sustainability</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
          <a href="#">Shipping</a>
        </div>

        <div className="flex gap-[16px] text-[18px]">
          <span>🌐</span>
          <span>📸</span>
        </div>
      </div>
    </div>
  );
}
