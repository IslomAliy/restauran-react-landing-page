import { 
    StyledWrapper,
    StyledRight 
} from "./style";


const GalleryBottom = () => {
    return ( 
        <StyledWrapper>
            <img src="images/fourth.png" alt="fourth img" />
            <StyledRight>
                <img src="images/fiveth.png" alt="fiveth" />
                <img src="images/fiveth.png" alt="fiveth" />
            </StyledRight>
        </StyledWrapper>
     );
}
 
export default GalleryBottom;