import styled from "styled-components";
import AboutTitle from "../description/AboutTitle";

const StyledWrapper = styled.div `
    background-color:#F9F7F7;
    padding: 120px 0 90px 0;
;
`;

const Instagram = () => {
    return ( 
        <StyledWrapper>
            <AboutTitle title="наш instagram" desc="летний дворец"/>
        </StyledWrapper>
     );
}
 
export default Instagram;