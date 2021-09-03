import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { RESEARCH_LIST } from '../constants/researchList';

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

    @media ${breakpoint.xs} {

    }
  
    @media ${breakpoint.sm} {
      margin: 32px 0 0 0;
      font-size: 13px;
      margin: 24px 0 0 0;
    }
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
  font-size: 28px;
`;

const TabsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-row-gap: 4px;
  grid-template-rows: 30px;
  margin: 24px 0 0 0;
  grid-column-gap: 10px;
  padding: 0 0 16px 0;
  border-bottom: 1px solid #407A52;

  @media ${breakpoint.xs} {
    grid-template-columns: repeat(2, 164px);
    grid-row-gap: 8px;
  }

  @media ${breakpoint.sm} {
    grid-template-columns: repeat(4, 164px);
    grid-row-gap: 14px;
  }
`;

const Tab = styled.button`
  background-color: ${props => props.isMatchedTab ? '#407A52' : '#F2F1EF'};
  color: ${props => props.isMatchedTab ? '#FAFAFA' : '#000'};
  font-weight: ${props => props.isMatchedTab ? 'bold' : 'medium'};
  font-size: 13px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.isMatchedTab ? '#407A52' : '#E5E5E5'};
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 12px 0 0 0;

  @media ${breakpoint.xs} {
    margin: 16px 0 0 0;
  }

  @media ${breakpoint.sm} {
    margin: 32px 0 0 0;
  }

`;

const Description = styled.p`
  padding: ${props => props.description ? '8px' : 0};
  font-size: 14px;
  line-height: 28px;
  text-align: left;
  max-width: 280px;

  @media ${breakpoint.xs} {
    max-width: 520px;
  }

  @media ${breakpoint.sm} {
    max-width: 920px;
    font-size: 13px;
  }
`;

const Block = styled(Link)`
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

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: ${props =>  `url(${props.cover})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  description: null
}, {
  id: "Plant-soil feedback",
  name: "Plant-soil feedback",
  description: "Plants can condition and cause species-specific changes in soil microbial communities that will influence plant competitive outcomes and community dynamics, a process known as plant-soil feedbacks (PSF). Our lab develops experiments and models that better capture the temporal and demographic context of PSF and employ them to study the consequences of PSF."
},
{
  id: "Species coexistence",
  name: "Species coexistence",
  description: "The maintenance of biodiversity boils down to the stable coexistence of interacting species. When describing competitive interactions, ecologists adopt either a phenomenological or mechanistic approach. To better understand competitive dynamics, our lab strives to synthesize different modeling approaches to develop explicit connections between causal mechanisms and emergent phenomena."
}, {
  id: "Ontogenetic niche shift",
  name: "Ontogenetic niche shift",
  description: "The strength of species interactions is often assumed to be fixed through time. However, greater awareness of the temporal complexity of ecological communities has urged ecologists to study how species’ phenology and ontogeny modify species interaction strength. In our lab, we combine both empirical and theoretical approaches to develop a temporally-explicit perspective of community ecology."
}];

function ResearchListPage() {
  const location = useLocation();
  console.log('location123', location)

  const [currentTab, setCurrentTab] = useState(location.state?.backTag ?? tabs[0].id);

  const filteredResearch = RESEARCH_LIST.filter(research => {
    if (currentTab === 'all') return RESEARCH_LIST;
    return (
    research.tags.includes(currentTab)
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
  }})

  const showDescription = tabs.find(tab => tab.id === currentTab).description;

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
      {showDescription && (
        <DescriptionWrapper>
          <Description>
            {showDescription}
          </Description>
        </DescriptionWrapper>
      )}
      <ResearchSection>
        <div className="container cf">
          {filteredResearch.map(research => (
            <Block to={{
              pathname: `research/${research.id}`,
              state: currentTab
              }}
              className="box" 
              key={research.id}>
              <CoverContainer>
                <Cover cover={research.cover} />
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

export default ResearchListPage;
