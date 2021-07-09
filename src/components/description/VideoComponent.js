import styled from 'styled-components';

const StyledWrapper = styled.div `
    .video {
        display: block;
        margin: 0 auto 90px;
    }
`;

const VideoComponent = () => {
    return ( 
        <StyledWrapper>
            <img class="video" src="images/video.png" alt="video" />
        </StyledWrapper>
     );
}
 
export default VideoComponent;