// Filename - "./components/Navbar.js
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import "../../App.css";
import {
  Nav,
  NavLink,
  NavMenu,
  DropDownBanner,
  Container,
  Card,
  BannnerItem,
  Image,
  Section,
  ReDiv,
} from "./NavbarElements";
import { FaCaretDown, FaGlobe, FaSearch } from "react-icons/fa";
import Image1 from "../../static/images/ai.png";
import Image2 from "../../static/images/ai2.png";
import Image3 from "../../static/images/eng.png";
//Code to toggle the dropdown banner
const Navbar = () => {
  const [dropDownContent, setDropDownContent] = useState(null);

  const toggleDropDown = (content) => {
    if (dropDownContent === content) {
      setDropDownContent(null);
    } else {
      setDropDownContent(content);
    }
  };
  // Code to activate sticky navbar
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > -10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ReDiv className="">
        <Nav className={`${isSticky ? "sticky" : ""}`}>
          <NavLink to="/" emsel>
            Emsel<span>.</span>
          </NavLink>
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>

            <NavLink activeStyle onClick={() => toggleDropDown("who_we_are")}>
              Who we are <FaCaretDown />
            </NavLink>

            <NavLink activeStyle onClick={() => toggleDropDown("what_we_do")}>
              What we do <FaCaretDown />
            </NavLink>
            <NavLink
              activeStyle
              onClick={() => toggleDropDown("what_we_think")}
            >
              What we think <FaCaretDown />
            </NavLink>

            <NavLink activeStyle>
              Careers <FaCaretDown />
            </NavLink>
          </NavMenu>
          <NavLink
            to="/search"
            activeStyle
            search
            onClick={() => toggleDropDown("search")}
          >
            <FaSearch />
          </NavLink>
          <NavLink>
            <FaGlobe /> <span>NG - EN</span> <FaCaretDown />
          </NavLink>
        </Nav>

        {dropDownContent && (
          <DropDownBanner>
            {dropDownContent === "who_we_are" && (
              <Section>
                <Card>
                  <ul>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Overview</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Purpose & Value</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Our People</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Governance</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Recognition</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Press Room</BannnerItem>
                    </NavLink>
                  </ul>
                </Card>
                <Card>
                  <ul>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Contact Us</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Our Work</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Industries</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Enterprise</BannnerItem>
                    </NavLink>
                  </ul>
                </Card>
                <Container>
                  <Image src={Image1}></Image>
                </Container>
              </Section>
            )}
          </DropDownBanner>
        )}

        {dropDownContent && (
          <DropDownBanner>
            {dropDownContent === "what_we_do" && (
              <Section>
                <Card>
                  <ul>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Overview</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Purpose & Value</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Our People</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Governance</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Recognition</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Press Room</BannnerItem>
                    </NavLink>
                  </ul>
                </Card>
                <Card>
                  <ul>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Services</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Products</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Industries</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Enterprise</BannnerItem>
                    </NavLink>
                  </ul>
                </Card>
                <Container>
                  <Image src={Image1}></Image>
                </Container>
              </Section>
            )}
          </DropDownBanner>
        )}

        {dropDownContent && (
          <DropDownBanner>
            {dropDownContent === "what_we_think" && (
              <Section>
                <Card>
                  <ul>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Overview</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Purpose & Value</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Our People</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Governance</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Recognition</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem to="/about">Press Room</BannnerItem>
                    </NavLink>
                  </ul>
                </Card>
                <Card>
                  <ul>
                    <NavLink>
                      <BannnerItem>Industries</BannnerItem>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                      <BannnerItem>Enterprise</BannnerItem>
                    </NavLink>
                  </ul>
                </Card>
                <Container>
                  <Image src={Image1}></Image>
                </Container>
              </Section>
            )}
          </DropDownBanner>
        )}
      </ReDiv>
    </>
  );
};

export default Navbar;
