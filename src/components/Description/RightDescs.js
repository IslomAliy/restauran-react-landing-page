import styled from "styled-components";

import FeatureCard from "../FeatureCard";


const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledFeatureCard = styled(FeatureCard)`
    width: 50%;
`;

const RightDescs = () => {
    return ( 
        <StyledContainer>
            <StyledFeatureCard title="площадка" desc="Сочетание классических интерьеров и современных технических возможностей выгодно отличают Летний Дворец от большинства других исторических площадок города." img="images/descr1.svg"/>
            <StyledFeatureCard title="интерьеры" desc="Изысканное внутреннее убранство Летнего Дворца — тонко выполненная стилизация с использованием традиционных технологий и материалов — мрамора, бронзового литья." img="images/descr2.svg"/>
            <StyledFeatureCard title="технологии" desc="Возможности «Летнего Дворца» практически безграничны с точки зрения проведения мероприятий самого разного формата и масштаба." img="images/descr3.svg"/>
            <StyledFeatureCard title="оборудование" desc="Установлен комплект самого современного звукового оборудования, который приятно удивит даже знатока качественного звука." img="images/descr4.svg"/>
        </StyledContainer>
     );
}
 
export default RightDescs;