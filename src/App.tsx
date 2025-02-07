import Home from "./Pages/Home/Home";
import HeaderComponent from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartPage from "./Pages/CartPage/CartPage";

const App = () => {
    return <>
        <CartProvider>
            <Router>
            <HeaderComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrinho" element={<CartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    </>;
};

export default App;