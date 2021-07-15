import styled from "styled-components";

import FeaturedCard from "../FeatureCard";


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const FeatureCard = styled(FeaturedCard)`
    width: 50%;
`;

export const DescriptionWrapper = styled.div `
    display: flex;
    justify-content: space-space-between;
    margin: 0 auto 120px;
    max-width: 920px;

`;

export const Wrapper = styled.div `
    margin-right: 125px;

    img {
        margin-bottom: 33px;
    }

    p {
        width: 350px;
        font-size: 14px;
        line-height: 18.9px;
        font-weight: 300;
        color: #616161;
        margin: 0;
    }
`;