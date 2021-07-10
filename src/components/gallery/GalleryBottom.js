import styled from "styled-components";
const StyledWrapper = styled.div `
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    .StyledWrapper__img {
        width: 635px;
        height: 630px;
        margin-right: 30px;
    }
`;

const StyledRight = styled.div `

    .StyledRight__img {
        display: block;
        margin-bottom: 30px
    }
`;


const GalleryBottom = () => {
    return ( 
        <StyledWrapper>
            <img className="StyledWrapper__img" src="images/fourth.png" alt="fourth img" />
            <StyledRight>
                <img className="StyledRight__img" src="images/fiveth.png" alt="fiveth" />
                <img src="images/fiveth.png" alt="fiveth" />
            </StyledRight>
        </StyledWrapper>
     );
}
 
export default GalleryBottom;