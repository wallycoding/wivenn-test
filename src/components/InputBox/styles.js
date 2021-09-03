import styled from "styled-components";

export const Box = styled.div`
    position: relative;
    display: flex;
    background-color: #121212;
    border: solid 1px #101010;
    padding: 13px 10px;
    margin: 5px 0;
    border-radius: 2rem 3rem;
    ${props => props.hasError ? 'border: solid 2px #F44A4A;' : ''}

    & svg {
        color: #fff;   
        font-size: 1.2rem;
        margin-right: 2px;    
    }

`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
`;