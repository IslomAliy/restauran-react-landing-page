import styled from "styled-components";

const StyledHeader = styled.div `
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 20px;
`;

const StyledImage = styled.img`
    margin-right: 20px;
`;

const StyledTitle = styled.h3`
    margin-top: 11px;
`;

const StyledDesc = styled.p`
    color: #616161;
    font-size: 14px;
    font-weight: 300;
    line-height: 18.9px;
`;

const FeatureCard = ({ className, img, title, desc }) => {
    return ( 
        <div className={className}>
            <StyledHeader>
                <StyledImage src={img} alt="desc 1 logo" />
                <StyledTitle>{ title }</StyledTitle>
            </StyledHeader>
            <StyledDesc>{ desc }</StyledDesc>
        </div>
     );
}
 
export default FeatureCard;