// Home.styles.ts
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

export const ShowAllButton = styled.button`
    display: block;
    margin: 20px auto;
    padding: 10px 30px;
    background-color: #ff4757;
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e84118;
    }
`;

export const CategoriesTab = styled.div`
    position: relative;
    margin: 50px 0;
    padding: 0 20px;

    .tab-content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: #eee;
            z-index: -1;
        }

        span {
            display: inline-block;
            background: #fff;
            padding: 10px 30px;
            border-radius: 30px;
            border: 2px solid #ff4757;
            color: #ff4757;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: #ff4757;
                color: #fff;
            }
        }
    }
`;