import BigDesc from "./BigDesc";
import VideoComponent from "./VideoComponent";
import DescWrapper from "./DescWrapper";
import RightDescs from "./RightDescs";
import HeroTitle from "../../HeroTitle";

const Description = () => {
    return ( 
        <>
            <HeroTitle title="О РЕСТОРАНЕ" desc="летний дворец"/>
            <VideoComponent/>
            <DescWrapper>
                <BigDesc/>
                <RightDescs/>
            </DescWrapper>
        </>
     );
}
 
export default Description;