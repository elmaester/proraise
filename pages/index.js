import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderImage from './../svg/header-image.svg';
import BenefitImage1 from './../svg/benefit-1.svg';
import BenefitImage2 from './../svg/benefit-2.svg';
import BenefitImage3 from './../svg/benefit-3.svg';
import FeatureImage1 from './../svg/feature-1.svg';
import FeatureImage2 from './../svg/feature-2.svg';
import FeatureImage3 from './../svg/feature-3.svg';
import FeatureImage4 from './../svg/feature-4.svg';
import FeatureImage5 from './../svg/feature-5.svg';
import FeatureImage6 from './../svg/feature-6.svg';

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

const GlobalStyle = createGlobalStyle`
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

const Header = styled.h2`
  font-size: 26px;
  &.pseudologo {
    ${forPhoneOnly} {
      font-size: 24px;
    }
    ${forTabletPortraitUp} {
      font-size: 34px;
    }
    margin: 0;
  }
  font-weight: bold;
  text-align: center;
  margin: 30px 0;
  ${forTabletPortraitUp} {
    margin-bottom: 60px;
  }
  color: ${(props) => props.color || 'inherit'};
`;

const HeaderImageHolder = styled.div`
  ${forTabletPortraitUp} {
    width: calc(100% - 270px);
    margin: auto;
  }
