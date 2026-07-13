# Maha Furnitures — Premium Bespoke Craftsmanship

Maha Furnitures is a premium, modern, responsive single-page web application showcasing bespoke, handcrafted furniture by the **Lakkakula Brothers** (**Bhoomesh** in Metpally & **Chary** in Jagtial). The application features smooth scroll animations, custom interactive carousels, real-time product search, and booking capabilities for site measurements.

Built with **React 19**, **TypeScript**, **Vite**, **GSAP**, and **Framer Motion**, the application provides a highly polished, high-performance user experience with custom glassmorphism components, slatted wood-themed hero designs, and stack-pinned scrolling panels.

---

## 💎 Features & Interactive Modules

### 1. Preloader Screen
- **Seamless Loading:** Elegant initial entry preloader with smooth fade-out effects using GSAP.
- **Brand Elevation:** Prepares the viewport and assets to prevent visual flashes (FOUC).

### 2. Header & Navigation System
- **Sticky Banner:** Dynamic top-bar highlighting active promotions, announcements, and showroom visit reminders.
- **Glassmorphism Navbar:** Sleek, blur-backdrop header that tracks page scroll and animates onto the screen during page load. Includes clean navigation links pointing to the various sections of the single-page layout.

### 3. Hero Showcase
- **Modern Slatted Background:** Deep green, slatted-wood texture wall background that emphasizes premium woodwork.
- **Interactive CTA:** "Book Site Visit" button that smoothly scrolls the user down to the booking form.
- **Gsap Timelines:** Smooth staggered fade-in animations for typography, sibling buttons, stats, and founder imagery.

### 4. Interactive Products Section
- **Multi-Category Filter:** Displays detailed subcategories for various furniture requirements:
  - **Sofas & Living Room** (Corner sofas, L-Shape, Recliners, Sofa cum Beds, Langer models, etc.)
  - **Beds & Bedroom** (Teak wood beds, Plywood beds, Hydraulic Storage beds, etc.)
  - **Premium Dining** (Marble top, Tiles top, Teak wooden dining, Adjustable luxury models)
  - **Diwans** (With/without utility storage)
  - **Centre Tables** (Coffee tables, Nesting tables, Premium accent pieces)
  - **Office & Study** (Ergonomic Executive chairs, Visitor seating, lumbar support desks)
  - **Wardrobes & Dressing** (Master wardrobes, Modular cupboards, custom Dressing tables)
  - **Jhoolas & Swings** (Traditional teak wood swings handcrafted by local artisans)
  - **Utility Furniture** (Durable, lightweight plastic tables and chairs)
- **Layered Horizontal Scroll (Desktop):** Driven by GSAP `ScrollTrigger`, scrolling down smoothly translates cards horizontally to reveal products category-by-category.
- **Touch-Friendly Swiping (Mobile):** Automatically falls back to a touch-interactive, responsive swipeable carousel for mobile screens.
- **Bespoke Inquiries:** Each item is equipped with direct quick-action links connecting to the inquiry form.
- **Real-Time Search:** Fast search bar allowing users to find specific subcategory items instantly.

### 5. Customization Workflow (`CustomizedSection`)
- **Interactive Stacking Panels:** Shows our end-to-end bespoke design methodology:
  1. *Plan a Showroom / Site Visit* — Personalized showroom tour or scheduling a designer home visit.
  2. *Measurements & Requirements* — Precision structural space measuring at customer homes.
  3. *Style & Material Selection* — Premium raw materials, custom fabric shades, and cushion density.
  4. *Crafting & Home Delivery* — On-site carpentering, transit, installation, and assembly.
- **GSAP Overlay Stacking:** Cards stack on top of each other sequentially with scale-down and fade effects on scroll.

### 6. Showrooms & Locations Finder
- Detailed address, contact numbers, store hours, and active "Get Directions" links leading to Google Maps locations:
  - **Metpally Showroom:** RJWP+GQ3, Main road, Metpally, Telangana 505325.
  - **Jagtial Showroom:** 1, 5-33, opp. RK Nursery, Chelgal, Hasnabad, Telangana 505455.

### 7. Interactive Booking Form
- Form handling that gathers visitor's Name, Phone Number, Preferred Showroom/Service, and Custom Requirements.
- Real-time client validation and interactive success overlay.

---

## 🛠️ Technology Stack

| Library / Tool | Purpose | Version |
| :--- | :--- | :--- |
| **React** | Component Architecture & Reactivity | `^19.2.6` |
| **TypeScript** | Type-safe development | `~6.0.2` |
| **Vite** | Lightning-fast build tool & Dev server | `^8.0.12` |
| **GSAP** | ScrollTrigger, Stacking, Timelines & Entry animations | `^3.15.0` |
| **Framer Motion** | UI Transitions & Mobile Swiping gestures | `^12.40.0` |
| **Lucide React** | Premium Iconography | `^1.17.0` |
| **Vanilla CSS** | Highly customized responsive typography & layouts | Native |

---

## 📂 Project Architecture

The project maintains a modular, clean folder hierarchy:

```text
maha-furnitures/
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/             # Upholstery, showroom, founder, and category images
│   ├── components/         # Page Sections & Core Components
│   │   ├── ui/             # Reusable UI primitives (e.g. Carousel)
│   │   ├── BranchesSection.tsx / .css
│   │   ├── ContactSection.tsx / .css
│   │   ├── CustomizedSection.tsx / .css
│   │   ├── Footer.tsx / .css
│   │   ├── HeroSection.tsx / .css
│   │   ├── Navbar.tsx / .css
│   │   ├── Preloader.tsx / .css
│   │   ├── ProductsSection.tsx / .css
│   │   └── StickyBanner.tsx / .css
│   ├── App.tsx             # Root Layout & Main Orchestration
│   ├── App.css             # Root styles
│   ├── index.css           # Global typography, CSS variables, resets, & themes
│   └── main.tsx            # Application entry point
├── package.json            # Scripts & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configurations
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone & Install Dependencies
Navigate to the root directory and install dependencies:
```bash
npm install
```

### 2. Start the Development Server
Launch the local dev environment at [http://localhost:5173](http://localhost:5173):
```bash
npm run dev
```

### 3. Build for Production
Bundle and optimize all typescript assets for static hosting:
```bash
npm run build
```
The build artifacts will be generated in the `dist/` directory.

### 4. Preview Production Build
Locally preview your production build using:
```bash
npm run preview
```

---

## ✍️ Customization Details

Maha Furnitures operates on a custom-to-order manufacturing model. If customers require specific customizations:
- **Material Choices:** Pure Teak Wood (Sagwan), Commercial/Boiling Water Resistant (BWR) Plywood.
- **Upholstery & Cushioning:** Choose custom foam densities (32 Density, 40 Density, Sleepwell, etc.) and custom premium fabrics (Velvet, Leatherette, Jute, Suede).
- **Home Measurement Services:** Free local site measurement and quotation visits can be requested directly via the web form.

---

## ⚖️ License

Private repository. All rights reserved by Maha Furnitures & Lakkakula Brothers.
