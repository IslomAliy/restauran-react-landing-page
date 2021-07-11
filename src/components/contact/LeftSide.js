import styled from "styled-components";
import DataWrapper from "./DataWrapper";

const StyledWrapper = styled.div `
    max-width: 1100px;
    margin: 0 auto 120px;
`;

const StyledContacts = styled.div `
    display: flex;
    align-items: baseline;
    max-width: 529px;
`;

const StyledContactsLeft = styled.div `
    max-width: 529px;
    margin-right: 30px;

    .StyledContactsLeft__BigTitle {
        font-size: 36px;
        font-weight: 300;
        line-height: 52.2px;
        margin-bottom: 40px;
    }

    .StyledContactsLeft__description {
        font-size: 14px;
        font-weight: 300;
        line-height: 18.9px;
        margin-bottom: 60px;
    }
`;

const StyledContactsRight = styled.div `

    .StyledContactsRight__input {
        width: 540px;
        height: 40px;
        margin-bottom: 25px;
        border: none;
        border-bottom: 0.5px solid #D0D0D0;
        font-size: 14px;
    }

    .StyledContactsRight__textarea {
        /* width: 540px;
        height: 196px; */
        border: 0.5px solid #D0D0D0;
        padding: 15px 434px 40px 20px;
        font-size: 14px;
        margin-bottom: 35px;
    }

    .StyledContactsRight__button {
        padding: 12px 35px;
        background-color: #D1A954;
        border: none;
        color: #fff;
        font-size: 16px;
    }


`;

const StyledDatas = styled.div `
    display: flex ;
`;

const StyledDataLeft = styled.div `
    margin-right: 30px;

    .StyledContactsLeft__SmallTitle {
        margin-bottom: 30px;
    }

`;




const StyledDataRight = styled.div `

    .StyledContactsRight__SmallTitle {
        margin-bottom: 30px;
    }


`;

const LeftSide = () => {
    return (   
        <StyledWrapper>
            <StyledContacts>
                <StyledContactsLeft>
                    <h2 className="StyledContactsLeft__BigTitle">хотите провести мероприятие?</h2>
                    <p className="StyledContactsLeft__description">Или у вас остались вопросы, на которые мы сможем вам ответить в процессе разговора - напишите нам. Мы открыты для диалога!</p>
                    
                    <StyledDatas>
                        <StyledDataLeft>
                            <h3 className="StyledContactsLeft__SmallTitle">ресторан</h3>
                            
                            <DataWrapper>
                                <img className="DataWrapper__img" src="images/location.svg" alt="location" />
                                <p className="DataWrapper__desc">Санкт-Петербургское шоссе, д 130, к. 7</p>
                            </DataWrapper>

                            <DataWrapper>
                                <img className="DataWrapper__img" src="images/phone.svg" alt="location" />
                                <p className="DataWrapper__desc">+7 (812) 210 67 95</p>
                            </DataWrapper>

                            <DataWrapper>
                                <img className="DataWrapper__img" src="images/mail.svg" alt="location" />
                                <p className="DataWrapper__desc">hello@summerpalace.ru</p>
                            </DataWrapper>
                        </StyledDataLeft>

                        <StyledDataRight>
                            <h3 className="StyledContactsRight__SmallTitle">офис</h3>

                            <DataWrapper>
                                <img className="DataWrapper__img" src="images/location.svg" alt="location" />
                                <p className="DataWrapper__desc">Санкт-Петербургское шоссе, д 130, к. 7</p>
                            </DataWrapper>

                            <DataWrapper>
                                <img className="DataWrapper__img" src="images/phone.svg" alt="location" />
                                <p className="DataWrapper__desc">+7 (812) 210 67 95</p>
                            </DataWrapper>

                            <DataWrapper>
                                <img className="DataWrapper__img" src="images/mail.svg" alt="location" />
                                <p className="DataWrapper__desc">hello@summerpalace.ru</p>
                            </DataWrapper>

                        </StyledDataRight>
                    </StyledDatas>
                </StyledContactsLeft>
                <StyledContactsRight>
                    <input type="text" placeholder="Ваше имя" className="StyledContactsRight__input"/>
                    <input type="text" placeholder="Ваш e-mail" className="StyledContactsRight__input"/>

                    <textarea name="message" id="first" cols="30" rows="10" className="StyledContactsRight__textarea" placeholder="Сообщение"></textarea>
                    <button className="StyledContactsRight__button">отправить</button>
                </StyledContactsRight>
            </StyledContacts>
        </StyledWrapper>
     );
}
 
export default LeftSide;