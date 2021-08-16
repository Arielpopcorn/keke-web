import { useState, useEffect } from 'react';
import styled from 'styled-components';
import img1 from '../images/mock-research1.jpg';
import img2 from '../images/mock-research2.jpg';
import img3 from '../images/mock-research3.jpg';
import img4 from '../images/mock-research4.jpg';
import img5 from '../images/mock-research5.jpg';
import img6 from '../images/mock-research6.jpg';

import breakpoint from '../breakpoints';

const ResearchSection = styled.div`
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

  .cf {
    *zoom: 1;
  }

  .box {
    float: left;
    margin: 14.5%;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    width: 68%;

    @media ${breakpoint.xs}{
    margin: 6.5%;
    width: 35%;
    }
  
    @media ${breakpoint.sm}{
      width: 17%;
      margin: 1.5%;
    }
  }

  .container {
    display: block;
    margin: 36px 0 0 0;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
`;

const Title = styled.h1`
  margin: 36px 0 0 0;
  display: flex;
  justify-content: center;
`;

const TabsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 140px);
  grid-row-gap: 14px;
  grid-template-rows: 30px;
  margin: 24px 0 0 0;
  grid-column-gap: 10px;
`;

const Tab = styled.button`
  background-color: ${props => props.isMatchedTab ? '#407A52' : '#F2F1EF'};
  color: ${props => props.isMatchedTab ? '#FAFAFA' : '#000'};
  font-weight: ${props => props.isMatchedTab ? 'bold' : 'medium'};
  font-size: 13px;
  border-radius: 2px;

  &:hover {
    background-color: ${props => props.isMatchedTab ? '#407A52' : '#E5E5E5'};
  }
`;

const Block = styled.a`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  text-decoration: none;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
`;

const Cover = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const ResearchTitle = styled.p`
  color: #407A52;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  font-size: 20px;
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: -100%;
  color: #FFF;
  background-color: #FAFAFA;
  opacity: 0.8;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
  cover: img1,
  title: "HIIIIII I AM A RESEARCHER",
  tag: "Plant-soil_microbe_interactions"
}, {
  id: "2",
  link: "https://parameterizeit.github.io/",
  cover: img2,
  title: "two",
  tag: "Species_interaction_and_coexistence"
}, {
  id: "3",
  link: "https://www.marieclaire.com.tw/entertainment/story/45399",
  cover: img3,
  title: "three",
  tag: "Stage-dependent_species_interaction"
}, {
  id: "4",
  link: "https://www.marieclaire.com.tw/entertainment/story/45399",
  cover: img4,
  title: "four",
  tag: "Stage-dependent_species_interaction"
}, {
  id: "5",
  link: "https://www.marieclaire.com.tw/entertainment/story/45399",
  cover: img5,
  title: "five",
  tag: "Stage-dependent_species_interaction"
}, {
  id: "6",
  link: "https://www.marieclaire.com.tw/entertainment/story/45399",
  cover: img6,
  title: "six",
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
  
  var boxes = window.document.querySelectorAll(".box");
  var TweenMax = window.TweenMax;
  
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
      <Title>Research</Title>
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
      <ResearchSection>
      <div className="container cf">
        {filteredResearch.map(research => (
          <Block target="_blank" rel="noreferrer" href={research.link} className="box">
            <CoverContainer>
              <Cover src={research.cover} alt="cover-img" />
            </CoverContainer>
            <Mask className="overlay">
              <ResearchTitle>{research.title}</ResearchTitle>
            </Mask>
          </Block>
        ))}
      </div>
      </ResearchSection>
    </Wrapper>
  );
}

export default ResearchesPage;
