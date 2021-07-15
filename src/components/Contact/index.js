import { ContactContainer, 
        StyledContacts, 
        StyledContactsLeft, 
        StyledDatas, 
        StyledData, 
        DataWrapper, 
        StyledDataRight, 
        StyledContactsRight, 
        BigTitle as Title, 
        Description, 
        ContactsTitle, 
        ContactsInput, 
        ContactsTextArea, 
        ContactsButton} from "./style";

const Contact = () => {
    return ( 
        <>
        <ContactContainer>
            <StyledContacts>
                <StyledContactsLeft>
                    <Title>ХОТИТЕ ПРОВЕСТИ МЕРОПРИЯТИЕ?</Title>
                    <Description>Или у вас остались вопросы, на которые мы сможем вам ответить в процессе разговора - напишите нам. Мы открыты для диалога!</Description>
                    
                    <StyledDatas>
                        <StyledData>
                            <ContactsTitle>РЕСТОРАН</ContactsTitle>
                            <DataWrapper>
                                <img src="images/location.svg" alt="location" />
                                <p>Санкт-Петербургское шоссе, д 130, к. 7</p>
                            </DataWrapper>

                            <DataWrapper>
                                <img src="images/phone.svg" alt="location" />
                                <p>+7 (812) 210 67 95</p>
                            </DataWrapper>

                            <DataWrapper>
                                <img src="images/mail.svg" alt="location" />
                                <p>hello@summerpalace.ru</p>
                            </DataWrapper>
                        </StyledData>

                        <StyledDataRight>
                            <StyledData>
                                <ContactsTitle>ОФИС</ContactsTitle>
                                <DataWrapper>
                                    <img src="images/location.svg" alt="location" />
                                    <p>ст. м. «Лиговский проспект», ул. Черняховского, д. 75</p>
                                </DataWrapper>
                                <DataWrapper>
                                    <img src="images/phone.svg" alt="location" />
                                    <p>+7 (812) 210 67 95</p>
                                </DataWrapper>
                                <DataWrapper>
                                    <img src="images/mail.svg" alt="location" />
                                    <p>hello@summerpalace.ru</p>
                                </DataWrapper>
                            </StyledData>
                        </StyledDataRight>
                    </StyledDatas>
                </StyledContactsLeft>

                <StyledContactsRight>
                    <ContactsInput type="text" placeholder="Ваше имя" />
                    <ContactsInput type="text" placeholder="Ваш e-mail" />
                    <ContactsTextArea name="message" id="first" cols="30" rows="10" placeholder="Сообщение"></ContactsTextArea>
                    <ContactsButton>ОТПРАВИТЬ</ContactsButton>
                </StyledContactsRight>
            </StyledContacts>
        </ContactContainer>
        </>
     );
}
 
export default Contact;