import styled from 'styled-components';
import TermsOfUse from '../components/privacy-cookie-policy/TermsOfUse';
import PrivacyPolicy from '../components/privacy-cookie-policy/PrivacyPolicy';
import CookiePolicy from '../components/privacy-cookie-policy/CookiePolicy';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState } from 'react';
import {
  GlobalStyle,
  whiteSpaceSidesMixin,
  forTabletLandscapeUp,
  forTabletPortraitUp,
  forDesktopUp,
  forPhoneOnly,
} from '../style';
import Head from 'next/head';

const PrivacyCookiePolicyStyle = styled.div`
  ${whiteSpaceSidesMixin}
  font-family: 'Montserrat', sans-serif;
  font-size: 12.6px;
  padding-top: 27px;
  padding-bottom: 90px;
  line-height: 1.42857143;

  a,
  p,
  h1 {
    font-size: 12.6px;
  }

  p {
    color: #333;
    font-weight: 400;
    margin: 12px 0;
  }

  h1 {
    margin: 20px 0;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #1f7be8;
    transition: 0.3s all ease-in-out;
    font-weight: 500;
    &:hover {
      color: #004699;
    }
  }

  ol {
    padding-left: 5%;
    list-style: none;
    width: 100%;
    span {
      width: 25px;
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
    font-size: 14.4px;
    margin-top: 47px;
    font-weight: bold;
  }

  .nav-container {
    position: sticky;
    top: 0;
    background-color: #fff;
    padding-top: 27px;
  }

  .home-button {
    margin-bottom: 10px;
    a {
      padding: 11.7px 10.8px 9px;
      text-transform: uppercase;
    }
  }

  .legal-page__navigation {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    @media (max-width: 320px) {
      padding-left: 5px;
      padding-right: 5px;
    }

    .item {
      text-transform: uppercase;
      &:last-of-type {
        ${forTabletPortraitUp} {
          margin-right: 35px;
        }
        ${forTabletLandscapeUp} {
          margin-right: 50px;
        }
        ${forDesktopUp} {
          margin-right: 100px;
        }
      }
      &.selected a {
        border-bottom: 1px solid #1f7be8;
        color: #1f7be8;
      }
      a {
        padding: 11.7px 10.8px 9px;
        font-size: 10.8px;
        color: #434a54;
        cursor: pointer;
        transition: unset;
        font-weight: 600;
        text-align: center;
        display: inline-block;
        @media (max-width: 320px) {
          padding-left: 0px;
          padding-right: 0px;
          letter-spacing: -0.3px;
        }
        &:hover {
          color: #1f7be8;
        }
      }
    }
  }
`;

export default function privacyCookiePolicy() {
  const [selectedTab, setSelectedTab] = useState('Terms of Use');

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>ProRaise{` - ${selectedTab}`}</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='//fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i'
          rel='stylesheet'
        ></link>
      </Head>

      <PrivacyCookiePolicyStyle id='top'>
        <div className='nav-container'>
          <div className='home-button'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
          <div class='legal-page__navigation'>
            <div
              className={`item${
                selectedTab === 'Terms of Use' ? ' selected' : ''
              }`}
            >
              <AnchorLink
                href='#top'
                onClick={() => {
                  setSelectedTab('Terms of Use');
                }}
              >
                Terms of Use
              </AnchorLink>
            </div>{' '}
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
            </div>{' '}
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
        {selectedTab === 'Terms of Use' && <TermsOfUse />}
        {selectedTab === 'Privacy Policy' && <PrivacyPolicy />}
        {selectedTab === 'Cookie Policy' && <CookiePolicy />}
      </PrivacyCookiePolicyStyle>
    </>
  );
}
