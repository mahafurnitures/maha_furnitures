import { useState, useEffect } from 'react';
import { Sofa, Home, Palette, Gift, Trophy, Users, Shield, Smile, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import './ProductsSection.css';

// Curated mappings from subcategory title to high-quality Unsplash image URLs
const subcategoryImages: Record<string, string> = {
  // Sofas & Living Room
  'Head Rest Model': '/mahaFurnitureImages/headrestsofa2.jpg',
  'L Shape Sofa': '/mahaFurnitureImages/LshapeSofa1.avif',
  'Corner Sofa': '/mahaFurnitureImages/CornerSOfa.jpg',
  'Pillow Model': '/mahaFurnitureImages/pillomodelSofa.jpg',
  'Fibre Model': '/mahaFurnitureImages/FiberModelSofa.jpg',
  'Manual Recliner': '/mahaFurnitureImages/manualRecliner.jpg',
  'Electrical Recliner': '/mahaFurnitureImages/electricalRecliner..jpg',
  'RRR Recliner': '/mahaFurnitureImages/RRR recliners.jpg',
  'Sofa Cum Bed': '/mahaFurnitureImages/SofacomBed.jpg',
  'Lounger Model': '/mahaFurnitureImages/loungermodel.jpg',
  'Wooden Sofa': '/mahaFurnitureImages/WoddenSofa.jpg',
  'Customized Sofa': '/mahaFurnitureImages/customizedsofa.jpg',

  // Beds & Bedroom
  'Beds': '/mahaFurnitureImages/beds.jpg',
  'Diwan Cots': '/mahaFurnitureImages/DiwanCots.jpg',
  'Adjustable Plywood Beds': '/mahaFurnitureImages/AdjustableFlywoodBeds.jpg',

  // Premium Dining
  'Dining Marble': "/mahaFurnitureImages/marbelDiningTable'.jpg",
  'Dining Tiles': '/mahaFurnitureImages/TilesDiningTable.jpg',
  'Premium Dining Sets': '/mahaFurnitureImages/premimum dining sets.jpg',

  // Home Decor & Gift Items
  'Wooden Mandir': '/mahaFurnitureImages/woddenmandhir.jpg',
  'Bespoke Wall Shelves': '/mahaFurnitureImages/BespokeWallShelves.jpg',
  'Premium Mirrors': '/mahaFurnitureImages/premimum mirror images.jpg',
  'Decorative Handicrafts': '/mahaFurnitureImages/decorativehandycrafts.jpg',

  // Centre Tables
  'Premium Centre Tables': '/mahaFurnitureImages/premiumCenterTables.jpg',
  'Coffee Tables': '/mahaFurnitureImages/Coffietables.jpg',
  'Nesting Tables': '/mahaFurnitureImages/nestingTables.jpg',

  // Office & Study
  'Office Executive Chairs': '/mahaFurnitureImages/OfficeExecutiveChairs.jpg',
  'Visitor Seating': '/mahaFurnitureImages/visitorSeating.jpg',
  'Ergonomic Study Chairs': '/mahaFurnitureImages/ErgonomicsChairs.jpg',
  'Jhoolas': '/mahaFurnitureImages/jholas.jpg',

  // Wardrobes & Dressing
  'Dressing Table': '/mahaFurnitureImages/DressingTables.jpg',
  'Master Wardrobes': '/mahaFurnitureImages/masterWadrobes.jpg',
  'Modular Cupboards': '/mahaFurnitureImages/modularCupBoards.jpg',
  'Beeruva': '/mahaFurnitureImages/Beeruva.jpg',

  // Kids Furniture
  'Kids Study Tables': '/mahaFurnitureImages/KidsStidyTable.jpg',
  'Bunk Beds': '/mahaFurnitureImages/BunkBeds.jpg',
  'Toy Storage Racks': "/mahaFurnitureImages/ToyStorageRacks'.jpg",

  // Utility Furniture
  'Plastic Dining Tables': '/mahaFurnitureImages/PlasticDiningTables.jpg',
  'Lightweight Study Chairs': '/mahaFurnitureImages/LIghtWeightStudyTables.jpg',
  'Utility Folding Desks': '/mahaFurnitureImages/UtilityFoaldingDesks.jpg',
  'School Furniture': '/mahaFurnitureImages/SchoolFurnitures.jpg',
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
