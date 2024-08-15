// Filename - ./components/Home.js
import styled from "styled-components";

export const CardCarousel = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  filter: blur(0px);
  z-index: 2;
`;
export const VideoContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const VideoBackground = styled.video`
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Places the video behind other content */
`;
export const Video = styled.source`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire screen */
  z-index: -1; /* Places the video behind other content */
`;
export const CenterText = styled.text`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
  font-size: 24px;
  @media screen and (max-width: 768px) {
  }
`;
export const Heading = styled.h1`
  margin: 0;
  padding: 0 1rem;
  font-weight: lighter;
  font-size: 2.5em;
  color: white;
`;
export const Paragraph = styled.p`
  width: 40%;
  padding: 1rem;
  font-weight: lighter;
  line-height: 1.5;
  font-size: 0.7em;
  color: white;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    width: 100%;
    font-size: 1em;
    line-height: 2;
  }
`;
export const Button = styled.button`
  margin-right: auto;
  margin-left: 20px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  width: 320px;
  font-size: 0.7em;
  color: white;
  background: #128d23;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 0.9em;
    width: 150px;
  }
`;
export const PhoneHeading = styled.h1`
  margin: 0;
  padding: 0 0.5rem;
  font-weight: lighter;
  font-size: 1.5em;
  color: #fff85ff;
`;
