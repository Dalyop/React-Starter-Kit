// Filename - pages/about.js

import React from "react";

import {
  Container,
  Header,
  Label,
  Main,
  Nav,
  Ul,
  Li,
  A,
  P,
  SrOnly,
  Section,
  Content,
  H2,
  FlowerImg,
  Footer,
} from "./AboutElements";

import styles from './AboutComponent.module.css';

const AboutComponent = () => {
  return (
    <Container>
      <Header >
        <Nav>
          <Ul className={styles.indicator}>
            <Li>
              <A href="#snapping">
                <SrOnly >Snapping</SrOnly>
              </A>
            </Li>
            <Li>
              <A href="#scrolling">
                <SrOnly>Scrolling</SrOnly>
              </A>
            </Li>
            <Li>
              <A href="#layout">
                <SrOnly>Layout</SrOnly>
              </A>
            </Li>
            <Li>
              <A href="#transition">
                <SrOnly>Transition</SrOnly>
              </A>
            </Li>
            <Li>
              <A href="#caveats">
                <SrOnly>Caveats</SrOnly>
              </A>
            </Li>
          </Ul>
        </Nav>
      </Header>
      <Main>
        <Section id="snapping" className={styles.section}>
          <Content>
            <H2>
              <strong>First</strong>, we set up the <em>snapping</em> points
            </H2>
            <div className={styles.text}>
              <FlowerImg
                src="https://assets.codepen.io/197359/flower-white.png"
                alt=""
              />
              <P>
                We set the scrolling element, in this case our{" "}
                <code className={styles.selector}>HTML</code> element, to forcibly snap
                to the Y axis by using{" "}
                <code className={styles.property}>scroll-snap-type: y mandatory</code>.
              </P>
              <P>
                And then we set <code className={styles.selector}>section</code> as the
                snapping elements by using{" "}
                <code className={styles.property}>scroll-snap-align: start</code>.
              </P>
            </div>
          </Content>
        </Section>
        <Section id="scrolling" className={styles.section}>
          <Content>
            <H2>
              <strong>Next</strong>, we set up the <em>scrolling</em> animation
            </H2>
            <div className={styles.text}>
              <FlowerImg
                src="https://assets.codepen.io/197359/flower-yellow.png"
                alt=""
              />
              <P>
                We track the <code className={styles.property}>view()</code> position
                of the <code className={styles.selector}>section</code> elements using
                the named timeline{" "}
                <code className={styles.property}>view-timeline: --section;</code>. We
                had previously set the{" "}
                <code className={styles.property}>timeline-scope: --section</code> up
                in our <code className={styles.selector}>HTML</code> element, so we can
                access it from anywhere in the document.
              </P>
              <P>
                We animate the <code className={styles.selector}>.content</code>{" "}
                children using{" "}
                <code className={styles.property}>animation-timeline: --section;</code>
                . The <code className={styles.selector}>.content</code> element will
                now animate based on its parent{" "}
                <code className={styles.selector}>section</code>'s position. This is
                important due to how we're handling the layout in the next
                section.
              </P>
            </div>
          </Content>
        </Section>
        <Section id="layout" className={styles.section}>
          <Content>
            <H2>
              <strong>Then</strong>, we position a <em>fixed</em> layout
            </H2>
            <div className={styles.text}>
              <FlowerImg
                src="https://assets.codepen.io/197359/flower-blue.png"
                alt=""
              />
              <P>
                We set the <code className={styles.selector}>.content</code> elements
                to <code className={styles.property}>position: fixed</code>, so they're
                removed from the normal document flow and stack on top of each
                other, giving them a solid background, so only one is visible at
                a time.
              </P>
              <P>
                Their parent <code className={styles.selector}>section</code>s are
                positioned as normal in the layer below, taking up space,
                scroll-snapping, and powering the{" "}
                <code className={styles.property}>animation-timeline</code>.
              </P>
            </div>
          </Content>
        </Section>
        <Section id="transition" className={styles.section}>
          <Content>
            <H2>
              <strong>Finally</strong>, we create the <em>transition</em>{" "}
              effects
            </H2>
            <div className={styles.text}>
              <FlowerImg
                src="https://assets.codepen.io/197359/flower-red.png"
                alt=""
              />
              <P>
                By setting the <code className={styles.selector}>.content</code>{" "}
                elements to <code className={styles.property}>position: fixed</code>,
                we can now transition between them without a visible scrolling
                movement.
              </P>
              <P>
                We create a normal <code className={styles.selector}>@keyframe</code>{" "}
                animation to our liking to transition between them. Check the
                navigation menu to see different effects.
              </P>
            </div>
          </Content>
        </Section>
        <Section id="caveats" className={styles.section}>
          <Content>
            <H2>
              <strong>Caveats</strong>
            </H2>
            <div className={styles.text}>
              <FlowerImg
                src="https://assets.codepen.io/197359/flower-purple.png"
                alt=""
              />
              <ul>
                <li>
                  Scrolling animations are not currently available in Firefox.
                  This demo is using a polyfill.
                </li>
                <li>
                  This layout is fragile due to the use of{" "}
                  <code className={styles.property}>position: fixed</code>. You need to
                  carefully manage stacking contexts.
                </li>
                <li>
                  Snapping points have their own caveats, such as content taller
                  than the viewport becoming inaccessible, along with the
                  general annoyance of scrolljacking.
                </li>
                <li>
                  The <code className={styles.selector}>blink</code> effect uses the{" "}
                  <code className={styles.property}>contrast()</code> filter, which
                  modifies the colors of the entire section. Thus, the
                  background is set to black (or white), ensuring that it
                  appears unchanged during transitions due to already being at
                  maximum contrast.
                </li>
              </ul>
            </div>
          </Content>
        </Section>
      </Main>
    </Container>
  );
};

export default AboutComponent;
