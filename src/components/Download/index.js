import styled from "styled-components";
const StyledWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(images/banner.png);
    background-repeat: no-repeat;  
    background-size: cover;
    margin-bottom: 120px;
    .StyledWrapper__title {
        display: block;
        margin-bottom: 70px;
        font-size: 36px;
        color: #fff;
        font-weight: 300;
        text-align: center;
        text-shadow: 2px 3px 8px rgba(0,0,0,0.9);
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
        background-color: #fff;
        border: none;
    }

    .StyledButtonWrapper__btn2 {
        font-size: 16px;
        font-weight: 300;
        padding: 20px 46px;
        background-color: #fff;
        border: none;
    }
`;


const Download = () => {
    return ( 
        <StyledWrapper>
            <StyledWrapper__content>
                <h2 className="StyledWrapper__title">УЗНАЙТЕ О НАС БОЛЬШЕ</h2>
                <StyledButtonWrapper>
                    <button className="StyledButtonWrapper__btn1">СКАЧАТЬ ПЛАН</button>
                    <button className="StyledButtonWrapper__btn2">СКАЧАТЬ ПРЕЗЕНТАЦИЮ</button>
                </StyledButtonWrapper>
            </StyledWrapper__content>
        </StyledWrapper>
     );
}
 
export default Download;