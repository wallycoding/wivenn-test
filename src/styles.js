import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #181818;
    width: 100%;
    height: 100vh;
    @media(max-width: 745px) {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
    }
`;

const animationHeader = keyframes`
    0% {
        opacity: 0;
        margin-left: -100%;
    }
    100% {
        opacity: 1;
        margin-left: 0;
    }
`;

export const Header = styled.header`
    display: flex;
    flex: 1;
    background-image: linear-gradient(20deg, #F44A4A 30%, #F44A7D 90%);
    justify-content: center;
    align-items: center;
    border-radius: 0 10rem 0 0;
    flex-direction: column;
    animation: ${animationHeader} 0.4s linear;
    @media(max-width: 745px) {
        border-radius: 0;
        flex: auto;
        height: 100vh;
    }
`;

export const Paragraph = styled.p`
    width: 80%;
    font-family: 'Roboto', sans-serif;
    font-style: oblique;
    font-size: 2rem;
    color: #fff;
    margin-bottom: -20px;
    font-weight: 500;
`;

export const Image = styled.img`
    display: flex;
    opacity: 0.9;
    width: 90%;
`;

export const Form = styled.form`
    display: flex;
    width: 90%;
    max-width: 500px;
    border-radius: 0.5rem;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(20deg, #F44A4A 30%, #F44A7D 90%);
`;

export const Content = styled.section`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    @media(max-width: 745px) {
        border-radius: 0;
        flex: auto;
        height: 100vh;
    }
`;

export const MessageStatus = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: oblique;
    font-size: 0.9rem;
    color: ${props => props.color};
    margin-bottom: -20px;
    font-weight: 500;
    margin: 0 10px;
    margin-bottom: 5px;
`;

export const Button = styled.button`
    display: flex;
    border: none;
    outline: none;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    background-image: linear-gradient(20deg, #F44A4A 30%, #F44A7D 90%);
    border-radius: 10rem;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    transition: 3s;
    &:hover {
        background-position: right;
    }
`;