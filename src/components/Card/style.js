import styled from 'styled-components';

export const CardsWrapper = styled.div `
    width: 580px;
    height: 650px;
`;

export const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    background: url(images/carusel1.png);
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    position: relative;
`;

export const WrapperBackground = styled.div `
    position: absolute;
    background: rgba(209, 169, 84, 0.9);
    bottom: 0;
    width: 100%;
    padding: 20px 15px;
`;

export const TextWrapper = styled.div `
    text-align: center;
    padding: 21px 15px;
    border: 1px solid white;

    h2{
        padding-bottom: 20px;
        color: white;
        font-size: 30px;
        font-weight: 400;
    }

    p{
        color: white;
        font-size: 14px;
        font-weight: 400;
    }
`;