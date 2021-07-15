import { Header, 
        Image, 
        Title, 
        Desc } from "./style";

const FeatureCard = ({ className, img, title, desc }) => {
    return ( 
        <div className={className}>
            <Header>
                <Image src={img} alt="desc one logo" />
                <Title>{ title }</Title>
            </Header>
            <Desc>{ desc }</Desc>
        </div>
     );
}
 
export default FeatureCard;