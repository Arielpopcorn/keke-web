import { Fragment } from 'react';
import styled from 'styled-components';
import { PUBLICATIONS } from '../constants/publications';

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const PublicationsSection = styled.div`
  margin: 24px 0 0 0;
`;

const YearSection = styled.div`
  margin: 24px 0 0 0;
`;
const Year = styled.h2`
  background-color: #407A52;
  color: #FFF;
  width: max-content;
  padding: 0 8px 0 4px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 28px;
  margin: 0 0 12px 0;
`;

const Publication = styled.div`
  margin: 0 0 16px 0;
`;

const PublicationTitle = styled.p`
  margin: 0 0 12px 0;
  font-weight: bold;
  line-height: 22px;
`;

const Index = styled.span`
  color: #407A52;
  font-weight: bold;
`;

const AuthorParagraph = styled.p`
  line-height: 20px;
  margin: 0 0 8px 0;
`;

const Author = styled.span`
  font-size: 13px;
  line-height: 20px;
  color: ${props => props.isKe ? '#407A52' : 'black' };
  font-weight: ${props => props.isKe ? 'bold' : 'medium' };
`;

const BulletPoint = styled.ul`
  padding-left: 20px;
`;

const Link = styled.a`
  color: #407A52;
`;

const Button = styled.a`
  border: 1px solid #407A52;
  border-radius: 2px;
  padding: 0 4px;
  color: #407A52;
  text-decoration: none;
  margin: 0 12px 0 0;
  line-height: 20px;
`;

function PublicationsPage() {
  const years = PUBLICATIONS.map(publication => publication.year).reduce((years, currentYear) => {
    if (years.includes(currentYear)) return years;

    return [...years, currentYear]
  }, []);

  const sortedPublications = years.map((year, index) => {
    const yearlyPublications = PUBLICATIONS.filter(publication => year === publication.year);

    return ({
      [year]: yearlyPublications
    })
  }).reverse();
  
  return (
    <div>
      <Title>Publications</Title>
      <PublicationsSection>
        {sortedPublications.map((sortedPublication) => (
            <YearSection key={Object.keys(sortedPublication)}>
              <Year>{Object.keys(sortedPublication)}</Year>
              {Object.values(sortedPublication).map((publication, index) => (
                <Fragment key={index}>
                  {publication.reverse().map(p => {
                    const sortedIfMatchedKe = p.authors.map(author => ({
                      isKe: (author === "Po-Ju Ke" || author === "Po-Ju Ke*") ? true : false,
                      author,
                    }))

                    return (
                    <Publication key={p.id}>
                      {/* <Index>[{p.id}]</Index> */}
                      <PublicationTitle>
                        {p.title}
                      </PublicationTitle>
                      <AuthorParagraph>
                        {sortedIfMatchedKe.map((a, index) => (
                          <Fragment key={index}>
                            <Author isKe={a.isKe}>
                              {a.author}
                            </Author>
                            <Author>{index !== sortedIfMatchedKe.length - 1 ? ", " : null}</Author>
                          </Fragment>
                        ))}
                        <Author>
                          &nbsp
                          ({p.year})
                          &nbsp
                          {p.magazine}
                        </Author>
                      </AuthorParagraph>
                      {p.highlighted.map(highlightedPublication => (
                        <BulletPoint key={highlightedPublication.id}>
                          <li>
                            {(highlightedPublication.content ?? []).map(c => {
                              if (c.url) {
                                return (
                                  <Link key={c.id} type="button" href={c.url} target="_blank" rel="noreferrer">
                                    {c.text}
                                  </Link>
                                )
                              } 

                              return (
                                <span>{c.text}</span>
                              )
                            })}
                          </li>
                        </BulletPoint>
                      ))}
                      <div>
                        <Button type="button" href={p.pdf} target="_blank" rel="noreferrer">
                          PDF
                        </Button>
                        <Button type="button" href={p.doi} target="_blank" rel="noreferrer">
                          DOI
                        </Button>
                      </div>
                    </Publication>
                  )})}
                </Fragment>
              ))}
            </YearSection>
        ))}
      </PublicationsSection>
    </div>
  );
}

export default PublicationsPage;
