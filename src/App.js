import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList/Index";
import Product from "./pages/Product/Index";
import Register from "./pages/Register/Index";
import Login from "./pages/Login/Index";
import Cart from "./pages/Cart/Index";
function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
