import {HeroTitleWrapper, Title, Image, TinyDescription} from "./style";

const HeroTitle = (props) => {
    return (  
        <HeroTitleWrapper>
            <Title className="AboutTitle"> {props.title}</Title>
            <Image className="AboutImage" src="images/descr.svg" alt="description logo" />
            <TinyDescription className="AboutDesc"> {props.desc} </TinyDescription>
        </HeroTitleWrapper>
    );
}
 
export default HeroTitle;