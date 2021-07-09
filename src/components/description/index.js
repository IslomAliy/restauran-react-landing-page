import BigDesc from "./BigDesc";
import VideoComponent from "./VideoComponent";
import AboutTitle from "./AboutTitle";
import DescWrapper from "./DescWrapper";
import RightDescs from "./RightDescs";

const Description = () => {
    return ( 
        <>
            <AboutTitle title="О РЕСТОРАНЕ" desc="летний дворец"/>
            <VideoComponent/>
            <DescWrapper>
                <BigDesc/>
                <RightDescs/>
            </DescWrapper>
        </>
     );
}
 
export default Description;