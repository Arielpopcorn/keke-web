import styled from 'styled-components';
import pig from '../images/pig.jpg';

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 40px;
  margin: 24px 0 0 0;
`;

const AboutMeWrapper = styled.div`

`;

const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
`;

function PublicationsPage() {
  return (
    <div>
      <Title>PublicationsPage</Title>
    </div>
  );
}

export default PublicationsPage;
