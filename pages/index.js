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
  LogoContainer,
  PseudoLogo,
  Header,
  HeaderImageHolder,
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

import Maintenance from '../components/Maintenance';

export default function Home() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPosition(currPos.y);
  });

  const signUpLink = 'https://go.proraise.co/register/founders';
  const logInLink = 'https://go.proraise.co';

  const inMaintenance = false;

  return inMaintenance ? (
    <Maintenance />
  ) : (
    <>
      <GlobalStyle />
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: '<!-- Google Tag Manager -->',
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N83FPLZ');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: '<!-- End Google Tag Manager -->',
          }}
        />
        <title>ProRaise</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito&display=swap'
          rel='stylesheet'
        />
        <script
          src='//rum-static.pingdom.net/pa-5f48cd1bf07a4c0013000152.js'
          async
        ></script>
      </Head>

      <script
        dangerouslySetInnerHTML={{
          __html: '<!-- Google Tag Manager (noscript) -->',
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N83FPLZ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: '<!-- End Google Tag Manager (noscript) -->',
        }}
      />

      <NavBar className={scrollPosition < -20 && 'shadow-activated'}>
        <LogoContainer href='#top'>
          <img src='/images/logo.png' />
          <PseudoLogo>ProRaise</PseudoLogo>
        </LogoContainer>
        <div>
          <NavItem className='hidden-on-mobile' href='#benefits'>
            Benefits
          </NavItem>
          <NavItem className='hidden-on-mobile' href='#features'>
            Features
          </NavItem>
          <NavItem as='a' href={logInLink} className='login-button'>
            Login
          </NavItem>
          <Button
            href={signUpLink}
            style={{ letterSpacing: 'normal' }}
            onClick={() => {
              gtag('event', 'Click sign-up', {
                event_category: 'registration',
                event_label: 'Click sign-up',
              });
            }}
          >
            Sign up
          </Button>
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
            <Header className='top-section-left-aligned'>
              Better fundraising for founders
            </Header>
            <p>
              <span style={{ fontWeight: 'bold' }}>
                Scaling your business may need funding from investors which can
                be time consuming and complex.
              </span>{' '}
              ProRaise helps you run your fundraising more efficiently, saving
              you time
            </p>
            <Button
              href={signUpLink}
              className='full-width-on-mobile centered-button larger-padding'
            >
              Start fundraising
            </Button>
          </div>
        </SectionContainer>

        {/* BENEFITS SECTION */}

        <SectionContainer style={{ backgroundColor: '#ebf6f7' }}>
          <Anchor id='benefits' />
          <Header className='left-aligned-header'>Benefits</Header>

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
              <p>Present your company professionally to investors</p>
            </BenefitContainer>

            <BenefitContainer>
              <BenefitSvgHolder>
                <BenefitImage3 />
              </BenefitSvgHolder>
              <p>Be investment ready and accelerate your capital raise</p>
            </BenefitContainer>
          </BenefitTilesFacilitator>
        </SectionContainer>

        {/* FEATURES SECTION */}

        <SectionContainer style={{ backgroundColor: '#fafbfd' }}>
          <Anchor id='features' />
          <Header className='left-aligned-header'>Features</Header>

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
                <p>Fast and simple to engage with investors</p>
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
                <h3>Gain feedback and insight</h3>
                <p>Monitor engagement levels</p>
              </FeatureText>
            </FeatureItemContainer>

            <FeatureItemContainer>
              <FeatureImageCircleContainer>
                <FeatureImage6 />
              </FeatureImageCircleContainer>
              <FeatureText>
                <h3>Track interests</h3>
                <p>Instant status updates</p>
              </FeatureText>
            </FeatureItemContainer>
          </TwoFeaturesPerRowFacilitator>
        </SectionContainer>

        {/* LAST SECTION */}

        <SectionContainer className='last-section'>
          <Header as='h3'>Get started on a 1 month free trial</Header>
          <p style={{ fontWeight: 'bold' }}>
            After that, it is £50 + VAT per month and you can cancel anytime
          </p>
          <Button
            href={signUpLink}
            className='full-width-on-mobile free-trial-button centered-button-always larger-padding'
          >
            Start your free trial
          </Button>
          <a
            className='privacy-link'
            href='/privacy-cookie-policy'
            target='_blank'
          >
            Cookie and Privacy policies
          </a>
        </SectionContainer>
      </MainContainer>
    </>
  );
}
