import styled from "styled-components";

const StyledWrapper = styled.div `
    max-width: 255px;
    margin-right: 30px;
`;

const StyledHeading = styled.div `
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 20px;
    
    .StyledHeading__img {
        margin-right: 20px;
    }

    .StyledHeading__desc {
        margin-top: 11px;
    }
`;

const StyledDesc = styled.p `
    color: #616161;
    font-size: 14px;
    font-weight: 300;
    line-height: 18.9px;
`;

const LittleDesc = (props) => {
    return ( 
        <StyledWrapper>
            <StyledHeading>
                <img className="StyledHeading__img" src={props.img} alt="desc 1 logo" />
                <p className="StyledHeading__desc"> {props.title}</p>
            </StyledHeading>
            <StyledDesc> {props.desc}</StyledDesc>
        </StyledWrapper>
     );
}
 
export default LittleDesc;