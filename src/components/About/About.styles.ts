import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    min-width: 0;
    overflow: hidden; /* Esconde o overflow inicialmente */
`;

export const Section = styled.section`
    margin: 40px 0;
    padding: 0 20px;
    margin-top: 120px;

    h2 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 30px;
        text-align: center;
        position: relative;
        padding-bottom: 10px;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: #ff4757;
        }
    }
`;