import Footer from "./components/footer";
import Header from "./Components/headers";
import LandingPage from "./components/landingage";
import { Routes, Route } from "react-router-dom";
import ProductCatalog from "./components/productcatalog";
import ProductDescription from "./components/productdescription";
import Login from "./components/login";
export default function App() {
  return (
    <>
      <Header />
      {/* <Routes> */}

      {/* <Route path="/landingpage" element={ */}
      <LandingPage />
      {/* } /> */}
      {/* <Route path="/productdesc" element={ */}
      <ProductDescription />
      {/* } /> */}
      {/* </Routes> */}
      {/* <Route path="/productcatalog" element={ */}
      <ProductCatalog />
      {/* } /> */}
      <Login />
      <Footer />
    </>
  );
}
