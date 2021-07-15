import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(images/banner.png);
    background-repeat: no-repeat;  
    background-size: cover;
    margin-bottom: 120px;
`;

export const Title = styled.h2`
    display: block;
    margin-bottom: 70px;
    font-size: 36px;
    color: #fff;
    font-weight: 300;
    text-align: center;
    text-shadow: 2px 3px 8px rgba(0,0,0,0.9);
`;

export const Content = styled.div`
    padding: 120px 0 120px 0; 
`;

export const StyledButtonWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

export const ButtonOne = styled.button`
    font-size: 16px;
    font-weight: 300;
    padding: 20px 58px;
    margin-right: 90px;
    background-color: #fff;
    border: none;
`;

export const ButtonTwo = styled.button`
    font-size: 16px;
    font-weight: 300;
    padding: 20px 46px;
    background-color: #fff;
    border: none;
`;
