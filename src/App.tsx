import Home from "./Pages/Home/Home";
import HeaderComponent from "./components/Header/Header";
<<<<<<< HEAD
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
=======



const App = () => {
    return <>
        <HeaderComponent />
        <Home />
>>>>>>> 250cae56ebf1ea01d9666559b0c4e932c3946a23
    </>;
};

export default App;