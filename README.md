# UX Developer Sr. Challenge - Interview Assessment

## Overview

This is a technical interview challenge designed to assess UX Developer candidates' skills in building responsive, accessible, and well-architected user interfaces. I developed this challenge to evaluate candidates during the interview process for senior UX Developer positions.

The challenge tests candidates' ability to translate Figma designs into functional React applications while demonstrating proficiency in:
- Component architecture and reusability
- Responsive design implementation
- Accessibility best practices
- TypeScript and type safety
- CSS architecture and methodology
- Attention to detail and design fidelity

## Project Architecture

### Technology Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript 5.6** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **React Router DOM 6** - Client-side routing
- **CSS Modules** - Scoped styling with modular architecture
- **Radix UI** - Accessible, unstyled component primitives (Dialog/Modal)
- **TanStack Table** - Powerful table functionality
- **Heroicons** - Icon library

### Folder Structure

The project follows the Atomic Design methodology with a clear separation of concerns:

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── button/
│   │   ├── chip/
│   │   ├── toggle/
│   │   └── card-icon/
│   ├── molecules/       # Simple component combinations
│   │   ├── card/
│   │   ├── tabs/
│   │   └── empty-state/
│   └── organisms/       # Complex UI sections
│       ├── modal/
│       ├── nav/
│       │   ├── header/
│       │   ├── sidebar/
│       │   ├── mobile/
│       │   └── nav-items/
│       └── table/
│           ├── details/
│           └── mobile-card/
├── routes/              # Page-level components
│   ├── root.tsx
│   ├── dashboard.tsx
│   ├── orders.tsx
│   └── messages.tsx
├── hooks/               # Custom React hooks
│   └── useIsMobile.ts
├── constants/           # App-wide constants
│   └── nav-items.tsx
├── data/                # Mock data
│   └── data.json
└── styles/              # Global styles
    ├── reset.css
    ├── theme.css
    ├── typography.css
    ├── layout.css
    └── ui.css
```

### Component Architecture

**Atomic Design Pattern:**
- **Atoms**: Smallest, reusable components (Button, Chip, Toggle)
- **Molecules**: Combinations of atoms (Card, Tabs, Empty State)
- **Organisms**: Complex components with business logic (Table, Navigation, Modal)
- **Pages**: Route-level components that compose organisms

**Styling Strategy:**
- CSS Modules for component-scoped styles
- Global CSS variables for theming (light/dark mode)
- Mobile-first responsive design approach
- No CSS frameworks (Tailwind deliberately excluded)

**Type Safety:**
- Dedicated `.types.ts` files for each component
- Strict TypeScript configuration
- Props interfaces for all components

## The Challenge

### Scenario
The client has requested an Admin Dashboard to track the latest transactions in sales and revenue. Candidates receive a Figma design and must implement a complete, production-ready solution.

**Figma Design:** [View Here](https://www.figma.com/design/8kNilrpajBQITsPd4kqObw/UX-Dev-Challenge-SR)

### Requirements

Candidates must implement:

1. **Theme Switching**
   - Toggle between dark and light modes
   - Persistent theme preference
   - Smooth transitions

2. **Responsive Design**
   - Desktop, tablet, and mobile layouts
   - Adaptive navigation (sidebar → mobile menu)
   - Responsive table (table view → card view on mobile)

3. **Interactive Features**
   - Transaction drawer with detailed view
   - Approve/Reject actions for pending transactions
   - Confirmation modals
   - Tab navigation (All Orders / Order History)
   - Collapsible sidebar

4. **Empty States**
   - Messages section empty state
   - Orders tab empty state

5. **Accessibility**
   - ARIA labels and roles
   - Keyboard navigation
   - Focus management
   - Screen reader support

### Evaluation Criteria

Candidates are assessed on:
- **Design Fidelity**: How closely the implementation matches Figma designs
- **Code Quality**: Component structure, reusability, and maintainability
- **Responsive Implementation**: Mobile-first approach and breakpoint logic
- **Accessibility**: WCAG compliance and keyboard navigation
- **TypeScript Usage**: Type safety and interface definitions
- **CSS Architecture**: Naming conventions, modularity, and organization
- **Documentation**: Code comments and decision explanations
- **Attention to Detail**: Hover states, transitions, spacing, typography

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deruvodaniel/ux-dev-candidates-challenge.git
cd ux-dev-candidates-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Features Implemented

### Navigation System
- **Desktop**: Full sidebar with expandable/collapsible states
- **Mobile**: Hamburger menu with drawer navigation
- **Responsive header** with theme toggle and user profile

### Dashboard
- Transaction table with sorting and filtering
- Transaction details drawer
- Status chips (Approved, Pending, Rejected)
- Action buttons for pending transactions
- Confirmation modals

### Theme System
- CSS custom properties for color tokens
- System preference detection
- Smooth theme transitions
- Persistent user preference

### Responsive Patterns
- Breakpoints: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- Mobile-first CSS
- Adaptive component rendering
- Touch-friendly interactions

## Design System

### Color Tokens
Light and dark mode variables defined in `theme.css`:
- Primary colors
- Neutral grays
- Semantic colors (success, warning, error)
- Surface colors
- Border colors

### Typography
- Font family: System font stack
- Scale: 12px - 32px
- Weights: 400, 500, 600, 700

### Spacing
- Base: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64px

## For Candidates

### Tips for Success

1. **Start with Planning**
   - Review all Figma screens before coding
   - Plan your component hierarchy
   - Identify reusable patterns

2. **Focus on Quality Over Speed**
   - Clean, maintainable code
   - Proper TypeScript types
   - Semantic HTML

3. **Responsive Design**
   - Mobile-first approach
   - Test at multiple breakpoints
   - Consider touch interactions

4. **Accessibility First**
   - Use semantic HTML
   - Add ARIA labels
   - Test keyboard navigation

5. **Document Your Decisions**
   - Comment complex logic
   - Explain responsive strategies
   - Note any trade-offs made

### What We're NOT Testing
- Complex state management (Redux, Zustand)
- API integration
- Routing complexity
- Business logic implementation
- Testing (Jest, RTL)

### What We ARE Testing
- Component architecture
- CSS skills
- Responsive design
- Accessibility
- Attention to detail
- Code organization

## License

This project is designed for interview assessment purposes.

## Author

**Daniel De Ruvo**  
Senior UX Developer  
Created for technical interview assessments

---

*This challenge was designed to evaluate candidates' ability to build production-ready, accessible, and responsive user interfaces with modern web technologies.*

2. **Start the development server**
    Once the dependencies are installed, run this command to start the application in development mode:

    ```bash
   npm run dev
    ```


## Deliverables

- Complete project files that work on Chrome, Safari, Firefox, and Edge, along with project documentation. Please deliver everything through a GitHub repository.

**Have fun building!**
