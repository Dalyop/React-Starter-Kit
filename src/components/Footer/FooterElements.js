import styled from "styled-components";

const Body = styled.div`
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  color: #d5d5d5;
  font-size: calc(0.3 * 4rem);
  @media screen and (max-width: 768px) {
    margin: 5rem 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  width: calc(0.8 * 4rem);
  height: calc(0.8 * 4rem);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: calc(0.1 * 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H2 = styled.h2`
  color: #ffffff;
  font-weight: 500;
  text-align: center;
  font-size: 2rem;
  margin: 2rem;
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: calc(0.6 * 4rem);
  margin: 0;
`;
const Card = styled.div`
  width: 100%;
  background: linear-gradient(120deg, #14021e, #14021e);
  /*background: linear-gradient(360deg, #14021e, #8200c9);
  border-top-right-radius: calc(0.5 * 4rem);
  border-top-left-radius: calc(0.5 * 4rem);*/
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
const Button = styled.button`
  background-color: transparent;
  font-size: calc(0.4 * 4rem);
  border: none;
  color: #e5e5e5;
  font-weight: 400;
  border-radius: calc(0.3 * 4rem);
`;
const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 5rem 2vw;
  position: relative;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 0.5rem 10vw;
  }
`;
const Col1 = styled.div`
  color: #4ff4f0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: calc(0.3 * 4rem) calc(0.8 * 1rem);
  width: 28%;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 1rem 0;
  }
`;
const Col2 = styled.div`
  background-image: linear-gradient(185deg, #14021e, #14023e);
  color: #e5e5e5;
  border-radius: calc(0.5 * 4rem);
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: calc(0.3 * 4rem) calc(0.8 * 4rem);
  width: 28%;
  margin: 0;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 2rem 0;
  }
`;
const Col3 = styled.div`
  background-image: linear-gradient(185deg, #14021e, #14023e);
  color: #e5e5e5;
  border-radius: calc(0.5 * 4rem);
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: calc(0.3 * 4rem) calc(0.8 * 4rem);
  width: 28%;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 1rem 0;
  }
`;
const Img = styled.img`
  height: calc(0.3 * 4rem);
  object-fit: cover;
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;
const Form = styled.form`
  width: ;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  border-radius: 1rem;
  border: none;
`;

export {
  Form,
  Input,
  Body,
  Link,
  H2,
  H3,
  Card,
  Button,
  FooterWrapper,
  Col1,
  Col2,
  Col3,
  Img,
  Social,
};
