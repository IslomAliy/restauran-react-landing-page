import styled from "styled-components";

const StyledWrapper = styled.div `
    margin-right: 125px;

    .descImg {
        margin-bottom: 33px;
    }

    .desc {
        width: 350px;
        font-size: 14px;
        line-height: 18.9px;
        font-weight: 300;
        color: #616161;
        margin: 0;
    }
`;

const BigDesc = () => {
    return ( 
        <StyledWrapper>
            <img className="descImg" src="images/logo_big.svg" alt="logo big" />
            <p className="desc">Добро пожаловать в Летний Дворец! Всего в 12 километрах от Петербурга, неподалеку от знаменитых фонтанов и парков Петергофа воплощен в жизнь один из самых грандиозных проектов event-индустрии России – ресторанный комплекс «Летний Дворец». Открытый в 2009 году, он объединил под одной крышей современный банкетный зал в исторических дворцовых интерьерах на 800 гостей и собственный кейтеринг.</p>
        </StyledWrapper>
     );
}
 
export default BigDesc;