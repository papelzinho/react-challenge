import React, { useContext } from "react";
import { Card, Image, Button } from "./ProductCard.styles";
import { CartContext } from "../../context/CartContext";

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
}



const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    const cartContext = useContext(CartContext);

    if(!cartContext){
        return null;
    };

    const { addToCart } = cartContext;

    const {id, title, price, image} = product;

    return (
        <Card>
            <Image src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Button onClick={() => addToCart({id, title, price, image})}>Adicionar ao Carrinho</Button>
        </Card>
    );
};

export default ProductCard;