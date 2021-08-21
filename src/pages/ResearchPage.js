import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { useParams } from "react-router-dom";
import { researchList } from '../constants/researchList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 48px 0 0 0;
  max-width: 920px;
`;

const ResearchTitle = styled.h1`
  margin: 0 0 48px 0;
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
`;

const ResearchContent = styled.div`

`;

const Paragraph = styled.p`
  margin: 0 0 24px 0;
  font-size: 16px;
  line-height: 32px;
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


function ResearchPage() {
  const { id } = useParams();
  const currentResearch = researchList.find(research => research.id === id)

  return (
    <Wrapper>
      <ResearchTitle>{currentResearch.content.title}</ResearchTitle>
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
