import styled, { createGlobalStyle } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const forPhoneOnly = '@media (max-width: 599px)';
export const forTabletPortraitUp = '@media (min-width: 600px)';
export const forTabletLandscapeUp = '@media (min-width: 900px)';
export const forDesktopUp = '@media (min-width: 1200px)';
export const forBigDesktopUp = '@media (min-width: 1800px)';

const mainColor = '#390153';
const mainColorHover = '#57017e';
const secondaryColor = '#56ccbd';
const secondaryColorHover = '#35b1a0';

export const whiteSpaceSidesMixin = `
  padding-left: 15px;
  padding-right: 15px;
  ${forTabletPortraitUp} {
    padding-left: calc((100vw - 539px)/2);
    padding-right: calc((100vw - 539px)/2);
  }
  ${forTabletLandscapeUp} {
    padding-left: calc((100vw - 874px)/2);
    padding-right: calc((100vw - 874px)/2);
  }
  ${forDesktopUp} {
    padding-left: calc((100vw - 1000px)/2);
    padding-right: calc((100vw - 1000px)/2);
  }`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: Nunito;
  }
  body {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const LogoContainer = styled(AnchorLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    ${forPhoneOnly} {
      height: 28px;
    }
    height: 40px;
  }
`;

export const PseudoLogo = styled.span`
  color: ${mainColor};
  font-size: 28px;
  ${forPhoneOnly} {
    font-size: 22px;
  }
  margin: 0;
  font-weight: 900;
  margin-left: 5px;
`;

export const Header = styled.h2`
  font-size: 26px;
  ${forDesktopUp} {
    font-size: 36px;
  }
  font-weight: bold;
  text-align: center;
  &.left-aligned-header {
    ${forTabletPortraitUp} {
      text-align: left;
    }
  }
  &.top-section-left-aligned {
    ${forTabletLandscapeUp} {
      text-align: left;
    }

    margin-bottom: 25px;
  }
  margin-top: 0;
  margin-bottom: 40px;
  ${forTabletLandscapeUp} {
    margin-bottom: 60px;
  }
  color: ${(props) => props.color || mainColor};
`;

export const HeaderImageHolder = styled.div`
  margin-bottom: 30px;
  ${forTabletLandscapeUp} {
    margin-bottom: 0;
  }
  ${forTabletPortraitUp} {
    width: 270px;
    margin-left: auto;
    margin-right: auto;
  }
  ${forTabletLandscapeUp} {
    width: 357px;
    min-width: 357px;
    margin-left: 67px;
    margin-bottom: 0px;
  }
  ${forDesktopUp} {
    margin-left: 80px;
    width: 426px;
    min-width: 426px;
  }
`;

export const GradientHeader = styled(Header)`
  background-image: linear-gradient(
    ${(props) => props.angle + 'deg'},
    ${(props) => props.gradientFrom},
    ${(props) => props.gradientTo}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  text-align: center;
  margin-top: 0;
  ${forTabletPortraitUp} {
    text-align: left;
  }
  ${forTabletLandscapeUp} {
    font-size: 36px;
  }
`;

export const GradientHeaderContainer = styled.div`
  ${forPhoneOnly} {
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  ${forPhoneOnly} {
    padding: 11px 15px;
    font-size: 18px;
  }
  padding: 14px 25px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.56px;
  &.centered-button {
    ${forTabletPortraitUp} {
      width: fit-content;
      display: block;
      margin-left: auto;
      margin-right: auto;
      ${forTabletLandscapeUp} {
        display: inline-block;
        margin-left: initial;
        margin-right: initial;
      }
    }
    &-always {
      width: fit-content;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  color: #fff;
  background-color: ${mainColor};
  border-radius: 5px;
  font-family: Nunito;
  font-weight: bold;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    background-color: ${mainColorHover};
  }
  &.full-width-on-mobile {
    ${forPhoneOnly} {
      display: block;
      text-align: center;
    }
  }
  &.larger-padding {
    ${forPhoneOnly} {
      padding: 17px 30px;
    }
    ${forTabletPortraitUp} {
      padding: 17px 25px;
    }
  }
  &.free-trial-button {
    background-color: ${secondaryColor};
    color: #fff;
    ${forPhoneOnly} {
      margin-top: 30px;
    }
    ${forTabletPortraitUp} {
      margin-top: 40px;
    }
    &:hover {
      background-color: ${secondaryColorHover};
    }
  }
`;

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  background-color: #fff;
  ${whiteSpaceSidesMixin}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;
  &.shadow-activated {
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.2);
  }
  ${forPhoneOnly} {
    padding-top: 10px;
    padding-bottom: 10px;
    a {
      font-size: 16px;
    }
  }
  ${forTabletPortraitUp} {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const NavItem = styled(AnchorLink)`
  text-decoration: none;
  color: ${mainColor};
  ${forPhoneOnly} {
    font-size: 16px;
  }
  ${forTabletPortraitUp} {
    font-size: 18px;
  }
  font-weight: bold;
  font-family: Nunito;
  transition: 0.25s;
  display: inline-block;
  ${forPhoneOnly} {
    margin-right: 17px;
  }
  ${forTabletPortraitUp} {
    margin-right: 40px;
  }
  cursor: pointer;
  &:hover {
    color: ${secondaryColorHover};
  }
  &.hidden-on-mobile {
    display: none;
    ${forTabletLandscapeUp} {
      display: inline-block;
    }
  }
  &.login-button {
    color: ${secondaryColor};
    &:hover {
      color: ${secondaryColorHover};
    }
  }
`;

export const MainContainer = styled.div`
  margin-top: 60px;
  ${forTabletLandscapeUp} {
    margin-top: 118px;
  }
  ${forDesktopUp} {
    margin-top: 125px;
  }
`;

export const SectionContainer = styled.section`
  ${whiteSpaceSidesMixin}
  ${forPhoneOnly} {
    padding-top: 40px;
    padding-bottom: 30px;
  }
  ${forTabletPortraitUp} {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  ${forTabletLandscapeUp} {
    padding-top: 60px;
    padding-bottom: 80px;
  }
  &.header-section {
    text-align: center;
    padding-top: 0;
    ${forTabletLandscapeUp} {
      padding-bottom: 118px;
      display: flex;
      flex-direction: row-reverse;
      p {
        text-align: left;
      }
    }
    ${forDesktopUp} {
      padding-bottom: 145px;
    }
    .subsection-in-header {
      color: ${mainColor};
      ${forTabletLandscapeUp} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      p {
        line-height: 1.78;
        margin-bottom: 25px;
        font-size: 18px;
        ${forTabletLandscapeUp} {
          line-height: 1.8;
        }
        ${forDesktopUp} {
          font-size: 20px;
        }
      }
    }
  }
  &.last-section {
    background-color: ${mainColor};
    color: #fff;
    text-align: center;
    ${forTabletPortraitUp} {
      padding-bottom: 60px;
    }
    p {
      font-size: 20px;
      line-height: 1.8;
      ${forTabletLandscapeUp} {
        font-size: 26px;
      }
    }
    h3 {
      color: #fff;
      margin-top: 0;
      ${forPhoneOnly} {
        margin-bottom: 30px;
      }
      ${forTabletPortraitUp} {
        margin-bottom: 40px;
      }
      ${forTabletLandscapeUp} {
        font-size: 36px;
      }
    }
    a.privacy-link {
      color: #fff;
      text-decoration: none;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

export const BenefitContainer = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  padding: 30px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${forTabletPortraitUp} {
    display: flex;
    align-items: center;
    padding: 30px 36px;
  }
  ${forTabletLandscapeUp} {
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    width: 270px;
    height: 404px;
    padding: 64px 20px 30px 20px;
    margin-bottom: 0;
  }
  ${forDesktopUp} {
    width: 300px;
    padding: 64px 40px 30px 40px;
  }
  p {
    color: ${mainColor};
    font-weight: bold;
    font-size: 22px;
    ${forPhoneOnly} {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 0;
    }
    ${forTabletLandscapeUp} {
      font-size: 26px;
    }
  }
`;

export const BenefitTilesFacilitator = styled.div`
  ${forTabletLandscapeUp} {
    display: flex;
    justify-content: space-between;
  }
`;

export const BenefitSvgHolder = styled.div`
  ${forPhoneOnly} {
    width: 130px;
    min-width: 130px;
    margin: 0 auto;
  }
  ${forTabletPortraitUp} {
    width: 130px;
    min-width: 130px;
    margin-right: 40px;
  }
  ${forTabletLandscapeUp} {
    margin-right: 0;
    width: 100%;
  }
`;

export const FeatureImageCircleContainer = styled.div`
  width: 58px;
  height: 58px;
  min-width: 58px;
  min-height: 58px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${forDesktopUp} {
    width: 83px;
    height: 83px;
    min-width: 83px;
    min-height: 83px;
  }
`;

export const FeatureText = styled.div`
  ${forPhoneOnly} {
    margin-left: 15px;
  }
  ${forTabletPortraitUp} {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${forDesktopUp} {
    margin-left: 20px;
  }
  h3 {
    color: ${mainColor};
    ${forPhoneOnly} {
      margin: 0 0 8px 0;
      font-size: 18px;
    }
    ${forTabletPortraitUp} {
      margin: 0 0 4px 0;
      font-size: 24px;
    }
    ${forDesktopUp} {
      font-size: 28px;
    }
  }
  p {
    color: #7e7f80;
    line-height: 1.63;
    margin: 0;
    font-size: 16px;
  }
`;

export const FeatureItemContainer = styled.div`
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
  ${forTabletLandscapeUp} {
    width: 50%;
    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }
  ${forBigDesktopUp} {
    &:not(:last-of-type) {
      margin-bottom: 70px;
    }
  }
  &.penultimate-feature-item-container {
    ${forTabletLandscapeUp} {
      margin-bottom: 0;
    }
  }
`;

export const TwoFeaturesPerRowFacilitator = styled.div`
  ${forTabletLandscapeUp} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Anchor = styled.div`
  transform: translateY(-130px);
  &#top {
    transform: translateY(-200px);
  }
`;
