import React from "react";
import { Card, Image } from "./ProductCard.styles";

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
        </Card>
    );
};

export default ProductCard;