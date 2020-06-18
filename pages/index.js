import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
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

import {
  GlobalStyle,
  PseudoLogo,
  Header,
  HeaderImageHolder,
  GradientHeader,
  GradientHeaderContainer,
  Button,
  NavBar,
  NavItem,
  MainContainer,
  SectionContainer,
  BenefitContainer,
  BenefitTilesFacilitator,
  BenefitSvgHolder,
  FeatureImageCircleContainer,
  FeatureText,
  FeatureItemContainer,
  TwoFeaturesPerRowFacilitator,
  Anchor,
} from '../style';

import PasswordWall from '../components/PasswordWall';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Home() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [authenticated, setAuthenticated] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (reactLocalStorage.get('authenticated')) setAuthenticated(true);
    setLoaded(true);
  });
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPosition(currPos.y);
  });

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>ProRaise</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito&display=swap'
          rel='stylesheet'
        />
      </Head>

      {authenticated ? (
        <>
          <NavBar className={scrollPosition < -20 && 'shadow-activated'}>
            <PseudoLogo href='#top'>ProRaise</PseudoLogo>
            <div>
              <NavItem className='hidden-on-mobile' href='#benefits'>
                Benefits
              </NavItem>
              <NavItem className='hidden-on-mobile' href='#features'>
                Features
              </NavItem>
              <NavItem className='login-button'>Login</NavItem>
              <Button>Sign up</Button>
            </div>
          </NavBar>

          <MainContainer>
            <Anchor id='top' />
            {/* HEADER SECTION */}

            <SectionContainer className='header-section'>
              <HeaderImageHolder>
                <HeaderImage />
              </HeaderImageHolder>
              <div className='subsection-in-header'>
                <Header className='left-aligned-header'>
                  Helps founders raise capital more efficiently
                </Header>
                <p
                  style={{
                    lineHeight: '2',
                    marginBottom: '25px',
                  }}
                >
                  <span style={{ fontWeight: 'bold' }}>
                    Scaling your business takes funding, which can be complex
                    and time-consuming.
                  </span>{' '}
                  ProRaise helps you do it better.
                </p>
                <Button className='full-width-on-mobile centered-button'>
                  Start fundraising
                </Button>
              </div>
            </SectionContainer>

            {/* BENEFITS SECTION */}

            <SectionContainer style={{ backgroundColor: '#e9eaec' }}>
              <Anchor id='benefits' />
              <GradientHeaderContainer>
                <GradientHeader
                  gradientFrom='#00f091'
                  gradientTo='#009efb'
                  angle='106'
                >
                  Benefits
                </GradientHeader>
              </GradientHeaderContainer>

              <BenefitTilesFacilitator>
                <BenefitContainer>
                  <BenefitSvgHolder>
                    <BenefitImage1 />
                  </BenefitSvgHolder>
                  <p>Manage the fundraising process more easily</p>
                </BenefitContainer>

                <BenefitContainer>
                  <BenefitSvgHolder>
                    <BenefitImage2 />
                  </BenefitSvgHolder>
                  <p>Present your company in a way investors love</p>
                </BenefitContainer>

                <BenefitContainer>
                  <BenefitSvgHolder>
                    <BenefitImage3 />
                  </BenefitSvgHolder>
                  <p>
                    Speed up the investment process and improve your success
                    rate
                  </p>
                </BenefitContainer>
              </BenefitTilesFacilitator>
            </SectionContainer>

            {/* FEATURES SECTION */}

            <SectionContainer style={{ backgroundColor: '#fafbfd' }}>
              <Anchor id='features' />
              <GradientHeaderContainer>
                <GradientHeader
                  gradientFrom='#ff9b49'
                  gradientTo='#ffc92b'
                  angle='285'
                >
                  Features
                </GradientHeader>
              </GradientHeaderContainer>

              <TwoFeaturesPerRowFacilitator>
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
                    <p>Clear, simple and done in minutes</p>
                  </FeatureText>
                </FeatureItemContainer>

                <FeatureItemContainer>
                  <FeatureImageCircleContainer>
                    <FeatureImage3 />
                  </FeatureImageCircleContainer>
                  <FeatureText>
                    <h3>Share with your network</h3>
                    <p>The fastest way to engage with investors</p>
                  </FeatureText>
                </FeatureItemContainer>

                <FeatureItemContainer>
                  <FeatureImageCircleContainer>
                    <FeatureImage4 />
                  </FeatureImageCircleContainer>
                  <FeatureText>
                    <h3>Secure dataroom access</h3>
                    <p>It's easy to set up and manage</p>
                  </FeatureText>
                </FeatureItemContainer>

                <FeatureItemContainer className='penultimate-feature-item-container'>
                  <FeatureImageCircleContainer>
                    <FeatureImage5 />
                  </FeatureImageCircleContainer>
                  <FeatureText>
                    <h3>Improve your success rate</h3>
                    <p>Get investor feedback and insight</p>
                  </FeatureText>
                </FeatureItemContainer>

                <FeatureItemContainer>
                  <FeatureImageCircleContainer>
                    <FeatureImage6 />
                  </FeatureImageCircleContainer>
                  <FeatureText>
                    <h3>Track interest</h3>
                    <p>With instant status updates</p>
                  </FeatureText>
                </FeatureItemContainer>
              </TwoFeaturesPerRowFacilitator>
            </SectionContainer>

            {/* LAST SECTION */}

            <SectionContainer className='last-section'>
              <Header as='h3'>Start your free one-month trial</Header>
              <p style={{ fontWeight: 'bold' }}>
                Just £50 a month*, there's no contract and you can cancel any
                time
              </p>
              <Button className='full-width-on-mobile free-trial-button centered-button-always'>
                Start your 1-month free trial
              </Button>
              <p style={{ fontSize: '11px', marginBottom: '0' }}>
                *excl. VAT.{' '}
                <Link href='/privacy-cookie-policy'>
                  <a className='privacy-link'>View terms and conditions</a>
                </Link>
              </p>
            </SectionContainer>
          </MainContainer>
        </>
      ) : (
        loaded && (
          <PasswordWall
            success={() => {
              setAuthenticated(true);
              reactLocalStorage.set('authenticated', true);
            }}
          />
        )
      )}
    </>
  );
}
