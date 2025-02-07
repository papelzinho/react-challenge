import React, { useState } from "react";
import { Header, Title, Nav, Hamburger, MobileMenu } from "./Header.styles";

const HeaderComponent: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Header>
            <Title>Eccomerce Jfdeev</Title>
            <Nav>
                <a href="#">Início</a>
                <a href="#">Produtos</a>
                <a href="#">Contato</a>
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
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                <a href="/cart"></a>
                <input type="text" placeholder="Buscar..." />
            </MobileMenu>
            
        </Header>
    );
};

export default HeaderComponent;
