import styled from "styled-components";

const CardsWrapper = styled.div `
    width: 580px;
    height: 650px;
`;

const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    background: url(images/carusel1.png);
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    position: relative;
`;

const WrapperBackground = styled.div `
    position: absolute;
    background: rgba(209, 169, 84, 0.9);
    bottom: 0;
    width: 100%;
    padding: 20px 15px;
`;

const TextWrapper = styled.div `
    text-align: center;
    padding: 21px 15px;
    border: 1px solid white;

    .wrapper-title {
        padding-bottom: 20px;
        color: white;
        font-size: 30px;
        font-weight: 400;
    }

    .wrapper-description {
        color: white;
        font-size: 14px;
        font-weight: 400;
    }
`;

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