import styled from "styled-components";

export const Box = styled.button`

    border: none;
    outline: none;
    cursor: pointer;

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
        margin-right: 4px;    
    }

`;

export const Text = styled.span`
    display: flex;
    width: 100%;
    color: #757575;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
`;