import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
export const blink = keyframes`
  
`;
export const indicate = keyframes`
  
`;

export const fadeScroll = keyframes`
  
`;

export const horizontalScroll = keyframes`
  
`;

export const backwardsScroll = keyframes`
 
`;

export const zoomScroll = keyframes`
 
`;

export const Html = styled.html``;

export const Body = styled.body``;

export const Main = styled.main`
outline: 0;
view-timeline: --main;
`;

export const Section = styled.section``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*
  padding-block: var(--spacing);
  padding-inline: inherit;
  */
  position: relative;
  height: 100%;

  @media (min-width: 64rem) {
    flex-direction: row;
    justify-content: space-between;
  }

  & strong,
  & code {
    color: var(--color-highlight);
  }

  & code {
    font-family: var(--font-family-default);
  }

  & .selector {
    --color-property: var(--color-highlight);
    color: var(--color-selector);
    font-weight: 700;
  }

  & .property {
    --color-property: var(--color-highlight);
    color: var(--color-property);
    font-weight: 700;
  }

  & ul {
    --font-size-min: 14;
    --font-size-max: 16;
    font-size: var(--font-size);
    font-weight: 400;
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  & li {
    margin-bottom: calc(var(--spacing) / 2);

    &::marker {
      content: "🌷 ";
      color: var(--color-highlight);
    }
  }
`;

export const Indicator = styled.ul``;

export const SiteHeader = styled.header``;

export const BodyChecked = styled(Body)``;

export const Header = styled.header`
  /* Your header styles here */
`;

export const Nav = styled.nav`
  --indicator-number: 5;
  --indicator-top: 50dvb;
  --indicator-right: var(--spacing);

  --font-size-min: 16;
  --font-size-max: 20;
  --line-height-min: 1.2;
  --line-height-max: 1.6;

  --font-size-default: var(--font-size);
  --line-height-default: var(--line-height);
  --indicator-size: 1em;
  --indicator-padding: calc((var(--min-tap-size) - var(--indicator-size)) / 2);
  --indicator-clipped-margins: var(--indicator-padding) * 2;
  --indicator-total-size: calc(
    var(--indicator-size) + var(--indicator-padding) * 2
  );

  --indicator-gap: var(--min-tap-space);
  --indicator-total-gap: calc(
    var(--indicator-gap) * (var(--indicator-number) - 1)
  );

  --indicator-total-height: calc(
    var(--indicator-total-size) * var(--indicator-number) +
      var(--indicator-total-gap) - var(--indicator-clipped-margins)
  );

  /* Make indicators smaller when mouse is being used */
  @media (pointer: fine) {
    --indicator-padding: 0.25em;
  }

  position: fixed;
  inset-block-start: var(--indicator-top);
  inset-inline-end: var(--indicator-right);
  margin-block-start: calc(var(--indicator-total-height) / -2);
  z-index: 100;

  & ul {
    display: flex;
    flex-direction: column;
    gap: var(--indicator-gap);
    margin: 0;
    padding: 0;
    position: relative;

    &::before {
      --size: calc(var(--indicator-size));

      border-radius: 50%;
      content: "";
      color: var(--color-indicator, var(--color-text));
      background-color: currentColor;
      box-shadow: inset 0 0 0 4px var(--color-background);
      position: absolute;
      inset-inline: 0;
      margin-inline: auto;
      padding: 3px;
      width: var(--size);
      height: var(--size);
      z-index: -1;
    }
  }
  & li:first-of-type {
    margin-block-start: calc(var(--indicator-padding) * -1);
  }

  & li:last-of-type {
    margin-block-end: calc(var(--indicator-padding) * -1);
  }

  & li,
  & a {
    display: block;
  }

  & a {
    --color-link: var(--color-text);

    padding: var(--indicator-padding);

    &::before {
      content: "";
      border: 1px solid;
      border-radius: 50%;
      display: block;
      width: var(--indicator-size);
      height: var(--indicator-size);
    }
  }
`;

export const Ul = styled.ul`
  /* Your ul styles here */
`;

export const Li = styled.li`
  /* Your li styles here */
`;

export const A = styled.a`
  /* Your a styles here */
  color: var(--color-link, blue);
  transition: 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: var(--color-link-hover, var(--color-link, blue));
  }
`;

export const Footer = styled.footer`
  /* Your footer styles here */
`;

export const H2 = styled.h2`
  /* Your h2 styles here */
`;

export const P = styled.p`
  /* Your p styles here */
`;

export const Img = styled.img`
  /* Your img styles here */
`;

export const Label = styled.label`
  /* Your label styles here */
`;

export const SrOnly = styled.span`
  /* Your sr-only styles here */
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
}

@media (min-width: 64rem) {
  h1.sr-only {
    --font-size-min: 14;
    --font-size-max: 16;
    all: unset;
    color: var(--color-text);
    font-family: var(--font-family-default);
    font-size: var(--font-size);
    font-weight: 500;
    letter-spacing: 0.01em;
    margin: 0;
    }
  }
`;

export const FlowerImg = styled(Img)`
  display: block;
  opacity: 0.2;
  position: absolute;
  inset: 0;
  object-fit: contain;
  object-position: top center;
  z-index: -1;
`;
