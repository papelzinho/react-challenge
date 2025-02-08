// Home.tsx
import { useEffect, useState } from "react";
import { fetchProducts } from "../../Services/Api";
import { Container, Section, ShowAllButton } from "./Home.styles";
import ProductCard from '../../components/ProductCard/ProductCard';
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const [products, setProducts] = useState<{ id: number; title: string; price: number; image: string }[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    const visibleProducts = showAll ? products : products.slice(0, 4);

    return (
      <>
        <Section id="products">
          <h2>Todos os Itens</h2>
          <Container>
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Container>
          {!showAll && products.length > visibleProducts.length && (
            <ShowAllButton onClick={() => setShowAll(true)}>
              Ver tudo
            </ShowAllButton>
          )}
          {showAll && (
            <ShowAllButton onClick={() => setShowAll(false)}>
              Ver menos
            </ShowAllButton>
          )}
        </Section>

        <Section>
          <h2>Em promoção</h2>
          <Container>
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Container>
        </Section>

        <Section>
          <h2>Mais vendidos</h2>
          <Container>
            {products.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Container>
        </Section>

        <About />

        <Footer />
      </>
    );
};

export default Home;