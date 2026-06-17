import { useRef } from 'react';
import { Ruler, Shield, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './CustomizedSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Step {
  number: string;
  title: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}

export default function CustomizedSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const stepsData: Step[] = [
    {
      number: '01',
      title: 'Plan a Showroom / Site Visit',
      desc: 'Visit our showrooms in Jagtial or Metpally to explore custom finishes in person, or request an expert designer to visit your home for a space layout consultation.',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
      icon: <MapPin size={22} />
    },
    {
      number: '02',
      title: 'Measurements & Requirements',
      desc: 'Our design experts visit your home to take precision structural measurements, assessing your layout and detailing your custom storage and comfort preferences.',
      image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop',
      icon: <Ruler size={22} />
    },
    {
      number: '03',
      title: 'Style & Material Selection',
      desc: 'Choose from premium materials like genuine teak wood, water-resistant plywood, marbles, and tiles. Pick your custom fabric colors and density to match your home.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop',
      icon: <Sparkles size={22} />
    },
    {
      number: '04',
      title: 'Crafting & Home Delivery',
      desc: 'Skilled local carpenters construct your custom furniture with structural integrity. We handle transport, safe delivery, and complete assembly directly in your home.',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
      icon: <Shield size={22} />
    }
  ];

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.customized-panel');
    if (panels.length === 0) return;

    // Pop the last panel: it doesn't need to scale down or pin
    const pinningPanels = [...panels];
    pinningPanels.pop();

    pinningPanels.forEach((panel) => {
      const inner = panel.querySelector('.customized-panel-inner') as HTMLElement;
      if (!inner) return;

      const panelHeight = inner.offsetHeight;
      const windowHeight = window.innerHeight;
      const difference = panelHeight - windowHeight;

      // Ratio of scrolling height reserved for fake vertical scroll (if panel taller than screen)
      const fakeScrollRatio = difference > 0 ? (difference / (difference + windowHeight)) : 0;

      if (fakeScrollRatio) {
        panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: () => fakeScrollRatio ? `+=${inner.offsetHeight}` : "bottom top",
          pinSpacing: false,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // If inner panel is taller, fake-scroll it upwards first
      if (fakeScrollRatio) {
        tl.to(inner, {
          yPercent: -100,
          y: windowHeight,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none"
        });
      }

      // Scale down and fade out the panel as the next card stacks over it
      tl.fromTo(panel,
        { scale: 1, opacity: 1 },
        { scale: 0.82, opacity: 0.35, duration: 0.9, ease: 'power1.inOut' }
      ).to(panel, { opacity: 0, duration: 0.1 });
    });
  }, { scope: containerRef });

  return (
    <section className="customized-section" id="about" ref={containerRef}>
      <div className="customized-intro-header">
        <span className="section-subtitle">OUR BESPOKE CRAFT</span>
        <h2 className="section-title">Customized Furniture Made Easy</h2>
      </div>

      {/* Pinned Panels Stacking Context Container */}
      <div className="customized-panels-container">
        {stepsData.map((step, idx) => (
          <div key={idx} className={`customized-panel panel-${idx + 1}`} id={`customized-step-${idx + 1}`}>
            <div className="customized-panel-inner">
              
              {/* Left Column: Text + CTA details */}
              <div className="panel-left-col">
                <span className="panel-step-number">{step.number}</span>
                
                <div className="panel-step-header">
                  <div className="panel-step-icon-box">
                    {step.icon}
                  </div>
                  <h3 className="panel-step-title">{step.title}</h3>
                </div>
                
                <p className="panel-step-desc">{step.desc}</p>

                {/* Render the CTA button only on the final step card */}
                {idx === stepsData.length - 1 && (
                  <a href="#contact" className="btn-book-site-visit" aria-label="Book free site measurement visit">
                    <span className="btn-text">Book Site Visit</span>
                    <div className="btn-circle">
                      <ArrowRight size={18} className="btn-circle-icon" />
                    </div>
                  </a>
                )}
              </div>

              {/* Right Column: Visual display image */}
              <div className="panel-right-col">
                <div className="panel-img-wrap">
                  <img src={step.image} alt={step.title} className="panel-img" loading="lazy" />
                  <div className="panel-img-overlay" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
