import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    max-width: 100%;
    min-height: 320px;  // Altura mínima para manter o padrão
    display: flex;
    flex-direction: column;
    justify-content: space-between;  // Mantém o texto alinhado e consistente

    &:hover {
        transform: scale(1.05);
    }

    h3 {
        font-size: 1.2rem;
        margin: 10px;
        word-wrap: break-word;
        text-align: center;  // Centraliza o título
        flex-grow: 1;        // Ocupa espaço disponível de forma equilibrada
    }

    p {
        font-size: 1rem;
        margin: 10px;
        color: #555;
        text-align: center;
        font-weight: bold;   // Destacar o preço
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: contain;    
    background-color: #white; 
`;

const Button = styled.button`
    background-color: #f0f0f0;
    border: none;
    color: #333;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0 0 8px 8px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #ddd;
    }
`;


export { Card, Image, Button };