import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './FaqSection.css';

gsap.registerPlugin(ScrollTrigger);

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Where are Maha Furnitures showrooms located?",
    answer: "We have two premium retail showrooms: in Jagtial (Opposite RK Nursery, Chelgal Road) and Metpally (Main Road), Telangana. We also invite customers to visit our custom woodworking unit, the Maha Woodcraft Workshop, situated in the Industrial Area in Chelgal, Jagtial."
  },
  {
    question: "Do you specialize in fully custom-made wood furniture?",
    answer: "Yes, customization is our core expertise. We construct customized furniture tailored precisely to your design requirements, wood preference (such as authentic Indian Teak wood), foam densities, fabric choices, and dimensional spaces."
  },
  {
    question: "Do you charge for home visits and site measurements?",
    answer: "No. We offer free on-site design consultations and precision spacing measurements across Jagtial, Metpally, and neighboring zones. Our expert staff brings catalogs, fabric swatches, and measuring instruments directly to your house."
  },
  {
    question: "Are your furniture pieces manufactured in-house or outsourced?",
    answer: "We carry out 100% of our custom furniture design and assembly inside our own manufacturing facility. This ensures complete control over raw timber quality, joins, carpentry details, and upholstery finishing without middleman markups."
  },
  {
    question: "How can I book a design consultation or factory visit appointment?",
    answer: "You can book an appointment by tapping our direct 'Call for Appointment' CTAs or calling us at +91 89555 35550 (Jagtial) or +91 97000 63333 (Metpally). Phone calls are our exclusive booking channel to guarantee quick slot confirmations."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade up header
    gsap.fromTo(headerRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade up faq list elements
    if (listRef.current) {
      gsap.fromTo(listRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, { scope: containerRef });

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq" ref={containerRef}>
      <div className="faq-container">
        
        {/* Section Header */}
        <div className="section-header" ref={headerRef}>
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list" ref={listRef}>
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-accordion-header">
                  <div className="faq-header-left">
                    <HelpCircle size={18} className="faq-help-icon" />
                    <h3 className="faq-question-text">{item.question}</h3>
                  </div>
                  <div className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                
                <div className={`faq-accordion-body ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
