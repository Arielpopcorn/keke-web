import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import breakpoint from '../breakpoints';
import { useParams } from "react-router-dom";
import { RESEARCH_LIST } from '../constants/researchList';
import backIcon from '../constants/images/back.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 0 0;
  max-width: 920px;

  @media ${breakpoint.sm} {
    margin: 48px 0 0 0;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 100px;
  left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: #000;

  @media ${breakpoint.sm} {
    left: 40px;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
`;

const BackText = styled.p`
  
`;

const ResearchTitle = styled.h1`
  margin: 0 0 36px 0;
  font-size: 24px;
  text-align: left;

  @media ${breakpoint.sm} {
    margin: 0 0 48px 0;
  }
`;

const ResearchCoverContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 67%;
  border-radius: 5px;
  flex-shrink: 0;
  margin: 0 0 36px 0;

  @media ${breakpoint.sm} {
    width: 80%;
    padding-top: 50%;
    margin: 0 0 48px 0;
  }
`;

const ResearchCover = styled.img`
  border-radius: 5px;
  position: absolute; 
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const ResearchContent = styled.div`

`;

const Paragraph = styled.p`
  margin: 0 0 24px 0;
  font-size: 16px;
  line-height: 32px;
`;

function ResearchPage() {
  const { id } = useParams();
  const currentResearch = RESEARCH_LIST.find(research => research.id === id);

  const location = useLocation();
  console.log('location', location)

  return (
    <Wrapper>
      <BackButton to={{ pathname:"/research", state: {backTag: location.state} }}>
        <Icon src={backIcon} alt="back" />
        <BackText>Back</BackText>
      </BackButton>
      <ResearchTitle>
        {currentResearch.title}
      </ResearchTitle>
      <ResearchCoverContainer>
        <ResearchCover src={currentResearch.cover} />
      </ResearchCoverContainer>
      <ResearchContent>
        {currentResearch.paragraph.map(p => (
          <Paragraph>{p}</Paragraph>
        ))}
      </ResearchContent>
    </Wrapper>
  );
}

export default ResearchPage;
