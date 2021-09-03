import styled from 'styled-components';
import breakpoint from '../breakpoints';
import pig from '../constants/images/keke.jpg';


const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-column-gap: 72px;
  max-width: 920px;
  margin: 32px 0 0 0;

  @media ${breakpoint.sm} {
    grid-template-columns: repeat(2, auto);
    margin: 48px 0 0 0;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  @media ${breakpoint.sm}{
    width: 200px;
    height: 200px;
  }
`;

const Name = styled.h2`
  margin: 12px 0 0 0;
`;

const Status = styled.p`
  line-height: 24px;
`

const AboutMeWrapper = styled.div`
  margin: 24px 0 0 0;

  @media ${breakpoint.sm} {
    margin: 0;
  }
`;

const Text = styled.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  line-height: 28px;
`;

function HomePage() {
  return (
    <div>
      <Title>About</Title>
      <ContentWrapper>
        <Profile>
          <Avatar src={pig} alt="Avatar" />
          <Name>Po-Ju Ke</Name>
          <Status>National Taiwan University</Status>
          <Status>Assistant Professor</Status>
        </Profile>
        <AboutMeWrapper>
          <Text>Our research aims to understand what determines the strength of species interactions and predict the community- and ecosystem-level consequences of these interactions. Species interact with competitors, predators, and mutualists within ecological communities; understanding how these complex interactions maintain species diversity provides the necessary knowledge for predicting and regulating the state of ecological systems.</Text>
          <Text>Research topics in the lab are broadly related to community ecology and theoretical ecology, with approaches ranging from theoretical modeling to field observations and manipulative experiments. Currently, we focus on how plant communities are structured by the interactions among plants and their associated soil microbes, but we are also excited about potential collaborations that tackle similar questions in other systems across the tree of life.</Text>
        </AboutMeWrapper>
      </ContentWrapper>
    </div>
  );
}

export default HomePage;
