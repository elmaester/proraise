import Head from 'next/head';
import React from 'react';
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

export default function Home() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
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
              Help founders navigate the capital raising process simply
            </Header>
            <p
              style={{
                lineHeight: '2',
                marginBottom: '25px',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>
                Scaling your business may need funding from investors. This can
                be a time consuming and complex process.
              </span>{' '}
              ProRaise helps you run your fundraising more efficiently, saving
              you time.
            </p>
            <Button className='full-width-on-mobile centered-button'>
              Start fundraising
            </Button>
          </div>
        </SectionContainer>

        {/* BENEFITS SECTION */}

        <SectionContainer style={{ backgroundColor: '#e9eaec' }}>
          <Anchor id='benefits' />
          <GradientHeader
            gradientFrom='#00f091'
            gradientTo='#009efb'
            angle='106'
          >
            Benefits
          </GradientHeader>

          <BenefitTilesFacilitator>
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
          </BenefitTilesFacilitator>
        </SectionContainer>

        {/* FEATURES SECTION */}

        <SectionContainer style={{ backgroundColor: '#fafbfd' }}>
          <Anchor id='features' />
          <GradientHeader
            gradientFrom='#ff9b49'
            gradientTo='#ffc92b'
            angle='285'
          >
            Features
          </GradientHeader>

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

            <FeatureItemContainer className='penultimate-feature-item-container'>
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
          </TwoFeaturesPerRowFacilitator>
        </SectionContainer>

        {/* LAST SECTION */}

        <SectionContainer className='last-section'>
          <Header as='h3'>Get started on a 1 month free trial!</Header>
          <p style={{ fontWeight: 'bold' }}>
            It is only £50/month* with no fixed contract.
          </p>
          <p>You can cancel anytime if it doesn't help you close your round!</p>
          <Button className='full-width-on-mobile free-trial-button centered-button-always'>
            Start your 1-month free trial
          </Button>
          <p style={{ fontSize: '11px', marginBottom: '0' }}>*excl. VAT</p>
        </SectionContainer>
      </MainContainer>
    </>
  );
}
