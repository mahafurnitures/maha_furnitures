import { useState, useEffect } from 'react';
import { Sofa, Home, Palette, Gift, Trophy, Users, Shield, Smile, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import './ProductsSection.css';

// Curated mappings from subcategory title to high-quality Unsplash image URLs
const subcategoryImages: Record<string, string> = {
  // Sofas & Living Room
  'Head Rest Model': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
  'L Shape Sofa': 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop',
  'Corner Sofa': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop',
  'Pillow Model': 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop',
  'Fibre Model': 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop',
  'Manual Recliner': 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop',
  'Electrical Recliner': 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop',
  'RRR Recliner': 'https://images.unsplash.com/photo-1589384267710-7a170981ca78?q=80&w=600&auto=format&fit=crop',
  'Sofa Cum Bed': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop',
  'Lounger Model': 'https://images.unsplash.com/photo-1512211878902-601e8ab66e01?q=80&w=600&auto=format&fit=crop',
  'Wooden Sofa': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600&auto=format&fit=crop',
  'Customized Sofa': 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=600&auto=format&fit=crop',

  // Beds & Bedroom
  'Beds': 'https://images.unsplash.com/photo-1505693395321-883724634266?q=80&w=600&auto=format&fit=crop',
  'Diwan Cots': 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop',
  'Adjustable Plywood Beds': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop',

  // Premium Dining
  'Dining Marble': 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=600&auto=format&fit=crop',
  'Dining Tiles': 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=600&auto=format&fit=crop',
  'Premium Dining Sets': 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=600&auto=format&fit=crop',

  // Home Decor & Gift Items
  'Wooden Mandir': 'https://images.unsplash.com/photo-1609137144813-7d8858276f62?q=80&w=600&auto=format&fit=crop',
  'Bespoke Wall Shelves': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop',
  'Premium Mirrors': 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
  'Decorative Handicrafts': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop',

  // Centre Tables
  'Premium Centre Tables': 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop',
  'Coffee Tables': 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=600&auto=format&fit=crop',
  'Nesting Tables': 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600&auto=format&fit=crop',

  // Office & Study
  'Office Executive Chairs': 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?q=80&w=600&auto=format&fit=crop',
  'Visitor Seating': 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=600&auto=format&fit=crop',
  'Ergonomic Study Chairs': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600&auto=format&fit=crop',
  'Jhoolas': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop',

  // Wardrobes & Dressing
  'Dressing Table': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop',
  'Master Wardrobes': 'https://images.unsplash.com/photo-1558882224-dda166733360?q=80&w=600&auto=format&fit=crop',
  'Modular Cupboards': 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=600&auto=format&fit=crop',
  'Beeruva': 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=600&auto=format&fit=crop',

  // Kids Furniture
  'Kids Study Tables': 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop',
  'Bunk Beds': 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=600&auto=format&fit=crop',
  'Toy Storage Racks': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop',

  // Utility Furniture
  'Plastic Dining Tables': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop',
  'Lightweight Study Chairs': 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop',
  'Utility Folding Desks': 'https://images.unsplash.com/photo-1518051870910-a46e5449d16d?q=80&w=600&auto=format&fit=crop',
  'School Furniture': 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop',
};

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories: string[];
  description: string;
  image: string;
}

