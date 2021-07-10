import styled from "styled-components";
const StyledWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(images/banner.png);
    background-repeat: no-repeat;  
    background-size: cover;
    .StyledWrapper__title {
        display: block;
        margin-bottom: 70px;
        font-size: 36px;
        color: #fff;
        font-weight: 300;
        text-align: center;
    }
`;

const StyledWrapper__content = styled.div `
    padding: 120px 0 120px 0; 
    

`;

const StyledButtonWrapper = styled.div `
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    .StyledButtonWrapper__btn1 {
        font-size: 16px;
        font-weight: 300;
        padding: 20px 58px;
        margin-right: 90px;

    }
    .StyledButtonWrapper__btn2 {
        font-size: 16px;
        font-weight: 300;
        padding: 20px 46px;
    }
`;


const Download = () => {
    return ( 
        <StyledWrapper>
            <StyledWrapper__content>
                <h2 className="StyledWrapper__title">узнайте о нас больше</h2>
                <StyledButtonWrapper>
                    <button className="StyledButtonWrapper__btn1">Скачать план</button>
                    <button className="StyledButtonWrapper__btn2">Скачать презентацию</button>
                </StyledButtonWrapper>
            </StyledWrapper__content>
        </StyledWrapper>
     );
}
 
export default Download;