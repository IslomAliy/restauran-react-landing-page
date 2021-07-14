import styled from "styled-components";

export const StyledSectionOneContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 40% 35%;
    grid-column-gap: 30px;
    margin-bottom: 30px;
    overflow: hidden;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const StyledSectionTwoContainer = styled.div`
    display: grid;
    grid-template: 300px 300px / 1fr 1fr 1fr;
    grid-gap: 30px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    img:nth-child(1) {
        grid-area: 1 / 1 / span 2 / 2 span;
    }
`;

export const StyledFeaturedItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2 {
        font-size: 24px;
        font-weight: 300;
        text-align: center; 
        margin-bottom: 26px;
    }

    img {
        display: block;
        width: 100%;
        max-width: 46px;
        height: auto;
        margin-bottom: 10px;
    }

    p {
        font-size: 9px;
        font-weight: 300;
        text-align: center;
    }

`;