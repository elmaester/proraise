import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  GlobalStyle,
  whiteSpaceSidesMixin,
  secondaryColor,
  mainColor,
} from '../style';
import InMaintenanceImage from './../svg/in-maintenance.svg';

const MaintenanceLayout = styled.main`
  ${whiteSpaceSidesMixin}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MaintenanceLogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
  }
  margin: 80px auto;
  span {
    color: ${mainColor};
    font-size: 38px;
    margin-left: 5px;
    font-weight: bold;
  }
`;

const MaintenanceHeader = styled.h1`
  color: ${mainColor};
  font-size: 36px;
  font-weight: bold;
  margin: 0 auto 20px auto;
`;

const MaintenanceParagraph = styled.p`
  color: ${secondaryColor};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.44;
`;

export default function Maintenance() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Down for Maintenance - ProRaise</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito&display=swap'
          rel='stylesheet'
        />
      </Head>

      <MaintenanceLayout>
        <MaintenanceLogoContainer>
          <img src='/images/logo.png' />
          <span>ProRaise</span>
        </MaintenanceLogoContainer>
        <MaintenanceHeader>We'll be back soon</MaintenanceHeader>
        <MaintenanceParagraph>
          The platform is down for scheduled maintenance.
        </MaintenanceParagraph>
        <MaintenanceParagraph>
          We expect to be back online shortly.
        </MaintenanceParagraph>
        <InMaintenanceImage style={{ marginTop: '80px' }} />
      </MaintenanceLayout>
    </>
  );
}
