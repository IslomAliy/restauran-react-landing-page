import Container from '../Container';

import { 
    StyledSectionOneContainer,
    StyledSectionTwoContainer,
    StyledFeaturedItem
} from "./style";


const Gallery = () => {
    return ( 
        <Container>
            <StyledSectionOneContainer>
                <StyledFeaturedItem>
                    <h2>ГАЛЕРЕЯ</h2>
                    <img src="images/descr.svg" alt="logo" />
                    <p>летний дворец</p>
                </StyledFeaturedItem>
                <img src="images/first.png" alt="first gallery" />
                <img src="images/second.png" alt="second gallery" />
            </StyledSectionOneContainer>
            <StyledSectionTwoContainer>
                <img src="images/fourth.png" alt="fourth img" />
                <img src="images/fiveth.png" alt="fiveth" />
                <img src="images/fiveth.png" alt="fiveth" />
            </StyledSectionTwoContainer>
        </Container>
     );
}
 
export default Gallery;