import { useState, useRef, useEffect } from 'react';
import {
  Sofa, Home, Palette, Heart, Trophy, Users, Shield, Star, CheckCircle, Search, ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './ProductsSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import category background images
import sofaLiving from '../assets/sofa_living.png';
import bedBedroom from '../assets/bed_bedroom.png';
import diningTable from '../assets/dining_table.png';
import diwanStorage from '../assets/diwan_storage.png';
import centreTable from '../assets/centre_table.png';
import officeChair from '../assets/office_chair.png';
import wardrobeDressing from '../assets/wardrobe_dressing.png';
import jhoolaSwing from '../assets/jhoola_swing.png';
import utilityFurniture from '../assets/utility_furniture.png';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories: string[];
  description: string;
  image: string;
}

// Curated mappings from subcategory title to high-quality Unsplash image URLs
const subcategoryImages: Record<string, string> = {
  // Sofas & Living Room
  'Head Rest Model': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
  'L Shape Sofa': 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
  'Corner Sofa': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
  'Pillow Model': 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop',
  'Fiber Model': 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop',
  'Dummy Recliner': 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop',
  'Manual Recliner': 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop',
  'Electrical Recliner': 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop',
  'RRR Recliner': 'https://images.unsplash.com/photo-1589384267710-7a170981ca78?q=80&w=600&auto=format&fit=crop',
  'Sofa Cum Bed': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',
  'Langer Model': 'https://images.unsplash.com/photo-1512211878902-601e8ab66e01?q=80&w=600&auto=format&fit=crop',
  'Wooden Sofa': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&auto=format&fit=crop',
  'Customised Sofa': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',

  // Beds & Bedroom
  'Teak Wood Beds': 'https://images.unsplash.com/photo-1505693395321-883724634266?q=80&w=600&auto=format&fit=crop',
  'Plywood Beds': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop',
  'Hydraulic Storage Beds': 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop',
  'Non-Storage Beds': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop',

  // Premium Dining
  'Teak Wooden Dining': 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=600&auto=format&fit=crop',
  'Marble Top Dining': 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=600&auto=format&fit=crop',
  'Tiles Top Dining': 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=600&auto=format&fit=crop',
  'Adjustable Luxury Dining': 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=600&auto=format&fit=crop',
  'Premium Dining Sets': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop',

  // Diwans
  'Diwan with Storage': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop',
  'Diwan without Storage': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',

  // Centre Tables
  'Premium Centre Tables': 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop',
  'Coffee Tables': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop',
  'Nesting Tables': 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600&auto=format&fit=crop',

  // Office & Study
  'Office Executive Chairs': 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?q=80&w=600&auto=format&fit=crop',
  'Visitor Seating': 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=600&auto=format&fit=crop',
  'Ergonomic Study Chairs': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600&auto=format&fit=crop',

  // Wardrobes & Dressing
  'Dressing Table': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop',
  'Master Wardrobes': 'https://images.unsplash.com/photo-1558882224-dda166733360?q=80&w=600&auto=format&fit=crop',
  'Modular Cupboards': 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=600&auto=format&fit=crop',

  // Swings
  'Teak Wood Jhoola': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop',
  'Traditional Swings': 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
  'Balcony Swings': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop',

  // Utility Furniture
  'Plastic Dining Tables': 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=600&auto=format&fit=crop',
  'Lightweight Study Chairs': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop',
  'Utility Folding Desks': 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop',
};

interface CategoryScrollSectionProps {
  category: Category;
  index: number;
  total: number;
}

