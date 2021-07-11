import styled from "styled-components";
import AboutTitle from "../description/AboutTitle";
import BottomGallery from "./BottomGallery";

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
            <AboutTitle title="НАШ INSTAGRAM" desc="ЛЕТНИЙ ДВОРЕЦ"/>
        </StyledWrapper>
        <BottomGallery/>
        </>
     );
}
 
export default Instagram;