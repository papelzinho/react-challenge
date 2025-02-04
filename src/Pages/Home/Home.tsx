import { useEffect, useState } from "react";
import { fetchProducts } from "../../Services/Api";
import { Container } from "./Home.styles";
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
    const [products, setProducts] = useState<{ id: number; [key: string]: any }[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <Container>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Container>
    )
}

export default Home;