import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import breakpoint from '../breakpoints';
import { useParams } from "react-router-dom";
import { RESEARCH_LIST } from '../constants/researchList';
import backIcon from '../constants/images/back.png';
import Carousel from '../components/Carousel';

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

const ResearchTitle = styled.h1`
  margin: 0 0 36px 0;
  font-size: 24px;
  text-align: left;

  @media ${breakpoint.sm} {
    margin: 0 0 48px 0;
  }
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

  return (
    <Wrapper>
      <BackButton to={{ pathname:"/research", state: { backTag: location.state} }}>
        <Icon src={backIcon} alt="back" />
        <p>Back</p>
      </BackButton>
      <ResearchTitle>
        {currentResearch.title}
      </ResearchTitle>
      <Carousel slides={currentResearch.slides} />
      {/* <ResearchCover src={currentResearch.cover} /> */}
      {currentResearch.paragraph.map((perParagraph, index) => (
        <Paragraph key={index}>
          {perParagraph}
        </Paragraph>
      ))}
    </Wrapper>
  );
}

export default ResearchPage;
