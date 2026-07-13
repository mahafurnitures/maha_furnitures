import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ReviewsSection.css';

gsap.registerPlugin(ScrollTrigger);

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
}

const reviewsData: Review[] = [
  {
    name: 'Srikanth Chinna',
    rating: 5,
    text: 'When we visited Maha Furniture Shop near Chalgall D-Mart in Jagtial for the first time, the way they welcomed us was very impressive. They clearly explained every item, describing each product’s features in detail.',
    date: '2 months ago',
    initials: 'SC'
  },
  {
    name: 'Radharapu Vijaykumar',
    rating: 5,
    text: 'Highly recommended for solid wood furniture and good quality. Find their products, especially beds, sofas, dressing tables, dining tables to be sturdy and stylish, with smooth delivery processes. Kindly visit.',
    date: '2 months ago',
    initials: 'RV'
  },
  {
    name: 'Korukanti Beem Raj',
    rating: 5,
    text: 'Affordable prices and Good Quality of Products. Very satisfied with the build materials and customer care.',
    date: '2 months ago',
    initials: 'KB'
  },
  {
    name: 'Rakesh Gugilla',
    rating: 5,
    text: 'The furniture is very good, and they maintain a good quality. Recommended for custom upholstery work.',
    date: '2 months ago',
    initials: 'RG'
  },
  {
    name: 'Dinesh Babu Sankoji',
    rating: 5,
    text: 'I had been searching everywhere for custom furniture that wasn’t just nice, but actually felt like home. I found the best custom designs here. Highly recommended.',
    date: '8 months ago',
    initials: 'DS'
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 6000); // 6 seconds auto rotation
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    // Fade up title
    gsap.fromTo(titleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade up slider container
    gsap.fromTo(sliderRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: containerRef });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  return (
    <section className="reviews-section" id="reviews" ref={containerRef}>
      <div className="reviews-container">
        
        {/* Section Header */}
        <div className="section-header" ref={titleRef}>
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        {/* Testimonials Slider */}
        <div className="reviews-slider-card" ref={sliderRef}>
          
          {/* Big quotes icon background */}
          <div className="quote-backdrop">“</div>

          {/* Navigation Arrows */}
          <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous Review">
            <ChevronLeft size={24} />
          </button>
          
          <button className="slider-arrow next" onClick={handleNext} aria-label="Next Review">
            <ChevronRight size={24} />
          </button>

          {/* Active Review Content */}
          <div className="review-content-wrap">
            
            {/* Stars */}
            <div className="review-stars">
              {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={18} fill="#E2B25B" color="#E2B25B" />
              ))}
            </div>

            {/* Review text */}
            <p className="review-text">
              "{reviewsData[currentIndex].text}"
            </p>

            {/* Profile Detail */}
            <div className="reviewer-profile">
              <div className="reviewer-avatar">
                {reviewsData[currentIndex].initials}
              </div>
              <div className="reviewer-info">
                <h4 className="reviewer-name">{reviewsData[currentIndex].name}</h4>
                <div className="reviewer-meta">
                  <span className="verified-badge">Verified Google Customer</span>
                  <span className="bullet">•</span>
                  <span className="review-date">{reviewsData[currentIndex].date}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Slider Dots */}
          <div className="slider-dots">
            {reviewsData.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
