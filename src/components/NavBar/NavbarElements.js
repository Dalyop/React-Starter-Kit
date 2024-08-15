// Filename - ./components/Navbar.js
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const ReDiv = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
   margin-bottom: 60px;
  }
`;

export const Nav = styled.nav`
  background: #14021e;
  color: #9e9a9a;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1200px) / 2);
  z-index: 12;
`;
export const NavLink = styled(Link)`
  color: #9e9a9a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  /*height: 100%;*/
  cursor: pointer;
  font-size: 1rem;
  &.active {
  	color: #9e9a9a
  }
  ${(props) =>
    props.emsel &&
    `
		color: white;
		font-size: 1.3rem;
		font-weight: bold;
		margin-right: auto;
	`};
  ${(props) =>
    props.links &&
    `
	background-color: #000000;
	margin:500px;
	`};,
  ${(props) =>
    props.search &&
    `
    color: #ffffff;
		margin-left: auto;
	`};
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
//Dropdown Bannner
export const DropDownBanner = styled.div`
  width: 100%;
  background-color: #14021e;
  color: #ffffff;
  padding: 1rem 0;
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 11;
  display: flex;
  /*justify-content: center;
align-items:center;
text-align: center;*/
`;
export const BannnerItem = styled.div`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #808080;
`;
export const Image = styled.img`
  width: 100%;
  border-left: 1px solid #808080;
`;
export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
export const Card = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;
