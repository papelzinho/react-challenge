import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    min-width: 0;
    margin-top: 100px;

`;

export { Container };