export default function ProductsSection() {
  const [viewingCategory, setViewingCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (viewingCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [viewingCategory]);

  const categories: Category[] = [
    {
      id: 'living',
      name: 'Sofas & Living Room',
      icon: <Sofa size={24} />,
      subcategories: [
        'Head Rest Model', 'L Shape Sofa', 'Corner Sofa', 'Pillow Model',
        'Fibre Model', 'Manual Recliner', 'Electrical Recliner',
        'RRR Recliner', 'Sofa Cum Bed', 'Lounger Model', 'Wooden Sofa', 'Customized Sofa'
      ],
      description: 'Luxurious comfort, ergonomic recliners, and custom sectionals designed to elevate your family living room.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'bedroom',
      name: 'Beds & Bedroom',
      icon: <Home size={24} />,
      subcategories: [
        'Beds', 'Diwan Cots', 'Adjustable Plywood Beds'
      ],
      description: 'Enduring teak wood and premium plywood beds, custom built with smooth storage options for your sanctuary.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'dining',
      name: 'Premium Dining',
      icon: <Palette size={24} />,
      subcategories: [
        'Dining Marble', 'Dining Tiles', 'Premium Dining Sets'
      ],
      description: 'Exquisite marble, tiles, and solid wood dining tables matching your aesthetics with flexible sizing.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'decor',
      name: 'Home Décor & Gift Items',
      icon: <Gift size={24} />,
      subcategories: [
        'Wooden Mandir', 'Bespoke Wall Shelves', 'Premium Mirrors', 'Decorative Handicrafts'
      ],
      description: 'Handcrafted wooden temples, decorative wall shelves, and premium artifacts to add warmth to your space.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'accent-tables',
      name: 'Centre Tables',
      icon: <Trophy size={24} />,
      subcategories: [
        'Premium Centre Tables', 'Coffee Tables', 'Nesting Tables'
      ],
      description: 'Sophisticated accent tables and functional centerpieces to tie your living area layout together.',
      image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'office',
      name: 'Office & Study',
      icon: <Users size={24} />,
      subcategories: [
        'Office Executive Chairs', 'Visitor Seating', 'Ergonomic Study Chairs', 'Jhoolas'
      ],
      description: 'Ergonomic lumbar support chairs, study seating, and traditional indoor swings built for your lifestyle.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'wardrobes',
      name: 'Wardrobes & Dressing',
      icon: <Shield size={24} />,
      subcategories: [
        'Dressing Table', 'Master Wardrobes', 'Modular Cupboards', 'Beeruva'
      ],
      description: 'Elegant, water-resistant wardrobes, modular steel cupboards (Beeruva), and dressing tables.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'kids',
      name: 'Kids Furniture',
      icon: <Smile size={24} />,
      subcategories: [
        'Kids Study Tables', 'Bunk Beds', 'Toy Storage Racks'
      ],
      description: 'Vibrant, safe, and modular furniture crafted to inspire creativity and keep your kids organized.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'utility',
      name: 'Utility Furniture',
      icon: <CheckCircle size={24} />,
      subcategories: [
        'Plastic Dining Tables', 'Lightweight Study Chairs', 'Utility Folding Desks', 'School Furniture'
      ],
      description: 'High-grade, durable plastic tables, folding study desks, and institutional school furniture.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const handleArrowClick = () => {
    const nextSectionEl = document.getElementById('products-content-anchor');
    if (nextSectionEl) {
      nextSectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <div className="section-scroll-arrow" onClick={handleArrowClick} title="Scroll Down">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="M19 12l-7 7-7-7"></path>
          </svg>
        </div>
        <span className="section-subtitle">EXPLORE OUR COLLECTIONS</span>
        <h2 className="section-title">Our Premium Categories</h2>
      </div>

      <div id="products-content-anchor" style={{ position: 'relative', top: '-100px' }} />

      <div className="products-layout-wrapper">
        {/* Vertical List of Categories with Horizontal Scrolling Row */}
        <div className="categories-list-view">
          {categories.map((cat) => (
            <div key={cat.id} className="category-row-section">
              
              {/* Category Row Header */}
              <div className="category-row-header">
                <div className="category-row-title-wrap">
                  <div className="category-row-icon">{cat.icon}</div>
                  <h3 className="category-row-name">{cat.name}</h3>
                </div>
                <button className="category-view-all-link" onClick={() => setViewingCategory(cat)}>
                  <span>View All</span>
                  <ArrowRight size={14} className="view-all-arrow" />
                </button>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="subcategory-scroll-container">
                {cat.subcategories.map((sub, idx) => {
                  const imageUrl = subcategoryImages[sub] || cat.image;
                  return (
                    <div key={idx} className="subcategory-card scroll-card">
                      <div className="subcategory-card-accent" />
                      <div className="subcategory-card-image-wrap">
                        <img src={imageUrl} alt={sub} className="subcategory-card-img" loading="lazy" />
                      </div>
                      <div className="subcategory-card-body">
                        <span className="subcategory-parent-tag">{cat.name}</span>
                        <h4 className="subcategory-name">{sub}</h4>
                        <a href="#contact" className="subcategory-cta">
                          <span>Inquire Now</span>
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen category detail overlay */}
      {viewingCategory && (
        <div className="category-detail-overlay">
          <div className="overlay-content-wrapper">
            <button className="btn-back-to-categories" onClick={() => setViewingCategory(null)}>
              <ArrowLeft size={18} />
              <span>Back to Categories</span>
            </button>

            <div className="active-category-header">
              <div className="active-category-icon">
                {viewingCategory.icon}
              </div>
              <div className="active-category-title-desc">
                <h3 className="active-category-title">{viewingCategory.name}</h3>
              </div>
            </div>

            <div className="subcategories-grid">
              {viewingCategory.subcategories.map((sub, idx) => {
                const imageUrl = subcategoryImages[sub] || viewingCategory.image;
                return (
                  <div key={idx} className="subcategory-card">
                    <div className="subcategory-card-accent" />
                    <div className="subcategory-card-image-wrap">
                      <img src={imageUrl} alt={sub} className="subcategory-card-img" loading="lazy" />
                    </div>
                    <div className="subcategory-card-body">
                      <span className="subcategory-parent-tag">{viewingCategory.name}</span>
                      <h4 className="subcategory-name">{sub}</h4>
                      <a href="#contact" className="subcategory-cta" onClick={() => setViewingCategory(null)}>
                        <span>Inquire Now</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
