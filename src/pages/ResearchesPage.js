import { useState, useEffect } from 'react';
import styled from 'styled-components';
import pig from '../images/pig.jpg';
import img1 from '../images/mock-research1.jpeg';
import img2 from '../images/mock-research2.jpg';
import breakpoint from '../breakpoints';

const W = styled.div`
  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
  }

  .cf:before,
  .cf:after {
    content: " ";
    /* 1 */
    display: table;
    /* 2 */
  }

  .cf:after {
    clear: both;
  }

  /**
   * For IE 6/7 only
   * Include this rule to trigger hasLayout and contain floats.
   */
  .cf {
    *zoom: 1;
  }

  .boxes {
    display: block;
    width: 30%;
    height: 220px;
    background: #fe4;
    position: relative;
    overflow: hidden;
    float: left;
    margin: 1.5%;
    cursor: pointer;
  }

  .da-image {
    min-height: 100%;
    width: 100%;
  }

  .overlay {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: -100%;
    color: #FFF;
    background-color: #FAFAFA;
    opacity: 0.8;
    z-index: 10;
  }

  .container {
    width: 1170px;
    display: block;
    margin: auto;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
`;

const TabsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(max-content, min-content));
  grid-template-rows: 40px;
  margin: 20px 0 0 0;
`;

const Tab = styled.button`
  background-color: ${props => props.isMatchedTab ? '#407A52' : '#F2F1EF'};
  color: ${props => props.isMatchedTab ? '#FAFAFA' : '#000'};
  font-weight: ${props => props.isMatchedTab ? 'bold' : 'medium'};
  font-size: 16px;

  &:hover {
    background-color: ${props => props.isMatchedTab ? '#407A52' : '#f9f9f4'};
  }
`;

const BlocksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  margin: 40px 0 0 0;

  @media ${breakpoint.xs}{
    grid-template-columns: repeat(2, 1fr);
    margin: 60px 0 0 0;
  }

  @media ${breakpoint.sm}{
    grid-template-columns: repeat(3, 1fr);
    margin: 60px 0 0 0;
  }
`;

const Block = styled.a`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  transition: all 0.2s ease-out;
  background-color: #f9f9f4;
  text-decoration: none;
  position: relative;
`;

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
`;

const CoverImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const Title = styled.p`
  color: #407A52;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  font-size: 20px;
`;

const Mask = styled.div`
display: block;
position: absolute;
width: 100%;
height: 100%;
top: 0%;
left: -100%;
color: #FFF;
background-color: #FAFAFA;
opacity: 0.8;
z-index: 10;
`;

const tabs = [{
  id: "all",
  name: "All",
}, {
  id: "Plant-soil_microbe_interactions",
  name: "Plant-soil feedback",
},
{
  id: "Species_interaction_and_coexistence",
  name: "Species coexistence"
}, {
  id: "Stage-dependent_species_interaction",
  name: "Ontogenetic niche "
}];

const mockResearches = [{
  id: "1",
  link: "https://blockecology.github.io/",
  cover: pig,
  title: "HIIIIII I AM A RESEARCHER",
  tag: "Plant-soil_microbe_interactions"
}, {
  id: "2",
  link: "https://parameterizeit.github.io/",
  cover: img1,
  title: "two",
  tag: "Species_interaction_and_coexistence"
}, {
  id: "3",
  link: "https://www.marieclaire.com.tw/entertainment/story/45399",
  cover: img2,
  title: "three",
  tag: "Stage-dependent_species_interaction"
}]

function ResearchesPage() {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const filteredResearch = mockResearches.filter(research => {
    if (currentTab === 'all') return mockResearches;
    return (
    research.tag === currentTab
  )});

  useEffect(() => {
  //Detect Closest Edge
  function closestEdge(x, y, w, h) {
    var topEdgeDist = distMetric(x, y, w / 2, 0);
    var bottomEdgeDist = distMetric(x, y, w / 2, h);
    var leftEdgeDist = distMetric(x, y, 0, h / 2);
    var rightEdgeDist = distMetric(x, y, w, h / 2);
    var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
    switch (min) {
      case leftEdgeDist:
        return "left";
      case rightEdgeDist:
        return "right";
      case topEdgeDist:
        return "top";
      case bottomEdgeDist:
        return "bottom";
      default:
        break;
    }
  }
  
  //Distance Formula
  function distMetric(x, y, x2, y2) {
    var xDiff = x - x2;
    var yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  }
  
  var boxes = window.document.querySelectorAll(".boxes");
  console.log("boxes", boxes)
  
  var TweenMax = window.TweenMax;
  console.log("TweenMax",TweenMax)
  
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onmouseenter = function (e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      var overlay = this.childNodes[1];
      var image = this.childNodes[0];
  
      switch (edge) {
        case "left":
          //tween overlay from the left
          overlay.style.top = "0%";
          overlay.style.left = "-100%";
          TweenMax.to(overlay, 0.5, { left: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;
        case "right":
          overlay.style.top = "0%";
          overlay.style.left = "100%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { left: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;
        case "top":
          overlay.style.top = "-100%";
          overlay.style.left = "0%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { top: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;
        case "bottom":
          overlay.style.top = "100%";
          overlay.style.left = "0%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { top: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.2 });
          break;

          default: 
          break;
      }
    };
  
    boxes[i].onmouseleave = function (e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      var overlay = this.childNodes[1];
      var image = this.childNodes[0];
  
      switch (edge) {
        case "left":
          TweenMax.to(overlay, 0.5, { left: "-100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "right":
          TweenMax.to(overlay, 0.5, { left: "100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "top":
          TweenMax.to(overlay, 0.5, { top: "-100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "bottom":
          TweenMax.to(overlay, 0.5, { top: "100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;

        default:
          break;
      }
    };
  }
})

  return (
      <Wrapper>
        <TabsWrapper>
          {tabs.map(tab => {
            const isMatchedTab = tab.id === currentTab;

            return (
              <Tab
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                isMatchedTab={isMatchedTab}>
                {tab.name}
              </Tab>
            )
          })}
        </TabsWrapper>
        {/* <BlocksWrapper>
          {filteredResearch.map(research => (
            <Block 
              key={research.id}
              href={research.link} 
              type="button" 
              target="_blank">
              <CoverContainer>
                <CoverImage src={research.cover} alt="cover-img" />
              </CoverContainer>
              <Title>
                {research.title}
              </Title>
              <Mask>
                <Title>
                  {research.title}
                </Title>
              </Mask>
            </Block>
          ))}
        </BlocksWrapper> */}
        <W>
        <div className="container cf">
          {filteredResearch.map(research => (
            <div className="boxes">
              <img className="da-image" src={research.cover} alt="cover-img" />
              <div className="overlay">
                <Title>{research.title}</Title>
              </div>
            </div>
          ))}
        </div>
        </W>
      </Wrapper>
  );
}

export default ResearchesPage;
