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
  

  @media ${breakpoint.sm} {
    margin: 0 0 0 12px;
  }
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 48px 0;

  @media ${breakpoint.sm} {
    flex-direction: row;
    align-items: flex-start;
    margin: 0 0 100px 0;
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
  margin: 24px 0 0 0;
  width: 100%;

  @media ${breakpoint.sm} {
    margin: 0 0 0 36px;
  }
`;

const ContentTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  @media ${breakpoint.sm} {
    flex-direction: row;
    align-items: center;
  }
`;

const Button = styled.a`
  color: #000;
  margin: 24px 0 0 0;
  line-height: 20px;

  @media ${breakpoint.sm} {
    margin: 12px 0 0 0;
  }
`;

const Link = styled.a`
  color: #407A52;
  font-size: 14px;
  line-height: 28px;
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 28px;
`;

function MembersPage() {
  return (
    <Wrapper>
      <Title>People</Title>
        {MEMBERS.map(member => (
          <MemberContainer key={member.id}>
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
              <p>
                {member.content.map(c => {
                  if (c.url) {
                    return (
                      <Link key={c.id} type="button" href={c.url} target="_blank" rel="noreferrer">
                        {c.text}
                      </Link>
                    )
                  } 

                  return (
                    <Text key={c.id}>{c.text}</Text>
                  )
                })}  
              </p>
            </MemberContent>
          </MemberContainer>
        ))}
    </Wrapper>
  );
}

export default MembersPage;
