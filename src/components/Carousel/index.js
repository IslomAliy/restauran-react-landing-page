import styled from "styled-components";

const Images = styled.div `
    display: flex;
    overflow: hidden;

    .image {
        margin-right: 2px;
    }

`;

const Carousel = () => {
    return ( 
        <Images>
            <img className="image" src="images/bottom.png" alt="bottom-gallery" />
            <img className="image" src="images/bottom.png" alt="bottom-gallery" />
            <img className="image" src="images/bottom.png" alt="bottom-gallery" />
            <img className="image" src="images/bottom.png" alt="bottom-gallery" />
            <img className="image" src="images/bottom.png" alt="bottom-gallery" />
            <img className="image" src="images/bottom.png" alt="bottom-gallery" />
        </Images>
        
     );
}
 
export default Carousel;