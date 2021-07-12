import styled from  'styled-components';

const StyledImg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;
`;

const SliderControls = () => {
    return ( 
        <StyledImg>
            <img src="images/slider-controls.svg" alt="slider controls" />
        </StyledImg>
     );
}
 
export default SliderControls;