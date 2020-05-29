import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderImage from './../svg/header-image.svg';

const forPhoneOnly = '@media (max-width: 599px)';
const forTabletPortraitUp = '@media (min-width: 600px)';
const forTabletLandscapeUp = '@media (min-width: 900px)';
const forDesktopUp = '@media (min-width: 1200px)';
const forBigDesktopUp = '@media (min-width: 1800px)';

const MainColor = '#ff7702';
const MainColorHover = '#e66b00';
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
    margin: 0
    };
`;

const Header = styled.h2`
  font-size: 26px;
  &.pseudologo {
    font-size: 24px;
  }
  font-weight: bold;
  text-align: center;
  margin: 30px 0;
  color: ${(props) => props.color || 'inherit'};
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
  ${forTabletPortraitUp} {
    text-align: left;
  }
`;

const Button = styled.a`
  padding: 11px 15px;
  color: #fff;
  background-color: ${MainColor};
  border-radius: 5px;
  font-family: Nunito;
  font-size: 14px;
  font-weight: bold;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    background-color: ${MainColorHover};
  }
  &.full-width-on-mobile {
    ${forPhoneOnly} {
      display: block;
      text-align: center;
    }
  }
`;

const NavBar = styled.nav`
  ${whiteSpaceSidesMixin}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.a`
  font-size: 14px;
  font-weight: bold;
  font-family: Nunito;
  transition: 0.25s;
  display: inline-block;
  margin-right: 17px;
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
  padding-top: 30px;
  padding-bottom: 30px;
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
          color='#ff7702'
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
        <SectionContainer>
          <HeaderImage />
          <Header>
            Help founders navigate the capital raising process simply
          </Header>
          <p style={{ textAlign: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>
              Scaling your business may need funding from investors. This can be
              a time consuming and complex process.
            </span>{' '}
            ProRaise helps you run your fundraising more efficiently, saving you
            time.
          </p>
          <Button className='full-width-on-mobile'>Start fundraising</Button>
        </SectionContainer>

        <SectionContainer style={{ backgroundColor: '#e9eaec' }}>
          <GradientHeader
            gradientFrom='#00f091'
            gradientTo='#009efb'
            angle='106'
          >
            Benefits
          </GradientHeader>
          <p>Navigate the complex capital raising process simply</p>
          <p>
            Present your company professionally to investors to improve your
            chance of closing quickly
          </p>
          <p>Accelerate your investor discussions</p>
        </SectionContainer>

        <SectionContainer style={{ backgroundColor: '#fafbfd' }}>
          <GradientHeader
            gradientFrom='#ff9b49'
            gradientTo='#ffc92b'
            angle='285'
          >
            Features
          </GradientHeader>
          <div>
            <h3>Create your pitch</h3>
            <p>Present your company professionally</p>
          </div>
          <div>
            <h3>Set up your deal</h3>
            <p>Clear and professional, done within minutes</p>
          </div>
          <div>
            <h3>Share with your network</h3>
            <p>Fast and simple way to engage with investors</p>
          </div>
          <div>
            <h3>Secure dataroom</h3>
            <p>Easy to set up and manage permissions</p>
          </div>
          <div>
            <Header as='h3'>Gain feedback & insight</Header>
            <p>Receive helpful feedback and insights</p>
          </div>
          <div>
            <h3>Track interests</h3>
            <p>Instant status update</p>
          </div>
        </SectionContainer>

        <SectionContainer
          style={{
            backgroundImage: 'linear-gradient(321deg, #ff9b49, #ffc92b)',
          }}
        >
          <h3>Get started on a 1 month free trial!</h3>
          <p>It is only ￡50/month* with no fixed contract.</p>
          <p>You can cancel anytime if it doesn't help you close your round!</p>
          <Button>Start your 1-month free trial</Button>
          <p>*excl. VAT</p>
        </SectionContainer>
      </main>

      <footer></footer>
    </MainContainer>
  );
}
