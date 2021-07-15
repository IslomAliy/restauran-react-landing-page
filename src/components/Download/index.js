import { Wrapper, 
        Content, 
        StyledButtonWrapper, 
        Title,
        ButtonOne,
        ButtonTwo } from "./style";
const Download = () => {
    return ( 
        <Wrapper>
            <Content>
                <Title>УЗНАЙТЕ О НАС БОЛЬШЕ</Title>
                <StyledButtonWrapper>
                    <ButtonOne>СКАЧАТЬ ПЛАН</ButtonOne>
                    <ButtonTwo>СКАЧАТЬ ПРЕЗЕНТАЦИЮ</ButtonTwo>
                </StyledButtonWrapper>
            </Content>
        </Wrapper>
     );
}
 
export default Download;