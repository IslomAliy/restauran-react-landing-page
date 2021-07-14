import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 0 auto 150px;
    & > img {
        width: 635px;
        height: 630px;
        margin-right: 30px;
    }
`;

export const StyledRight = styled.div`

    img::first-child {
        display: block;
        margin-bottom: 30px
    }
`;

// const StyledWrapper = styled.div `
//     display: flex;
//     /* justify-content: space-between; */
//     max-width: 1100px;
//     margin: 0 auto 30px;

//     .StyledWrapper__secondImage {
//         margin-right: 30px;
//     }
// `;

export const StyledTitle = styled.div `
    margin: 101px;
    
    .StyledTitle__title {
        font-size: 24px;
        font-weight: 300;
        text-align: center; 
        margin-bottom: 26px;
    }

    .StyledTitle__img {
        display: block;
        margin: 0 auto 10px auto;
        width: 50%;
    }

    .StyledTitle__desc {
        font-size: 9px;
        font-weight: 300;
        text-align: center;
    }

`;