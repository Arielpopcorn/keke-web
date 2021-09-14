import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { MEMBERS } from '../constants/members'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
`;

const Title = styled.h1`
  margin: 36px 0 24px 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Position = styled.p`
  font-weight: bold;
  color: #407A52;
  margin: 0 0 0 12px;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoint.sm} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  flex-shrink: 0;
`;

const Avatar = styled.img`
  border-radius: 5px;
  position: absolute; 
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 0);
  transition: 0.3s ease clip-path;

  &:hover {
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
`;

const MemberContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin: 24px 0 48px 0;
  width: 100%;

  @media ${breakpoint.sm} {
    margin: 0 0 100px 36px;
  }
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 28px;
`;

const ContentTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.a`
  color: #000;
  margin: 24px 0 0 0;
  line-height: 20px;

  @media ${breakpoint.sm} {
    margin: 12px 0 0 0;
  }
`;


function MembersPage() {
  return (
    <Wrapper>
      <Title>People</Title>
        {MEMBERS.map(member => (
          <MemberContainer>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <AvatarContainer>
                <Avatar src={member.cover} />
              </AvatarContainer>
              {member.cv && (
                <Button type="button" href={member.cv} target="_blank" rel="noreferrer">
                  See my CV
                </Button>
              )}
            </div>
            <MemberContent>
              <ContentTitleWrapper>
                <Name>{member.name}</Name>
                <Position>{member.position}</Position>
              </ContentTitleWrapper>
              <Content>{member.content}</Content>
            </MemberContent>
          </MemberContainer>
        ))}
    </Wrapper>
  );
}

export default MembersPage;
