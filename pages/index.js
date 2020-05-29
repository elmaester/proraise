import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Nunito;
}
`;

const Header = styled.h2`
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
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
  display: inline-block;
`;

const Button = styled.a`
  padding: 14px 25px;
  color: #fff;
  background-color: #ff7702;
  border-radius: 5px;
  font-family: Nunito;
  font-weight: bold;
  transition: 0.25s;
  cursor: pointer;
  &:hover {
    background-color: #e66b00;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.a`
  font-size: 16px;
  font-weight: bold;
  font-family: Nunito;
  transition: 0.25s;
  display: inline-block;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    color: #1f7be8;
  }
`;

export default function Home() {
  return (
    <div>
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
        <Header as='h1' color='#ff7702' style={{ fontWeight: '300' }}>
          ProRaise
        </Header>
        <div>
          <NavItem>Benefits</NavItem>
          <NavItem>Features</NavItem>
          <NavItem>Login</NavItem>
          <Button>Sign up</Button>
        </div>
      </NavBar>

      <main>
        <section>
          <Header>
            Help founders navigate the capital raising process simply
          </Header>
          <p>
            Scaling your business may need funding from investors. This can be a
            time consuming and complex process.
          </p>
          <p>
            ProRaise helps you run your fundraising more efficiently, saving you
            time.
          </p>
          <Button>Start fundraising</Button>
        </section>

        <section>
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
        </section>

        <section>
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
        </section>

        <section>
          <h3>Get started on a 1 month free trial!</h3>
          <p>It is only ￡50/month* with no fixed contract.</p>
          <p>You can cancel anytime if it doesn't help you close your round!</p>
          <Button>Start your 1-month free trial</Button>
          <p>*excl. VAT</p>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
