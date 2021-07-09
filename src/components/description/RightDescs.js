import LittleDescWrapper from "./LittleDescWrapper";
import LittleDesc from "./LittleDesc";

const RightDescs = () => {
    return ( 
        <>
        <LittleDescWrapper>
            <LittleDesc title="площадка" desc="Сочетание классических интерьеров и современных технических возможностей выгодно отличают Летний Дворец от большинства других исторических площадок города." img="images/descr1.svg"/>
            <LittleDesc title="интерьеры" desc="Изысканное внутреннее убранство Летнего Дворца — тонко выполненная стилизация с использованием традиционных технологий и материалов — мрамора, бронзового литья." img="images/descr2.svg"/>
        </LittleDescWrapper>
        <LittleDescWrapper>
            <LittleDesc title="технологии" desc="Возможности «Летнего Дворца» практически безграничны с точки зрения проведения мероприятий самого разного формата и масштаба." img="images/descr3.svg"/>
            <LittleDesc title="оборудование" desc="Установлен комплект самого современного звукового оборудования, который приятно удивит даже знатока качественного звука." img="images/descr4.svg"/>
        </LittleDescWrapper>
        </>
     );
}
 
export default RightDescs;