import styled from 'styled-components';
import email from '../images/email.png'
import location from '../images/location.png'
import phone from '../images/phone.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
`;

const DescriptionWrapper = styled.div`
  margin: 24px 0 0 0;
`;

const Description = styled.div`

`;

const ContactSection = styled.div`
  display: grid;
  grid-row-gap: 24px;
  align-items: center;
  border: 1px solid #407A52;
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
  height: 30px;
  width: 30px;
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
  border-bottom: 1px black solid;
`;

function ContactPage() {
  return (
    <div>
      <Wrapper>
        <Title>Contact us</Title>
        <DescriptionWrapper>
          <Description>Please contact/ visit me using the following information.</Description>
          <Description>Alternatively, follow me on Twitter and other social media in the bottom.</Description>
        </DescriptionWrapper>
        <ContactSection>
          <ContactContainer>
            <Icon className="bounce" src={phone} alt="phone" />
            <Text>0983001971</Text>
          </ContactContainer>
          <ContactContainer>
            <Icon className="bounce" src={email} alt="email" />
            <Text>pojuke@stanford.edu</Text>
          </ContactContainer>
          <ContactContainer>
            <Icon className="bounce" src={location} alt="location" />
            <Text>385 Serra mall, rm 488, Stanford, CA94305, USA</Text>
          </ContactContainer>
        </ContactSection>
      </Wrapper>
    </div>
  );
}

export default ContactPage;
