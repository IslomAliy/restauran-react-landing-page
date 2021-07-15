import VideoComponent from "../Video/VideoComponent";
import HeroTitle from "../../HeroTitle";
import { Wrapper, DescriptionWrapper, Container, FeatureCard} from "./style";

const Description = () => {
    return ( 
        <>
            <HeroTitle title="О РЕСТОРАНЕ" desc="летний дворец"/>
            <VideoComponent/>
            <DescriptionWrapper>
                <Wrapper>
                    <img src="images/logo_big.svg" alt="logo big" />
                    <p>Добро пожаловать в Летний Дворец! Всего в 12 километрах от Петербурга, неподалеку от знаменитых фонтанов и парков Петергофа воплощен в жизнь один из самых грандиозных проектов event-индустрии России – ресторанный комплекс «Летний Дворец». Открытый в 2009 году, он объединил под одной крышей современный банкетный зал в исторических дворцовых интерьерах на 800 гостей и собственный кейтеринг.</p>
                </Wrapper>
                <Container>
                    <FeatureCard title="площадка" desc="Сочетание классических интерьеров и современных технических возможностей выгодно отличают Летний Дворец от большинства других исторических площадок города." img="images/descr1.svg"/>
                    <FeatureCard title="интерьеры" desc="Изысканное внутреннее убранство Летнего Дворца — тонко выполненная стилизация с использованием традиционных технологий и материалов — мрамора, бронзового литья." img="images/descr2.svg"/>
                    <FeatureCard title="технологии" desc="Возможности «Летнего Дворца» практически безграничны с точки зрения проведения мероприятий самого разного формата и масштаба." img="images/descr3.svg"/>
                    <FeatureCard title="оборудование" desc="Установлен комплект самого современного звукового оборудования, который приятно удивит даже знатока качественного звука." img="images/descr4.svg"/>
                </Container>
            </DescriptionWrapper>
        </>
     );
}
 
export default Description;