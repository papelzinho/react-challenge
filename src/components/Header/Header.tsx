import React, { useState } from "react";
import { Header, Title, Nav, Hamburger, MobileMenu } from "./Header.styles";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Header>
            <Title>Eccomerce Jfdeev</Title>
            <Nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="/cart"><span className="material-symbols-outlined">
                                    shopping_cart
                                </span></a>
                <input type="text" placeholder="Buscar..." />
            </Nav>

            <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </Hamburger>

            <MobileMenu isOpen={menuOpen}>
                <a href="#">Início</a>
                <a href="#produtos">Produtos</a>
                <a href="#">Contato</a>
                <Link to={"/carrinho"}>
                    <a><span className="material-symbols-outlined">
                            shopping_cart
                        </span></a>
                </Link>
                <a href="#">Home</a>
                <a href="#products">Products</a>
                <a href="#">About</a>
                <a href="/cart"><span className="material-symbols-outlined">
                                    shopping_cart
                                </span></a>
                <input type="text" placeholder="Buscar..." />
            </MobileMenu>
            
        </Header>
    );
};

export default HeaderComponent;
