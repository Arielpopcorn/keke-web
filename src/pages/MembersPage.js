import styled from 'styled-components';
import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
import avatar4 from '../images/avatar4.jpg';
import avatar5 from '../images/avatar5.jpg';
import breakpoint from '../breakpoints';

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

const members = [{
  id: 1,
  name: "Ariel",
  position: "student",
  speciality: "code",
  cover: avatar1,
  content: "Advocates are the rarest personality types of all. Still, Advocates leave their mark on the world. They have a deep sense of idealism and integrity, but they aren’t idle dreamers – they take concrete steps to realize their goals and make a lasting impact. Advocates’ unique combination of personality traits makes them complex and quite versatile. For example, Advocates can speak with great passion and conviction, especially when standing up for their ideals. At other times, however, they may choose to be soft-spoken and understated, preferring to keep the peace rather than challenge others."
}, {
  id: 2,
  name: "Anny",
  position: "sub student",
  speciality: "speak",
  cover: avatar2,
  content: "Although they may seem quiet or unassuming, Mediators (INFPs) have vibrant, passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. These personalities are known for their sensitivity – Mediators can have profound emotional responses to music, art, nature, and the people around them. Idealistic and empathetic, Mediators long for deep, soulful relationships, and they feel called to help others. But because this personality type makes up such a small portion of the population, Mediators may sometimes feel lonely or invisible, adrift in a world that doesn’t seem to appreciate the traits that make them unique. All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost."
}, {
  id: 3,
  name: "Sandy",
  position: "sub sub student",
  speciality: "rap",
  cover: avatar3,
  content: "Protagonists (ENFJs) feel called to serve a greater purpose in life. Thoughtful and idealistic, these personality types strive to have a positive impact on other people and the world around them. They rarely shy away from an opportunity to do the right thing, even when doing so is far from easy. Protagonists are born leaders, which explains why these personalities can be found among many notable politicians, coaches, and teachers. Their passion and charisma allow them to inspire others not just in their careers but in every arena of their lives, including their relationships. Few things bring Protagonists a deeper sense of joy and fulfillment than guiding friends and loved ones to grow into their best selves."
}, {
  id: 4,
  name: "Joe",
  position: "sub sub sub student",
  speciality: "sing",
  cover: avatar4,
  content: "Campaigners (ENFPs) are true free spirits – outgoing, openhearted, and open-minded. With their lively, upbeat approach to life, they stand out in any crowd. But even though they can be the life of the party, Campaigners don’t just care about having a good time. These personality types run deep – as does their longing for meaningful, emotional connections with other people. Friendly and outgoing, Campaigners are devoted to enriching their relationships and their social lives. But beneath their sociable, easygoing exteriors, they have rich, vibrant inner lives as well. Without a healthy dose of imagination, creativity, and curiosity, a Campaigner simply wouldn’t be a Campaigner."
}, {
  id: 5,
  name: "Kevin",
  position: "sub sub sub student",
  speciality: "jump",
  cover: avatar5,
  content: "It can be lonely at the top. As one of the rarest personality types – and one of the most capable – Architects (INTJs) know this all too well. Rational and quick-witted, Architects may struggle to find people who can keep up with their nonstop analysis of everything around them."
}]

function MembersPage() {
  return (
    <Wrapper>
      <Title>Members</Title>
        {members.map(member => (
          <MemberContainer>
            <AvatarContainer>
              <Avatar src={member.cover} />
            </AvatarContainer>
            <MemberContent>
              <ContentTitleWrapper style={{display: 'flex'}}>
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
