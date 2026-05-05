import Footer from "./components/footer";
import Header from "./components/headers";
import LandingPage from "./components/landingpage";
import { Routes, Route } from "react-router-dom";
import ProductCatalog from "./components/productcatalog";
import ProductDescription from "./components/productdescription";
import Login from "./components/login";
import { AuthProvider } from "./Context/authcontext";
import Cart from "./components/cart";
import { ProtectedRoute, PublicRoute } from "./Route/routeguard";
// import Register from "./components/register";
export default function App() {
  return (
    
      <>
    <AuthProvider>
      <Header />
      <Routes>

      <Route path="/" element={
      <LandingPage/>
      } />
      <Route path="/productdescription" element={
        <ProtectedRoute> 
      <ProductDescription /> </ProtectedRoute>
      } />
      <Route path="/productcatalog" element={
        <ProtectedRoute> 
        <ProductCatalog />
        </ProtectedRoute>
        }/>
       <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={ <PublicRoute>  <Login /> </PublicRoute> } />
          {/* <Route path="/register" element={ <PublicRoute> <Register /> </PublicRoute>} /> */}

        </Routes>
        <Footer />

          </AuthProvider>
    </>
  );
}
