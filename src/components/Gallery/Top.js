import styled from "styled-components";


const StyledWrapper = styled.div `
    display: flex;
    /* justify-content: space-between; */
    max-width: 1100px;
    margin: 0 auto 30px;

    .StyledWrapper__secondImage {
        margin-right: 30px;
    }
`;

const StyledTitle = styled.div `
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


const GalleryTop = () => {
    return ( 
        <StyledWrapper>
            <StyledTitle>
                <h2 className="StyledTitle__title">ГАЛЕРЕЯ</h2>
                <img className="StyledTitle__img" src="images/descr.svg" alt="logo" />
                <p className="StyledTitle__desc">летний дворец</p>
            </StyledTitle>
            <img className="StyledWrapper__secondImage" src="images/first.png" alt="first gallery" />
            <img src="images/second.png" alt="second gallery" />
        </StyledWrapper>
     );
}
 
export default GalleryTop;