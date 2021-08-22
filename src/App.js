import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import researchgate from './images/researchgate.svg';
import twitter from './images/inaturalist.svg';
import github from './images/github.png';
import googleScholar from './images/google-scholar.svg';
import ResearchListPage from './pages/ResearchListPage';
import ContactPage from './pages/ContactPage'
import hamburger from './images/hamburger.png';
import breakpoint from './breakpoints';
import styled from 'styled-components';
import { useState } from 'react';
import PublicationsPage from './pages/PublicationsPage';
import MembersPage from './pages/MembersPage';
import JoinUsPage from './pages/JoinUsPage';
import ResearchPage from './pages/ResearchPage'

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: #407A52;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
  z-index: 2;
`;

const HomeButton = styled(Link)`
  color: #fefcef;
  font-weight: bold;
  text-decoration: none;
`;

const Hamburger = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${hamburger});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${breakpoint.sm}{
    display: none;
  }
`;

const Navs = styled.div`
  display: none;

  @media ${breakpoint.sm} {
    display: flex;
  }
`;

const Nav = styled(Link)`
  text-decoration: none;
  transition: all 0.4s;
  padding: 0 0 0 20px;
  color: #fefcef;

  ${props => props.matchedNav &&`
    font-weight: bold;
    color: #E29C45;
  `};
`;

const MobileNavWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: #407A52;
  height: ${props => props.open ? '260px' : '0px'};
  transition: all 0.4s ease-out;
`;

const MobileNav = styled(Link)`
  color: #fefcef;
  text-decoration: none;
  opacity: 0;
  transition: all 0.4s;
  padding: 0 0 0 30px;
  height: 0;

  ${props => props.open &&`
    opacity: 1;
    height: 20px;
    padding: 20px 0 20px 30px;
  `};
`;

const BodyContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 100px);
  background-color: #F2F1EF;
  padding: 80px 40px 50px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${breakpoint.sm} {
    padding: 80px 100px 50px 100px;
  }
`;

const Footer = styled.div`
  background-color: #F2F1EF;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
`;

const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  grid-column-gap: 8px;
  margin: 0 0 0 20px;
`;

const Line = styled.div`
  background-color: #407A52;
  height: 2px;
  width: 100%;
`;

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  &: hover{
    transform: rotate(-10deg) scale(1.2, 1.2);
    transition: transform 0.5s;
  }
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
`;

const navs = [{
  id: "about",
  name: "ABOUT",
}, {
  id: "research",
  name: "RESEARCH",
},
{
  id: "members",
  name: "MEMBERS"
}, {
  id: "publications",
  name: "PUBLICATIONS"
}, {
  id: "contact",
  name: "CONTACT"
}, {
  id: "join-us",
  name: "JOIN US"
}];

function App() {
  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(navs[0].id);

  return (
    <Router>
      <Header open={open}>
        <HomeButton to="/">
          KEKE WEB
        </HomeButton>
        <Navs>
          {navs.map(nav => {
            const matchedNav = nav.id === currentTab;

            return (
            <Nav 
              onClick={() => setCurrentTab(nav.id)}
              matchedNav={matchedNav}
              key={nav.id}
              to={`/${nav.id}`}>
              {nav.name}
            </Nav>
          )})}
        </Navs>
        <Hamburger onClick={() => setOpen(!open)} />
        <MobileNavWrapper open={open}>
          {navs.map(nav => (
            <MobileNav
              key={nav.id}
              onClick={() => setOpen(false)}
              open={open} 
              to={`/${nav.id}`}>
              {nav.name}
            </MobileNav>
          ))}
        </MobileNavWrapper>
      </Header>
      <BodyContainer>
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/research/:id">
            <ResearchPage />
          </Route>
          <Route path="/research">
            <ResearchListPage />
          </Route>
          <Route path="/publications">
            <PublicationsPage />
          </Route>
          <Route path="/members">
            <MembersPage />
          </Route>
          <Route path="/join-us">
            <JoinUsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BodyContainer>
      <Footer>
        <Line />
        <SocialMediaContainer>
          <IconWrapper target="_blank" rel="noreferrer" href="https://www.aljazeera.com/gallery/2019/10/8/hot-air-balloons-ride-over-turkeys-iconic-cappadocia#:~:text=Cappadocia%2C%20preserved%20as%20a%20UNESCO,in%20Cappadocia%2C%20central%20Turkey.%20%5B">
            <Icon src={researchgate} alt="facebook-icon" />
          </IconWrapper>
          <IconWrapper target="_blank" rel="noreferrer" href="https://www.aljazeera.com/gallery/2019/10/8/hot-air-balloons-ride-over-turkeys-iconic-cappadocia#:~:text=Cappadocia%2C%20preserved%20as%20a%20UNESCO,in%20Cappadocia%2C%20central%20Turkey.%20%5B">
            <Icon src={googleScholar} alt="github-icon" />
          </IconWrapper>
          <IconWrapper target="_blank" rel="noreferrer" href="https://www.aljazeera.com/gallery/2019/10/8/hot-air-balloons-ride-over-turkeys-iconic-cappadocia#:~:text=Cappadocia%2C%20preserved%20as%20a%20UNESCO,in%20Cappadocia%2C%20central%20Turkey.%20%5B">
            <Icon src={twitter} alt="twitter-icon" />
          </IconWrapper>
          <IconWrapper target="_blank" rel="noreferrer" href="https://www.aljazeera.com/gallery/2019/10/8/hot-air-balloons-ride-over-turkeys-iconic-cappadocia#:~:text=Cappadocia%2C%20preserved%20as%20a%20UNESCO,in%20Cappadocia%2C%20central%20Turkey.%20%5B">
            <Icon style={{width: 34, height: 34}} src={github} alt="github-icon" />
          </IconWrapper>
        </SocialMediaContainer>
      </Footer>
    </Router>
  );
}

export default App;
