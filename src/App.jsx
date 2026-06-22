import { products } from "./products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