`;

const GradientHeader = styled(Header)`
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
`;

const Button = styled.a`
  ${forPhoneOnly} {
    padding: 11px 15px;
    font-size: 14px;
  }
  ${forTabletPortraitUp} {
    padding: 14px 25px;
    font-size: 16px;
    &.centered-button {
      display: block;
      width: fit-content;
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

const NavBar = styled.nav`
  ${whiteSpaceSidesMixin}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${forPhoneOnly} {
    margin-top: 10px;
  }
  ${forTabletPortraitUp} {
    margin-top: 15px;
  }
`;

const NavItem = styled.a`
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
  }
  &:hover {
    color: ${secondaryColorHover};
  }
`;

const MainContainer = styled.div``;

const SectionContainer = styled.section`
  ${whiteSpaceSidesMixin}
  ${forPhoneOnly} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  ${forTabletPortraitUp} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  &.last-section {
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

const BenefitContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  padding: 30px;
  margin-bottom: 20px;
  ${forTabletPortraitUp} {
    display: flex;
    align-items: center;
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

const BenefitSvgHolder = styled.div`
  ${forPhoneOnly} {
    width: calc(100% - 100px);
    margin: 0 auto;
  }
  ${forTabletPortraitUp} {
    width: 130px;
    min-width: 130px;
    margin-right: 30px;
  }
`;

const FeatureImageCircleContainer = styled.div`
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

const FeatureText = styled.div`
  ${forPhoneOnly} {
    margin-left: 15px;
  }
  ${forTabletPortraitUp} {
    margin-left: 15px;
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
  }
  p {
    color: #7e7f80;
    line-height: 1.63;
    margin: 0;
    font-size: 16px;
  }
`;

const FeatureItemContainer = styled.div`
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Head>
        <title>ProRaise</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito&display=swap'
          rel='stylesheet'
        />
      </Head>

      <NavBar>
        <Header
          className='pseudologo'
          as='h1'
          color={mainColor}
          style={{ fontWeight: '300' }}
        >
          ProRaise
        </Header>
        <div>
          <NavItem className='hidden-on-mobile'>Benefits</NavItem>
          <NavItem className='hidden-on-mobile'>Features</NavItem>
          <NavItem className='login-button'>Login</NavItem>
          <Button>Sign up</Button>
        </div>
      </NavBar>

      <main>
        {/* HEADER SECTION */}

        <SectionContainer>
          <HeaderImageHolder>
            <HeaderImage />
          </HeaderImageHolder>
          <Header>
            Help founders navigate the capital raising process simply
          </Header>
          <p
            style={{
              textAlign: 'center',
              lineHeight: '2',
              marginBottom: '25px',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>
              Scaling your business may need funding from investors. This can be
              a time consuming and complex process.
            </span>{' '}
            ProRaise helps you run your fundraising more efficiently, saving you
            time.
          </p>
          <Button className='full-width-on-mobile centered-button'>
            Start fundraising
          </Button>
        </SectionContainer>

        {/* BENEFITS SECTION */}

        <SectionContainer style={{ backgroundColor: '#e9eaec' }}>
          <GradientHeader
            gradientFrom='#00f091'
            gradientTo='#009efb'
            angle='106'
          >
            Benefits
          </GradientHeader>

          <BenefitContainer>
            <BenefitSvgHolder>
              <BenefitImage1 />
            </BenefitSvgHolder>
            <p>Navigate the complex capital raising process simply</p>
          </BenefitContainer>

          <BenefitContainer>
            <BenefitSvgHolder>
              <BenefitImage2 />
            </BenefitSvgHolder>
            <p>
              Present your company professionally to investors to improve your
              chance of closing quickly
            </p>
          </BenefitContainer>

          <BenefitContainer>
            <BenefitSvgHolder>
              <BenefitImage3 />
            </BenefitSvgHolder>
            <p>Accelerate your investor discussions</p>
          </BenefitContainer>
        </SectionContainer>

        {/* FEATURES SECTION */}

        <SectionContainer style={{ backgroundColor: '#fafbfd' }}>
          <GradientHeader
            gradientFrom='#ff9b49'
            gradientTo='#ffc92b'
            angle='285'
          >
            Features
          </GradientHeader>

          <FeatureItemContainer>
            <FeatureImageCircleContainer>
              <FeatureImage1 />
            </FeatureImageCircleContainer>
            <FeatureText>
              <h3>Create your pitch</h3>
              <p>Present your company professionally</p>
            </FeatureText>
          </FeatureItemContainer>

          <FeatureItemContainer>
            <FeatureImageCircleContainer>
              <FeatureImage2 />
            </FeatureImageCircleContainer>
            <FeatureText>
              <h3>Set up your deal</h3>
              <p>Clear and professional, done within minutes</p>
            </FeatureText>
          </FeatureItemContainer>

          <FeatureItemContainer>
            <FeatureImageCircleContainer>
              <FeatureImage3 />
            </FeatureImageCircleContainer>
            <FeatureText>
              <h3>Share with your network</h3>
              <p>Fast and simple way to engage with investors</p>
            </FeatureText>
          </FeatureItemContainer>

          <FeatureItemContainer>
            <FeatureImageCircleContainer>
              <FeatureImage4 />
            </FeatureImageCircleContainer>
            <FeatureText>
              <h3>Secure dataroom</h3>
              <p>Easy to set up and manage permissions</p>
            </FeatureText>
          </FeatureItemContainer>

          <FeatureItemContainer>
            <FeatureImageCircleContainer>
              <FeatureImage5 />
            </FeatureImageCircleContainer>
            <FeatureText>
              <h3>Gain feedback & insight</h3>
              <p>Receive helpful feedback and insights</p>
            </FeatureText>
          </FeatureItemContainer>

          <FeatureItemContainer>
            <FeatureImageCircleContainer>
              <FeatureImage6 />
            </FeatureImageCircleContainer>
            <FeatureText>
              <h3>Track interests</h3>
              <p>Instant status update</p>
            </FeatureText>
          </FeatureItemContainer>
        </SectionContainer>

        {/* LAST SECTION */}

        <SectionContainer
          style={{
            backgroundImage: 'linear-gradient(321deg, #ff9b49, #ffc92b)',
            color: '#fff',
            textAlign: 'center',
            paddingBottom: '20px',
          }}
          className='last-section'
        >
          <Header as='h3'>Get started on a 1 month free trial!</Header>
          <p style={{ fontWeight: 'bold' }}>
            It is only £50/month* with no fixed contract.
          </p>
          <p>You can cancel anytime if it doesn't help you close your round!</p>
          <Button className='full-width-on-mobile free-trial-button centered-button'>
            Start your 1-month free trial
          </Button>
          <p style={{ fontSize: '11px', marginBottom: '0' }}>*excl. VAT</p>
        </SectionContainer>
      </main>
    </MainContainer>
  );
}
