import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from '../breakpoints';
import { useParams } from "react-router-dom";
import { RESEARCH_LIST } from '../constants/researchList';
import backIcon from '../constants/images/back.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0 0 0;
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
  margin: 0 0 48px 0;
  font-size: 24px;
  text-align: center;
`;

const ResearchCoverContainer = styled.div`
  position: relative;
  width: 50%;
  padding-top: 50%;
  border-radius: 5px;
  flex-shrink: 0;
  margin: 0 0 48px 0;
`;

const ResearchCover = styled.img`
  border-radius: 5px;
  position: absolute; 
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const ResearchSubtitle = styled.h2`
  margin: 0 0 24px 0;
  text-align: center;
  font-size: 20px;
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

  return (
    <Wrapper>
      <BackButton to="/research">
        <Icon src={backIcon} alt="back" />
        <BackText>Back</BackText>
      </BackButton>
      <ResearchTitle>
        {currentResearch.content.title}
      </ResearchTitle>
      <ResearchCoverContainer>
        <ResearchCover src={currentResearch.cover} />
      </ResearchCoverContainer>
      <ResearchSubtitle>
        {currentResearch.content.subtitle}
      </ResearchSubtitle>
      <ResearchContent>
        {currentResearch.content.paragraph.map(p => (
          <Paragraph>{p}</Paragraph>
        ))}
      </ResearchContent>
    </Wrapper>
  );
}

export default ResearchPage;
