import styled from 'styled-components';
import breakpoint from '../breakpoints';
import pig from '../images/pig.jpg';

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-column-gap: 72px;
  margin: 24px 0 0 0;

  @media ${breakpoint.sm} {
    grid-template-columns: repeat(2, auto);
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Name = styled.h2`
  margin: 12px 0 0 0;
  font-size: 16px;
  line-height: 32px;
`;

const Status = styled.p`
  font-size: 16px;
  line-height: 32px;
`

const AboutMeWrapper = styled.div`
  margin: 24px 0 0 0;

  @media ${breakpoint.sm} {
    margin: 0;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
`;

function HomePage() {
  return (
    <div>
      <Title>About</Title>
      <ContentWrapper>
        <Profile>
          <Avatar src={pig} alt="Avatar" />
          <Name>Po-Ru Ko</Name>
          <Status>NTU assistant professor </Status>
        </Profile>
        <AboutMeWrapper>
          <Text>My research program aims to understand what determines the strength of species interactions and predict the community- and ecosystem-level consequences of these interactions. Species interact with competitors, predators, and mutualists within ecological communities; understanding how these complex interactions maintain species diversity provides the necessary knowledge for predicting and regulating the state of ecological systems. Currently, I focus on how plant communities are structured by the interactions among plants and their associated soil microbes, but I am excited about potential collaborations that tackle similar questions in other systems across the tree of life.</Text>
        </AboutMeWrapper>
      </ContentWrapper>
    </div>
  );
}

export default HomePage;
