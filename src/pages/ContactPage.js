import styled from 'styled-components';
import email from '../constants/images/email.png';
import location from '../constants/images/location.png';
import phone from '../constants/images/phone.png';

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
  text-align: center;
`;

const Description = styled.div`

`;

const ContactSection = styled.div`
  display: grid;
  grid-row-gap: 24px;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  margin: 24px 0 0 0;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled.img`
  align-self: center;
  height: 24px;
  width: 24px;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
  animation-name: bounce;
  margin: 0 20px 0 0;

  &:hover {
    transform: translateY(-3px) scale(1.2, 1.2);
    transition: transform 0.5s;
  }
`;

const Text = styled.p`
  line-height: 28px;
  font-weight: 600;
`;

function ContactPage() {
  return (
    <Wrapper>
      <Title>Contact us</Title>
      <DescriptionWrapper>
        <Description>Please contact/ visit me using the following information.</Description>
        <Description>Alternatively, follow me on Twitter and other social media in the bottom.</Description>
      </DescriptionWrapper>
      <ContactSection>
        <ContactContainer>
          <Icon className="bounce" src={phone} alt="phone" />
          <Text>+886-2-3366-2467</Text>
        </ContactContainer>
        <ContactContainer>
          <Icon className="bounce" src={email} alt="email" />
          <Text>pojuke@ntu.edu.tw</Text>
        </ContactContainer>
        <ContactContainer>
          <Icon className="bounce" src={location} alt="location" />
          <Text>Life Science Building R635</Text>
        </ContactContainer>
      </ContactSection>
    </Wrapper>
  );
}

export default ContactPage;
