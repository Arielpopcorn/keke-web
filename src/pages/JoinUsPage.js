import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const DescriptionWrapper = styled.div`
  margin: 24px 0 0 0;
  text-align: left;
  
`;

const Link = styled.a`
  color: #407A52;
  font-weight: bold;
`;

const Description = styled.div`
  margin: 0 0 24px 0;
`;

const Text = styled.p`
  line-height: 28px;
  font-weight: 600;
`;


function JoinUsPage() {
  return (
    <Wrapper>
      <Title>Join us</Title>
      <DescriptionWrapper>
        <Description>Feel free to email me (
          {' '}
          <Link href="mailto:pojuke@ntu.edu.tw">
            pojuke@ntu.edu.tw
          </Link>
          {' '}
          ) if you are interested in joining the lab (please include a CV and brief description of your interests and motivations). The work in the lab encompasses theoretical and empirical research, with topics spanning community ecology, theoretical ecology, plant ecology, and microbial ecology. Given the multiple research approaches taken in the lab, scientific curiosity and collegiality are the only prerequisites although some experience with either programming, field work, or wet lab would be great.</Description>
        <Description>For Masters and PhD students, please contact me as early as possible in the application cycle (see 
          {' '}
          <Link href="https://ecology.lifescience.ntu.edu.tw/doku.php/zh-tw/admission_foreign" target="_blank" rel="noreferrer">
            IEEB
          </Link> 
          {' '}
          website for deadlines). Potential undergraduate researchers from NTU or elsewhere should contact me following the above instructions. Prospective postdocs should have a relevant research background with demonstrable publication record; please get in touch to discuss funding opportunities and other potential fellowship applications.</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
}

export default JoinUsPage;
