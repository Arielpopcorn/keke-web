import { Fragment } from 'react';
import styled from 'styled-components';
import { publications } from '../constants/publications';

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const Author = styled.span`
  font-size: 16px;
  line-height: 32px;
  color: ${props => props.isKe ? 'red' : 'black' }
`;

function PublicationsPage() {
  const years = publications.map(publication => publication.year).reduce((years, currentYear) => {
    if (years.includes(currentYear)) return years;

    return [...years, currentYear]
  }, []);

  const sortedPublications = years.map((year, index) => {
    const yearlyPublications = publications.filter(publication => year === publication.year);

    return ({
      [year]: yearlyPublications
    })
  });
  
  return (
    <div>
      <Title>Publications</Title>
      <div>
        {sortedPublications.map((sortedPublication) => (
            <div key={Object.keys(sortedPublication)}>
              <h2>{Object.keys(sortedPublication)}</h2>
              {Object.values(sortedPublication).map((publication, index) => (
                <div key={index}>
                  {publication.map(p => {
                    const sortedIfMatchedKe = p.authors.map(author => ({
                      isKe: (author === "Ke, P.-J." || author === "Ke, P.-J.*") ? true : false,
                      author,
                    }))

                    return (
                    <div key={p.id}>
                      <p style={{fontWeight: "bold"}}>[{p.id}] {p.title}</p>
                      {sortedIfMatchedKe.map((a, index) => (
                        <Fragment key={index}>
                          <Author isKe={a.isKe}>
                            {a.author}
                          </Author>
                          <span>{index !== sortedIfMatchedKe.length - 1 ? ", " : null}</span>
                        </Fragment>
                      ))}
                      <span>
                        ({p.year})
                        {p.magazine}
                      </span>
                      {p.highlighted.map(highlightedPublication => (
                        <div key={highlightedPublication.id} >
                          <ul>
                            <li>
                              <a type="button" href={highlightedPublication.url} target="_blank" rel="noreferrer">
                                {highlightedPublication.title}
                              </a>
                            </li>
                          </ul>
                        </div>
                      ))}
                      <a type="button" href={p.pdf} target="_blank" rel="noreferrer">
                        PDF
                      </a>
                      <a type="button" href={p.doi} target="_blank" rel="noreferrer">
                        DOI
                      </a>
                    </div>
                  )})}
                </div>
              ))}
            </div>
        ))}
      </div>
    </div>
  );
}

export default PublicationsPage;
