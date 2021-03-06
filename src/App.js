import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import researchgate from './constants/images/researchgate.svg';
import twitter from './constants/images/inaturalist.svg';
import github from './constants/images/github.png';
import googleScholar from './constants/images/google-scholar.svg';
import ResearchListPage from './pages/ResearchListPage';
import ContactPage from './pages/ContactPage'
import hamburger from './constants/images/hamburger.png';
import breakpoint from './breakpoints';
import styled from 'styled-components';
import { useState } from 'react';
import PublicationsPage from './pages/PublicationsPage';
import MembersPage from './pages/MembersPage';
import JoinUsPage from './pages/JoinUsPage';
import ResearchPage from './pages/ResearchPage'
import ScrollToTop from './hooks/ScrollToTop';

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
  width: 24px;
  height: 24px;
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
  transition: all 0.2s ease-out;
`;

const MobileNav = styled(Link)`
  color: #fefcef;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  id: "people",
  name: "PEOPLE"
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

function App () {
  const currentUrl = window.location.href
  const currentNav = currentUrl.split('/')[currentUrl.split('/').length - 1]

  const [open, setOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(currentNav ?? navs[0].id);

  return (
    <Router>
      <ScrollToTop>
        <Header open={open}>
          <HomeButton to="/">
            KE LAB
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
            <Route path="/people">
              <MembersPage />
            </Route>
            <Route path="/join-us">
              <JoinUsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            <Redirect
              exact
              from="/"
              to="/" />
          </Switch>
        </BodyContainer>
        <Footer>
          <Line />
          <SocialMediaContainer>
            <IconWrapper target="_blank" rel="noreferrer" href="https://www.researchgate.net/profile/Po-Ju-Ke">
              <Icon src={researchgate} alt="facebook-icon" />
            </IconWrapper>
            <IconWrapper target="_blank" rel="noreferrer" href="https://scholar.google.com/citations?user=6RfWMMkAAAAJ&hl=en&oi=ao">
              <Icon src={googleScholar} alt="github-icon" />
            </IconWrapper>
            <IconWrapper target="_blank" rel="noreferrer" href="https://twitter.com/chblueris?lang=en">
              <Icon src={twitter} alt="twitter-icon" />
            </IconWrapper>
            <IconWrapper target="_blank" rel="noreferrer" href="https://github.com/pojuke">
              <Icon style={{width: 34, height: 34}} src={github} alt="github-icon" />
            </IconWrapper>
          </SocialMediaContainer>
        </Footer>
      </ScrollToTop>
    </Router>
  );
}

export default App;
