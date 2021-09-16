import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import arrow from '../constants/images/arrow.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 12px 0;

  @media ${breakpoint.sm} {
    margin: 0 0 48px 0;
  }

`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 67%;
  border-radius: 5px;
  flex-shrink: 0;

  @media ${breakpoint.sm} {
    width: 80%;
    padding-top: 50%;
  }
`;

const ButtonContainer = styled.div`
  margin: 4px 0 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${breakpoint.sm} {
    margin: 8px 0 0 0;
    width: 80%;
  }
`;

const Button = styled.button`
  line-height: 20px;
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;
  transform: ${props => props.left ? `rotate(180deg)` : 0}
`;

const Image = styled.img`
  border-radius: 5px;
  position: absolute; 
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: ${props => props.currentPage ? 1 : 0};
  transition: opacity 0.8s ease-in-out;
`;

const PageNumber = styled.span`
  width: 12px;
  text-align: center;
`;

function Carousel({
  slides
}) {
  const [currentPage, setCurrentPage] = useState(0);

  const onPrevious = useCallback(() => {
    if (currentPage === 0) {
      setCurrentPage(slides.length - 1)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }, [currentPage, slides.length])

  const onNext = useCallback(() => {
    if (currentPage === slides.length - 1) {
      setCurrentPage(0)
    } else {
      setCurrentPage(currentPage + 1)
    }
  }, [currentPage, slides.length])

  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
  
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [onNext])

  const isCarousel = slides.length > 1

  return (
    <Wrapper>
      <CarouselContainer>
        {slides.map((slide, index) => (
          <Image
            key={slide}
            currentPage={currentPage === index}
            src={slide} 
            alt="slide-show" />
        ))}
      </CarouselContainer>
      {isCarousel && (
        <ButtonContainer>
          <Button 
            onClick={() => onPrevious()}>
            <Icon left="left" src={arrow} alt="arrow" />
          </Button>
          <PageNumber>{currentPage + 1}</PageNumber>
           / 
          <PageNumber>{slides.length}</PageNumber>
          <Button 
            onClick={() => onNext()}>
            <Icon src={arrow} alt="arrow" />
          </Button>
        </ButtonContainer>
      )}
    </Wrapper>
  );
}

export default Carousel;