import styled from "styled-components";

// Header fixo com responsividade
const Header = styled.header`
    background-color: #282c34;
    padding: 1rem 2rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Título do site
const Title = styled.h1`
    font-size: 1.5em;
    margin: 0;
`;

// Navegação responsiva
const Nav = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;

        &:hover {
            color: #61dafb;
        }
    }

    input {
        padding: 0.5rem;
        border-radius: 0.25rem;
        border: none;
    }

    @media (max-width: 768px) {
        display: none; // Esconde o menu em telas pequenas
    }
`;

// Botão do menu hamburguer
const Hamburger = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block; // Mostra o botão em telas pequenas
    }
`;

// Menu lateral para mobile
const MobileMenu = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #282c34;
    width: 200px;
    padding: 1rem;
    gap: 1rem;
    box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.3);

    a {
        color: white;
        text-decoration: none;
        padding: 0.5rem;
        border-bottom: 1px solid #444;

        &:hover {
            background-color: #444;
        }
    }
`;

export { Header, Title, Nav, Hamburger, MobileMenu };
