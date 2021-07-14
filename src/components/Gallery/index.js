import { 
    StyledWrapper,
    StyledRight,
    StyledTitle
} from "./style";


const Gallery = () => {
    return ( 
        <>
            <StyledWrapper>
                <StyledTitle>
                    <h2 className="StyledTitle__title">ГАЛЕРЕЯ</h2>
                    <img className="StyledTitle__img" src="images/descr.svg" alt="logo" />
                    <p className="StyledTitle__desc">летний дворец</p>
                </StyledTitle>
                <img className="StyledWrapper__secondImage" src="images/first.png" alt="first gallery" />
                <img src="images/second.png" alt="second gallery" />
            </StyledWrapper>
            <StyledWrapper>
                <img src="images/fourth.png" alt="fourth img" />
                <StyledRight>
                    <img src="images/fiveth.png" alt="fiveth" />
                    <img src="images/fiveth.png" alt="fiveth" />
                </StyledRight>
            </StyledWrapper>
        </>
     );
}
 
export default Gallery;