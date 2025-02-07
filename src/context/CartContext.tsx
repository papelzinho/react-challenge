import React, {createContext, useState, useEffect, ReactNode} from "react";

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        if (cart.find((item) => item.id === product.id)) {
            return;
        }
        setCart([...cart, product]);
    };

    const removeFromCart = (productId: number) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};