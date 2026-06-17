/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

interface CarouselContextProps {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  activeIndex: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  slidesCount: number;
  setSlidesCount: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: {
    align?: 'start' | 'center' | 'end';
    loop?: boolean;
  };
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className = '', children, ...props }, ref) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [slidesCount, setSlidesCount] = useState(0);

    const onScroll = useCallback(() => {
      if (!carouselRef.current) return;
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      
      // Calculate active index based on current scroll position
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
      
      setCanScrollPrev(scrollLeft > 10);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 10);
    }, []);

    useEffect(() => {
      const container = carouselRef.current;
      if (!container) return;

      container.addEventListener('scroll', onScroll);
      // Run once initially
      onScroll();

      // Recalculate on window resize
      window.addEventListener('resize', onScroll);

      return () => {
        container.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    }, [onScroll]);

    const scrollPrev = useCallback(() => {
      if (!carouselRef.current) return;
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollBy({
        left: -clientWidth,
        behavior: 'smooth',
      });
    }, []);

    const scrollNext = useCallback(() => {
      if (!carouselRef.current) return;
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollBy({
        left: clientWidth,
        behavior: 'smooth',
      });
    }, []);

    const scrollTo = useCallback((index: number) => {
      if (!carouselRef.current) return;
      const { clientWidth } = carouselRef.current;
      carouselRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth',
      });
    }, []);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          activeIndex,
          canScrollPrev,
          canScrollNext,
          scrollPrev,
          scrollNext,
          scrollTo,
          slidesCount,
          setSlidesCount,
        }}
      >
        <div
          ref={ref}
          className={`carousel-container ${className}`}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => {
    const { carouselRef, setSlidesCount } = useCarousel();

    useEffect(() => {
      if (carouselRef.current) {
        setSlidesCount(carouselRef.current.children.length);
      }
    }, [children, carouselRef, setSlidesCount]);

    return (
      <div
        ref={(node) => {
          // Double-assign ref
          carouselRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={`carousel-content-wrapper ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={`carousel-slide-item ${className}`}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
      <button
        ref={ref}
        className={`carousel-nav-btn prev ${canScrollPrev ? 'visible' : 'hidden'} ${className}`}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        aria-label="Previous slide"
        type="button"
        {...props}
      >
        <ChevronLeft className="h-5 w-5" size={20} />
      </button>
    );
  }
);
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
      <button
        ref={ref}
        className={`carousel-nav-btn next ${canScrollNext ? 'visible' : 'hidden'} ${className}`}
        disabled={!canScrollNext}
        onClick={scrollNext}
        aria-label="Next slide"
        type="button"
        {...props}
      >
        <ChevronRight className="h-5 w-5" size={20} />
      </button>
    );
  }
);
CarouselNext.displayName = 'CarouselNext';

export const CarouselIndicators = () => {
  const { activeIndex, scrollTo, slidesCount } = useCarousel();

  if (slidesCount <= 1) return null;

  return (
    <div className="carousel-indicators-container">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <button
          key={index}
          className={`carousel-indicator-dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
          type="button"
        />
      ))}
    </div>
  );
};
CarouselIndicators.displayName = 'CarouselIndicators';
