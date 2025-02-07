import styled from "styled-components";

// Header fixo com responsividade
const Header = styled.header`
    background-color: #f7f5f4;
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
    backdrop-filter: blur(10px);
`;

// Título do site
const Title = styled.h1`
    font-size: 1.5em;
    margin: 0;
    color: black;
`;

// Navegação responsiva
const Nav = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px; /* Ajuste a posição do sublinhado */
            left: 0;
            background-color: #ff4757; /* Cor do sublinhado */
            transform: scaleX(0); /* Inicialmente, o sublinhado está invisível */
            transform-origin: bottom right;
            transition: transform 0.3s ease; /* Transição suave */
        }

        &:hover {
            color: #ff4757;
        }

        &:hover::after {
            transform: scaleX(1); /* Mostra o sublinhado */
            transform-origin: bottom left;
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
    color: black; /* Corrigido para preto para combinar com o tema */
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
    background-color: #f7f5f4; /* Cor de fundo combinando com o header */
    width: 200px;
    padding: 1rem;
    gap: 1rem;
    box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.3);

    a {
        color: black; /* Cor do texto para mobile */
        text-decoration: none;
        padding: 0.5rem;
        border-bottom: 1px solid #ddd; /* Cor da borda mais suave */

        &:hover {
            background-color: #ddd; /* Cor de fundo ao passar o mouse */
        }
    }
`;

export { Header, Title, Nav, Hamburger, MobileMenu,  };