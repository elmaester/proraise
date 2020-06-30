import styled from 'styled-components';
import PrivacyPolicy from '../components/privacy-cookie-policy/PrivacyPolicy';
import CookiePolicy from '../components/privacy-cookie-policy/CookiePolicy';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState } from 'react';
import {
  GlobalStyle,
  whiteSpaceSidesMixin,
  mainColor,
  mainColorHover,
  secondaryColor,
  secondaryColorHover,
  grey,
  blueyGrey,
  forTabletLandscapeUp,
  forTabletPortraitUp,
  forDesktopUp,
  forPhoneOnly,
  LogoContainer,
  PseudoLogo,
} from '../style';
import Head from 'next/head';

export const offsetValue = 65;

export const Divider = styled.hr`
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${grey};
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: ${mainColor};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PrivacyCookiePolicyStyle = styled.div`
  ${whiteSpaceSidesMixin}
  background-color: #fafbfd;
  font-family: 'Nunito', sans-serif;

  .nav-container {
    position: sticky;
    top: 0;
    background-color: #fff;
  }

  .legal-page__navigation {
    display: flex;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 0 30px;
    ${forPhoneOnly} {
      justify-content: space-around;
    }

    .item {
      &:not(:last-of-type) {
        margin-right: 30px;
      }
      &.selected a {
        border-bottom: 1px solid ${secondaryColor};
        color: ${secondaryColor};
      }
      a {
        text-decoration: none;
        padding: 20px 0;
        font-size: 14px;
        color: ${blueyGrey};
        cursor: pointer;
        transition: unset;
        font-weight: 600;
        text-align: center;
        display: inline-block;
        transition: 0.3s ease-in-out;
        @media (max-width: 320px) {
          padding-left: 0px;
          padding-right: 0px;
          letter-spacing: -0.3px;
        }
        &:hover {
          color: ${secondaryColor};
        }
      }
    }
  }
`;

const InnerContainer = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  padding-top: 30px;
  padding-bottom: 90px;
  padding-left: 30px;
  padding-right: 30px;
  ${forPhoneOnly} {
    padding-left: 10px;
    padding-right: 10px;
  }
  line-height: 1.42857143;
  background-color: #fff;

  #info {
    color: ${blueyGrey};
  }

  a,
  p,
  h1 {
    font-size: 14px;
  }

  p {
    color: #333;
    font-weight: 400;
    margin: 12px 0;
  }

  h1 {
    margin: 0;
    line-height: 30px;
    font-weight: bold;
    color: ${mainColor};
  }

  a {
    text-decoration: none;
    color: ${secondaryColor};
    transition: 0.3s all ease-in-out;
    font-weight: bold;
    &:hover {
      color: ${secondaryColorHover};
    }
  }

  ol {
    padding-left: 5%;
    list-style: none;
    width: 100%;
    span {
      padding-right: 5px;
    }
    li {
      display: flex;
      flex-wrap: wrap;
      p {
        margin-top: 0;
        width: calc(100% - 50px);
      }
    }
  }

  .table_of_content {
    text-transform: uppercase;
    margin-top: 27px;
    font-weight: bold;
  }

  .legal-page__content--title {
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export default function privacyCookiePolicy() {
  const [selectedTab, setSelectedTab] = useState('Privacy Policy');

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>ProRaise{` - ${selectedTab}`}</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <PrivacyCookiePolicyStyle id='top'>
        <LogoContainer
          style={{
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img style={{ height: '28px' }} src='/images/logo.png' />
          <PseudoLogo style={{ fontSize: '24px' }}>ProRaise</PseudoLogo>
        </LogoContainer>
        <PageTitle>Privacy and Cookie Policies</PageTitle>
        <div className='nav-container'>
          <div class='legal-page__navigation'>
            <div
              className={`item${
                selectedTab === 'Privacy Policy' ? ' selected' : ''
              }`}
            >
              <AnchorLink
                href='#top'
                onClick={() => {
                  setSelectedTab('Privacy Policy');
                }}
              >
                Privacy Policy
              </AnchorLink>
            </div>
            <div
              className={`item${
                selectedTab === 'Cookie Policy' ? ' selected' : ''
              }`}
            >
              <AnchorLink
                href='#top'
                onClick={() => {
                  setSelectedTab('Cookie Policy');
                }}
              >
                Cookie Policy
              </AnchorLink>
            </div>
          </div>
        </div>
        <InnerContainer>
          {selectedTab === 'Privacy Policy' && <PrivacyPolicy />}
          {selectedTab === 'Cookie Policy' && (
            <CookiePolicy
              goToPrivacy={() => setSelectedTab('Privacy Policy')}
            />
          )}
        </InnerContainer>
      </PrivacyCookiePolicyStyle>
    </>
  );
}
