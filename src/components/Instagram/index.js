import styled from "styled-components";
import HeroTitle from "../../HeroTitle";
import Carousel from "../Carousel";

const StyledWrapper = styled.div `
    background-color:#F9F7F7;
    padding: 120px 0 90px 0;
    height: 400px;
;
`;

const Instagram = () => {
    return ( 
        <>
            <StyledWrapper>
                <HeroTitle title="НАШ INSTAGRAM" desc="ЛЕТНИЙ ДВОРЕЦ"/>
            </StyledWrapper>
            <Carousel/>
        </>
     );
}
 
export default Instagram;