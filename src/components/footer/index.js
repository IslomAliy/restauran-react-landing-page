import styled from "styled-components";

const StyledFooterWrapper = styled.div `
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 40px 37px;
`;

const Footer = () => {
    return ( 
        <StyledFooterWrapper>
         <p>Copyright (с) 2019 Ресторан “Летний дворец”</p>
         <p>Facebook — 	Vkontakte — 	Instagram</p>
        </StyledFooterWrapper>
     );
}
 
export default Footer;