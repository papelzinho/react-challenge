import React from "react";
import { Card, Image, Button } from "./ProductCard.styles";

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card>
            <Image src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Button>Adicionar ao Carrinho</Button>
        </Card>
    );
};

export default ProductCard;