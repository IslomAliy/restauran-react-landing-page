import { Wrapper } from "./style";
import HeroTitle from "../HeroTitle";
import Carousel from "../Carousel";


const Instagram = () => {
    return ( 
        <>
            <Wrapper>
                <HeroTitle title="НАШ INSTAGRAM" desc="ЛЕТНИЙ ДВОРЕЦ"/>
            </Wrapper>
            <Carousel/>
        </>
     );
}
 
export default Instagram;