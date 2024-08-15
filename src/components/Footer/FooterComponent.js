import React from "react";
import {
  Body,
  Form,
  Input,
  Card,
  Col1,
  Col2,
  Col3,
  H3,
  H2,
  Button,
  Img,
  Link,
  Social,
  FooterWrapper,
} from "./FooterElements";
import { FaArrowDown } from "react-icons/fa";

const Footer = () => {
  return (
    <Body>
      <Card>
        <FooterWrapper id="footer">
          <Col1>
            <H3>Emsel</H3>
            <p>
              Made with <span style={{ color: "#BA6573" }}>React Js</span>
            </p>
            <Social>
              <Link href="https://codepen.io/Juxtopposed" target="_blank">
                <Img
                  src="https://assets.codepen.io/9051928/codepen_1.png"
                  alt="Codepen"
                />
              </Link>
              <Link href="https://twitter.com/juxtopposed" target="_blank">
                <Img
                  src="https://assets.codepen.io/9051928/x.png"
                  alt="Twitter"
                />
              </Link>
              <Link href="https://youtube.com/@juxtopposed" target="_blank">
                <Img
                  src="https://assets.codepen.io/9051928/youtube_1.png"
                  alt="YouTube"
                />
              </Link>
            </Social>
            <p style={{ color: "#818181", fontSize: "smaller" }}>
              2024 © All Rights Reserved
            </p>
          </Col1>
          <Col2>
            <p>About</p>
            <p>Our mission</p>
            <p>Privacy Policy</p>
            <p>Terms of service</p>
          </Col2>
          <Col3>
            <p>Services</p>
            <p>Products</p>
            <p>Join our team</p>
            <p>Partner with us</p>
          </Col3>
        </FooterWrapper>
        <Card style={{backgroundColor: "black", color: "#ffffff"}}>
        <p style={{ color: "#818181", fontSize: "smaller" }}>
              2024 © Copywrite
              All Rights Reserved
            </p>
        </Card>
      </Card>
      
    </Body>
  );
};

export default Footer;
