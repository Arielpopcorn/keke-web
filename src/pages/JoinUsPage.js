import styled from 'styled-components';
import pig from '../images/pig.jpg';

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 40px;
  margin: 24px 0 0 0;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;


function JoinUsPage() {
  return (
    <div>
      <Title>Join us</Title>
    </div>
  );
}

export default JoinUsPage;
