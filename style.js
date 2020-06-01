import styled, { createGlobalStyle } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const forPhoneOnly = '@media (max-width: 599px)';
const forTabletPortraitUp = '@media (min-width: 600px)';
const forTabletLandscapeUp = '@media (min-width: 900px)';
const forDesktopUp = '@media (min-width: 1200px)';
const forBigDesktopUp = '@media (min-width: 1800px)';

const mainColor = '#ff7702';
const mainColorHover = '#e66b00';
const secondaryColor = '#1f7be8';
const secondaryColorHover = '#5e9fed';

const whiteSpaceSidesMixin = `
  padding-left: 15px;
  padding-right: 15px;
  ${forTabletPortraitUp} {
    padding-left: 30px;
    padding-right: 30px;
  }
  ${forTabletLandscapeUp} {
    padding-left: 75px;
    padding-right: 75px;
  }
  ${forDesktopUp} {
    padding-left: 140px;
    padding-right: 140px;
  }
  ${forBigDesktopUp} {
    padding-left: 460px;
    padding-right: 460px;
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

export const PseudoLogo = styled(AnchorLink)`
  color: ${mainColor};
  text-decoration: none;
  ${forPhoneOnly} {
    font-size: 24px;
  }
  ${forTabletPortraitUp} {
    font-size: 34px;
  }
  margin: 0;
  font-weight: 300;
`;

export const Header = styled.h2`
  font-size: 26px;
  ${forDesktopUp} {
    font-size: 36px;
  }
  font-weight: bold;
  text-align: center;
  &.left-aligned-header {
    ${forTabletLandscapeUp} {
      text-align: left;
      margin-bottom: 25px;
    }
  }
  margin: 30px 0;
  ${forTabletPortraitUp} {
    margin-bottom: 60px;
  }
  color: ${(props) => props.color || 'inherit'};
`;

export const HeaderImageHolder = styled.div`
  ${forTabletPortraitUp} {
    width: calc(100% - 270px);
    margin-left: auto;
    margin-right: auto;
  }
  ${forTabletLandscapeUp} {
    width: 42%;
    min-width: 42%;
    margin-left: 67px;
    margin-top: 30px;
  }
  ${forDesktopUp} {
    margin-left: 80px;
    width: 30%;
    min-width: 30%;
  }
  ${forBigDesktopUp} {
    width: 35%;
    min-width: 35%;
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
  display: block;
  text-align: center;
  margin-top: 0;
  ${forTabletPortraitUp} {
    text-align: left;
  }
  ${forTabletLandscapeUp} {
    font-size: 36px;
  }
`;

export const Button = styled.a`
  ${forPhoneOnly} {
    padding: 11px 15px;
    font-size: 14px;
  }
  padding: 14px 25px;
  font-size: 16px;
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
  &.free-trial-button {
    ${forPhoneOnly} {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    ${forTabletPortraitUp} {
      margin-top: 40px;
      margin-bottom: 40px;
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
  }
  ${forTabletPortraitUp} {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const NavItem = styled(AnchorLink)`
  text-decoration: none;
  color: #000;
  ${forPhoneOnly} {
    font-size: 14px;
  }
  ${forTabletPortraitUp} {
    font-size: 16px;
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
  ${forPhoneOnly} {
    margin-top: 60px;
  }
  ${forTabletPortraitUp} {
    margin-top: 80px;
  }
`;

export const SectionContainer = styled.section`
  ${whiteSpaceSidesMixin}
  ${forPhoneOnly} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  ${forTabletPortraitUp} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  ${forDesktopUp} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  &.header-section {
    text-align: center;
    padding-top: 0;
    ${forTabletLandscapeUp} {
      display: flex;
      flex-direction: row-reverse;
      p {
        text-align: left;
      }
    }
    .subsection-in-header {
      ${forTabletLandscapeUp} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
  &.last-section {
    background-image: linear-gradient(321deg, #ff9b49, #ffc92b);
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
    ${forPhoneOnly} {
      p {
        line-height: 1.63;
      }
    }
    ${forTabletPortraitUp} {
      p {
        line-height: 2;
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
  ${forTabletPortraitUp} {
    display: flex;
    align-items: center;
  }
  ${forTabletLandscapeUp} {
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    width: 270px;
    height: 404px;
    padding: 34px 43px 10px 43px;
  }
  ${forDesktopUp} {
    width: 300px;
  }
  p {
    font-weight: bold;
    ${forPhoneOnly} {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 0;
      font-size: 18px;
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
    width: calc(100% - 100px);
    margin: 0 auto;
  }
  ${forTabletPortraitUp} {
    width: 130px;
    min-width: 130px;
    margin-right: 30px;
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
  }
  ${forDesktopUp} {
    margin-left: 20px;
  }
  h3 {
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
  ${forPhoneOnly} {
    transform: translateY(-82px);
  }
  ${forTabletPortraitUp} {
    transform: translateY(-136px);
  }
  ${forDesktopUp} {
    transform: translateY(-176px);
  }
`;
