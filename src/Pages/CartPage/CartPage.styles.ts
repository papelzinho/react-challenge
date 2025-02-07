import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    padding: 20px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    margin-bottom: 16px;
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;

    img{
        width: 100px;
        margin-right: 16px;
    }

    button{
        margin-left: auto;
        padding: 8px 16px;
        background-color:rgb(216, 214, 213);
        max-height: 2,5rem;
        align-self: center;
    }
    
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    p{
        margin: 0;
        font-size: 18px;
        font-weight: 600;
    }
`;




