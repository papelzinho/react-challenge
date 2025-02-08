import React, { useState } from "react";
import { Header, Title, Nav, Hamburger, MobileMenu } from "./Header.styles";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Header>
            <Title>Eccomerce Jfdeev</Title>
            <Nav>
                <Link to={"/"}>Home</Link>
                <a href="#products">Products</a>
                <a href="#about">About</a>
                
                <Link to={"/carrinho"}>
                    <a><span className="material-symbols-outlined">
                            shopping_cart
                        </span></a>
                </Link>
                <input type="text" placeholder="Buscar..." />
            </Nav>

            <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </Hamburger>

            <MobileMenu isOpen={menuOpen}>
                
            <Link to={"/"}>Home</Link>
                <a href="#products">Products</a>
                <a href="#about">About</a>
                
                <Link to={"/carrinho"}>
                    <a><span className="material-symbols-outlined">
                            shopping_cart
                        </span></a>
                </Link>
                <input type="text" placeholder="Buscar..." />
            </MobileMenu>
            
        </Header>
    );
};

export default HeaderComponent;
