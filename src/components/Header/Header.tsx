import React, { useState } from "react";
import { Header, Title, Nav, Hamburger, MobileMenu } from "./Header.styles";

interface HeaderProps{
    cartItemCount: number;
}

const HeaderComponent: React.FC<HeaderProps> = ({ cartItemCount }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Header>
            <Title>Eccomerce Jfdeev</Title>
            <Nav>
                <a href="#">Início</a>
                <a href="#">Produtos</a>
                <a href="#">Contato</a>
                <a href="/cart">Carrinho ({cartItemCount})</a>
                <input type="text" placeholder="Buscar..." />
            </Nav>

            <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </Hamburger>

            <MobileMenu isOpen={menuOpen}>
                <a href="#">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Contato</a>
                <a href="/cart">Carrinho ({cartItemCount})</a>
                <input type="text" placeholder="Buscar..." />
            </MobileMenu>
            
        </Header>
    );
};

export default HeaderComponent;
