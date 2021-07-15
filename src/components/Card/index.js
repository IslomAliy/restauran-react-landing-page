import {CardsWrapper, Wrapper, WrapperBackground, TextWrapper } from "./style";

const Card = (props) => {
    return (
        <>
            <CardsWrapper>
                <Wrapper>
                    <WrapperBackground>
                        <TextWrapper>
                            <h2 className="wrapper-title"> {props.title} </h2>
                            <p className="wrapper-description"> {props.desc} </p>
                        </TextWrapper>
                    </WrapperBackground>
                </Wrapper>
            </CardsWrapper>
        </>
    );
}

export default Card;