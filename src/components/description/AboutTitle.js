import styled from 'styled-components';

const StyledAboutWrapper = styled.div `
    display: block;
    align-items: center;
    max-width: 920px;
    margin: 0 auto;    
`;

const StyledAligner = styled.div `
    
    .AboutTitle {
        text-align: center;
        margin-bottom: 25px;
    }
    .AboutImage {
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;   
    }
    .AboutDesc {
        text-align: center;
        margin-bottom: 60px;
    }

`;


const AboutTitle = (props) => {
    return (  
        <StyledAboutWrapper>
            <StyledAligner>
                <h2 className="AboutTitle"> {props.title}</h2>
                <img className="AboutImage" src="images/descr.svg" alt="description logo" />
                <p className="AboutDesc"> {props.desc} </p>
            </StyledAligner>
        </StyledAboutWrapper>
    );
}
 
export default AboutTitle;