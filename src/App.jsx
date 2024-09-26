import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import NotFound from "./pages/notfound/NotFound";
import Detail from "./pages/detail/Detail";
import Cart from "./pages/cart/Cart";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="product/:proId" element={<Detail />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
