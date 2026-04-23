import Footer from "./components/footer";
import Header from "./Components/headers";
import LandingPage from "./components/landingage";
import { Routes, Route } from "react-router-dom";
import ProductCatalog from "./components/productcatalog";
import ProductDescription from "./components/productdescription";
import Login from "./components/login";
import { AuthProvider } from "./Context/authcontext";
import { ProtectedRoute, PublicRoute } from "./Route/routeguard";
export default function App() {
  return (
    <>
    <AuthProvider>

      <Header />
      <Routes>

      <Route path="/" element={
      <LandingPage />
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
      <Route path="/login" element={ <PublicRoute>  <Login /> </PublicRoute> } />
        </Routes>
        <Footer />
          </AuthProvider>
    </>
  );
}
