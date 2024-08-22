// Filename - pages/index.js

import React, { Children, useState } from "react";

import ReactDom from "react-dom";

import {
  Image,
  VideoContainer,
  VideoBackground,
  CenterText,
  Container,
  Card,
  Heading,
  PhoneHeading,
  Paragraph,
  Button,
  CardCarousel,
} from "../components/home/HomeElements";
import styles from "../components/home/HomeComponent.module.css";

import Video1 from "../static/video/blue.mp4";

import Image1 from "../static/images/bg1.jpg";
import Image2 from "../static/images/bg2.jpg";
import Image3 from "../static/images/bg3.jpg";
import Image4 from "../static/images/ai.png";
import Image5 from "../static/images/ai1.png";
import Image6 from "../static/images/bg2.jpg";
import Image7 from "../static/images/bg3.jpg";
import CardComponent from "../components/home/CardComponent";

const Home = () => {
  return (
    <Container>
      <VideoContainer>
        <VideoBackground autoPlay muted loop>
          <source src={Video1} type="video/mp4" />
        </VideoBackground>
        <Container>
          <CenterText>
            <Heading>Tech in view</Heading>
            <Paragraph>
              This content is displayed on top of the video background. This
              content is displayed on top of the video background. This content
              is displayed on top of the video background.
            </Paragraph>
            <Button>Read our reports</Button>
          </CenterText>
        </Container>
        <CardCarousel>
          <CardComponent />
        </CardCarousel>
      </VideoContainer>
    </Container>
  );
};

export default Home;