function CategoryScrollSection({ category, index, total }: CategoryScrollSectionProps) {
  return (
    <div className="category-pinned-section" style={{ zIndex: index + 1 }}>
      {/* Visual background gradient matching section index */}
      <div className="category-bg-glow"></div>

      <div className="category-horizontal-track">
        {/* Category Header Card */}
        <div className="category-intro-card">
          <div className="category-card-count">
            <span className="current-num">{(index + 1).toString().padStart(2, '0')}</span>
            <span className="slash">/</span>
            <span className="total-num">{total.toString().padStart(2, '0')}</span>
          </div>
          <div className="category-icon-indicator">{category.icon}</div>
          <h3 className="category-name-heading">{category.name}</h3>
          <p className="category-description-text">{category.description}</p>
          <div className="scroll-indicator-wrap">
            <span className="indicator-text">Scroll Down to Explore Products</span>
            <span className="indicator-arrow">→</span>
          </div>
        </div>

        {/* Product Cards */}
        {category.subcategories.map((sub, idx) => {
          const imageUrl = subcategoryImages[sub] || category.image;
          return (
            <div key={idx} className="product-item-card">
              <div className="product-image-container">
                <img src={imageUrl} alt={sub} className="product-img-element" loading="lazy" />
                <div className="product-overlay-gradient"></div>
              </div>
              <div className="product-content-overlay">
                <span className="product-item-number">{(idx + 1).toString().padStart(2, '0')}</span>
                <h4 className="product-item-title">{sub}</h4>
                <p className="product-item-desc">Premium quality, fully customizable designs & upholstery.</p>
                <a href="#contact" className="product-item-cta">
                  <span>INQUIRE NOW</span>
                  <ArrowRight size={14} className="cta-arrow-icon" />
                </a>
              </div>
            </div>
          );
        })}

        {/* Coming Soon Card */}
        <div className="product-item-card coming-soon-card">
          <div className="coming-soon-card-content">
            <div className="coming-soon-badge">✨ BRAND NEW</div>
            <h4 className="coming-soon-title">More Collections Coming Soon</h4>
            <p className="coming-soon-desc">
              We are constantly handcrafting custom furniture styles to match your bespoke aesthetic demands.
            </p>
            <div className="coming-soon-separator"></div>
            <p className="coming-soon-prompt">Have a specific design in mind?</p>
            <a href="#contact" className="coming-soon-cta">
              <span>GET IN TOUCH</span>
              <ArrowRight size={14} className="coming-soon-arrow-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const snapPointsRef = useRef<number[]>([]);

  const categories: Category[] = [
    {
      id: 'living',
      name: 'Sofas & Living Room',
      icon: <Sofa size={24} />,
      subcategories: [
        'Head Rest Model', 'L Shape Sofa', 'Corner Sofa', 'Pillow Model',
        'Fiber Model', 'Dummy Recliner', 'Manual Recliner', 'Electrical Recliner',
        'RRR Recliner', 'Sofa Cum Bed', 'Langer Model', 'Wooden Sofa', 'Customised Sofa'
      ],
      description: 'Luxurious comfort, ergonomic recliners, and custom sectionals designed to elevate your family living room.',
      image: sofaLiving
    },
    {
      id: 'bedroom',
      name: 'Beds & Bedroom',
      icon: <Home size={24} />,
      subcategories: [
        'Teak Wood Beds', 'Plywood Beds', 'Hydraulic Storage Beds', 'Non-Storage Beds'
      ],
      description: 'Enduring teak wood and premium plywood beds, custom built with smooth storage options for your sanctuary.',
      image: bedBedroom
    },
    {
      id: 'dining',
      name: 'Premium Dining',
      icon: <Palette size={24} />,
      subcategories: [
        'Teak Wooden Dining', 'Marble Top Dining', 'Tiles Top Dining',
        'Adjustable Luxury Dining', 'Premium Dining Sets'
      ],
      description: 'Exquisite marble, tiles, and solid wood dining tables matching your aesthetics with flexible sizing.',
      image: diningTable
    },
    {
      id: 'diwan',
      name: 'Diwans',
      icon: <Heart size={24} />,
      subcategories: [
        'Diwan with Storage', 'Diwan without Storage'
      ],
      description: 'Traditional Indian diwans, combining heritage woodcarving with modern utility storage options.',
      image: diwanStorage
    },
    {
      id: 'accent-tables',
      name: 'Centre Tables',
      icon: <Trophy size={24} />,
      subcategories: [
        'Premium Centre Tables', 'Coffee Tables', 'Nesting Tables'
      ],
      description: 'Sophisticated accent tables and functional centerpieces to tie your living area layout together.',
      image: centreTable
    },
    {
      id: 'office',
      name: 'Office & Study',
      icon: <Users size={24} />,
      subcategories: [
        'Office Executive Chairs', 'Visitor Seating', 'Ergonomic Study Chairs'
      ],
      description: 'Ergonomic lumbar support chairs and study seating built for absolute focus and long-term health.',
      image: officeChair
    },
    {
      id: 'wardrobes',
      name: 'Wardrobes & Dressing',
      icon: <Shield size={24} />,
      subcategories: [
        'Dressing Table', 'Master Wardrobes', 'Modular Cupboards'
      ],
      description: 'Elegant, water-resistant wardrobes and custom dressing tables crafted to organize your lifestyle.',
      image: wardrobeDressing
    },
    {
      id: 'jhoola',
      name: 'Jhoolas & Swings',
      icon: <Star size={24} />,
      subcategories: [
        'Teak Wood Jhoola', 'Traditional Swings', 'Balcony Swings'
      ],
      description: 'Solid teak wood swings handcrafted by local artisans, bringing heritage and relaxation inside.',
      image: jhoolaSwing
    },
    {
      id: 'utility',
      name: 'Utility Furniture',
      icon: <CheckCircle size={24} />,
      subcategories: [
        'Plastic Dining Tables', 'Lightweight Study Chairs', 'Utility Folding Desks'
      ],
      description: 'High-grade, durable plastic tables and chairs for versatile indoor, outdoor, or study usage.',
      image: utilityFurniture
    }
  ];

  // Master timeline for layered categories and horizontal scrolling
  useGSAP(() => {
    // Return early if searching is active (since elements are hidden/different layout)
    if (searchQuery) return;

    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray<HTMLElement>('.category-pinned-section');
    if (sections.length === 0) return;

    // Set initial vertical translation for all sections after the first one
    gsap.set(sections.slice(1), { yPercent: 100 });

    // Helper to calculate exact scroll distance to center the last sub product card
    const getTrackScrollDistance = (trackEl: Element | null): number => {
      if (!trackEl) return 0;
      const cards = gsap.utils.toArray<HTMLElement>(trackEl.children).filter(card => card.offsetWidth > 0);
      if (cards.length === 0) return 0;
      const lastCard = cards[cards.length - 1];
      const targetX = lastCard.offsetLeft + (lastCard.offsetWidth / 2) - (window.innerWidth / 2);
      return Math.max(0, targetX);
    };

    // Create a master scroll-timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        start: "top top",
        // Total scroll duration: sum of horizontal scrolls + vertical slide transitions
        end: () => {
          let totalDistance = 0;
          sections.forEach((sec) => {
            const track = sec.querySelector('.category-horizontal-track');
            const distance = getTrackScrollDistance(track);
            totalDistance += (distance > 0 ? distance : 0) + window.innerHeight;
          });
          // Add extra scroll hold padding at the end of the final section
          return `+=${totalDistance + 600}`;
        },
        invalidateOnRefresh: true,
        onRefresh: () => {
          // Calculate snap points
          const snapPoints: number[] = [];
          let totalDuration = 0;

          // 1. Gather all durations
          const sectionData = sections.map((section) => {
            const track = section.querySelector('.category-horizontal-track') as HTMLElement;
            const distance = getTrackScrollDistance(track);
            const horizDuration = distance > 0 ? distance : 100;
            return { section, track, distance, horizDuration };
          });

          sectionData.forEach((data, idx) => {
            totalDuration += data.horizDuration;
            if (idx < sections.length - 1) {
              totalDuration += window.innerHeight * 0.8;
            }
          });

          // 2. Add snap points for each card (centered in viewport)
          let currentTime = 0;
          sectionData.forEach((data, idx) => {
            const { track, distance, horizDuration } = data;
            if (track) {
              // Add a snap point at the start of horizontal scroll
              snapPoints.push(currentTime / totalDuration);

              const cards = gsap.utils.toArray<HTMLElement>(track.children).filter(card => card.offsetWidth > 0);
              cards.forEach((card) => {
                const cardWidth = card.offsetWidth;
                const cardOffset = card.offsetLeft;

                // Center the card in the viewport
                const targetX = cardOffset + (cardWidth / 2) - (window.innerWidth / 2);
                const clampedX = Math.max(0, Math.min(distance, targetX));

                const sectionTime = distance > 0 ? (clampedX / distance) * horizDuration : 0;
                const cardTime = currentTime + sectionTime;
                snapPoints.push(cardTime / totalDuration);
              });
            }

            currentTime += horizDuration;
            if (idx < sections.length - 1) {
              // Add snap points at start/end of the vertical transition
              snapPoints.push(currentTime / totalDuration);
              currentTime += window.innerHeight * 0.8;
              snapPoints.push(currentTime / totalDuration);
            }
          });

          // Deduplicate, filter valid numbers, and sort
          snapPointsRef.current = Array.from(new Set(snapPoints))
            .filter(val => val >= 0 && val <= 1 && !isNaN(val))
            .sort((a, b) => a - b);
        },
        snap: {
          snapTo: (value) => {
            if (snapPointsRef.current.length === 0) return value;
            return gsap.utils.snap(snapPointsRef.current, value);
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0.08,
          ease: "power2.out"
        }
      }
    });

    sections.forEach((section, idx) => {
      const track = section.querySelector('.category-horizontal-track');

      // 1. Horizontal scroll tween for this section
      tl.to(track, {
        x: () => {
          const distance = getTrackScrollDistance(track);
          return distance > 0 ? -distance : 0;
        },
        ease: "none",
        duration: () => {
          const distance = getTrackScrollDistance(track);
          return distance > 0 ? distance : 100;
        }
      });

      // 2. Vertical slide-up tween for the NEXT section (if there is one)
      if (idx < sections.length - 1) {
        const nextSection = sections[idx + 1];
        tl.to(nextSection, {
          yPercent: 0,
          ease: "none",
          duration: () => window.innerHeight * 0.8, // Duration proportional to viewport height
        });
      }
    });
  }, { scope: containerRef, dependencies: [searchQuery] });

  useEffect(() => {
    // Force recalculating ScrollTrigger measurements once everything (including lazy images) is ready
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);

    // Fallback timer to refresh triggers in case of cached assets
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <span className="section-subtitle">EXPLORE OUR COLLECTIONS</span>
        <h2 className="section-title">Our Premium Categories</h2>
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search furniture categories, e.g. recliners, beds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* If user is searching, show grid inside layout wrapper. Otherwise, show pinned vertical/horizontal scroll panels directly under section */}
      {searchQuery ? (
        <div className="products-layout-wrapper">
          <div className="search-results-panel">
            <h3 className="display-panel-title">Search Results for "{searchQuery}"</h3>
            <div className="subcategories-grid">
              {categories
                .flatMap(cat =>
                  cat.subcategories
                    .filter(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map(sub => ({ sub, cat }))
                )
                .map(({ sub, cat }, idx) => {
                  const imageUrl = subcategoryImages[sub] || cat.image;
                  return (
                    <div key={idx} className="subcategory-card">
                      <div className="subcategory-card-accent" />
                      <div className="subcategory-card-image-wrap">
                        <img src={imageUrl} alt={sub} className="subcategory-card-img" />
                      </div>
                      <div className="subcategory-card-body">
                        <span className="subcategory-parent-tag">{cat.name}</span>
                        <h4 className="subcategory-name">{sub}</h4>
                        <p className="subcategory-description">
                          Premium high-durability design. Contact us to customize materials, upholstery, or sizing.
                        </p>
                        <a href="#contact" className="subcategory-cta">
                          <span>Inquire Now</span>
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  );
                })
              }
              {categories.flatMap(cat => cat.subcategories.filter(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))).length === 0 && (
                <div className="no-results">
                  <p>No products found matching "{searchQuery}". Try searching for 'beds', 'recliner', or 'dining'.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="pinned-categories-container" ref={containerRef}>
          {categories.map((cat, idx) => (
            <CategoryScrollSection
              key={cat.id}
              category={cat}
              index={idx}
              total={categories.length}
            />
          ))}
        </div>
      )}
    </section>
  );
}
