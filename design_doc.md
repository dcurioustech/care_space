# CareSpace - Design Document

## Design Philosophy
Create a trustworthy, accessible, and elegant platform that feels professional yet warm - balancing the serious nature of care decisions with an inviting user experience.

## Visual Design System

### Color Palette
**Primary Colors:**
- Purple Primary: `#8B5CF6` (Violet-500)
- Purple Dark: `#7C3AED` (Violet-600) 
- Purple Light: `#A78BFA` (Violet-400)
- Purple Accent: `#C4B5FD` (Violet-300)

**Secondary Colors:**
- White: `#FFFFFF`
- Gray-50: `#F9FAFB` (Backgrounds)
- Gray-100: `#F3F4F6` (Card backgrounds)
- Gray-400: `#9CA3AF` (Secondary text)
- Gray-800: `#1F2937` (Primary text)
- Gray-900: `#111827` (Headers)

**Status Colors:**
- Success: `#10B981` (Emerald-500)
- Warning: `#F59E0B` (Amber-500)
- Error: `#EF4444` (Red-500)
- Info: `#3B82F6` (Blue-500)

### Typography
**Font Stack:** System fonts for performance and familiarity
- Primary: `Inter, system-ui, sans-serif`
- Monospace: `'Fira Code', Consolas, monospace`

**Scale:**
- H1: `text-4xl` (36px) - Page titles
- H2: `text-3xl` (30px) - Section headers
- H3: `text-2xl` (24px) - Subsections
- H4: `text-xl` (20px) - Card titles
- Body: `text-base` (16px) - Main content
- Small: `text-sm` (14px) - Labels, captions

### Component Design Principles

#### Cards
- Subtle shadows: `shadow-sm` and `shadow-md`
- Rounded corners: `rounded-lg` (8px)
- White backgrounds with purple accent borders
- Hover states with gentle elevation increase

#### Buttons
**Primary:** Purple background with white text
**Secondary:** White background with purple border
**Ghost:** Transparent with purple text
**Sizes:** Small (32px), Medium (40px), Large (48px)

#### Forms
- Clear labels and helpful placeholder text
- Purple focus states with ring effects
- Error states with red text and borders
- Success states with green indicators

#### Navigation
- Clean, minimal header with logo and key actions
- Mobile: Hamburger menu with slide-out drawer
- Desktop: Horizontal navigation with dropdowns
- Sticky positioning for easy access

## Layout Architecture

### Grid System
- 12-column CSS Grid for complex layouts
- Flexbox for component-level alignment
- Container max-width: `max-w-7xl` (1280px)
- Consistent spacing scale: 4, 8, 16, 24, 32, 48, 64px

### Responsive Breakpoints
```
sm: 640px   - Large mobile
md: 768px   - Tablet
lg: 1024px  - Small desktop
xl: 1280px  - Large desktop
2xl: 1536px - Extra large
```

### Mobile-First Approach
- Stack vertically on mobile
- Progressive enhancement for larger screens
- Touch-friendly target sizes (44px minimum)
- Thumb-friendly navigation placement

## User Experience Design

### Information Hierarchy
1. **Primary Actions:** Book care, Find investment opportunities
2. **Secondary Actions:** Search, Filter, Browse
3. **Tertiary Actions:** Account management, Support

### User Journey Mapping

#### Family Searching for Care
1. Landing page → Value proposition clear
2. Search/Browse → Easy filtering and comparison
3. Care home details → Comprehensive information
4. Inquiry/Booking → Simple form process
5. Payment → Secure and transparent

#### Investor Looking for Opportunities
1. Marketplace entry point
2. Investment listings with financial data
3. Due diligence documentation
4. Contact/Purchase process
5. Portfolio management

### Accessibility Considerations
- WCAG 2.1 AA compliance
- High contrast ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators on all interactive elements
- Alternative text for all images

## Component Library Structure

### Base Components
- **Button:** Multiple variants and sizes
- **Input:** Text, email, password, number, textarea
- **Select:** Dropdown with search capability
- **Checkbox/Radio:** Custom styled form controls
- **Badge:** Status indicators and labels
- **Avatar:** User profile images with fallbacks

### Layout Components
- **Container:** Responsive width constraints
- **Grid:** Flexible grid system
- **Stack:** Vertical spacing component
- **Divider:** Section separators
- **Card:** Content containers
- **Modal:** Overlays and dialogs

### Navigation Components
- **Header:** Main site navigation
- **Sidebar:** Secondary navigation
- **Breadcrumb:** Page hierarchy
- **Pagination:** List navigation
- **Tabs:** Content switching

### Data Display Components
- **Table:** Structured data presentation
- **List:** Simple and complex lists
- **Stats:** Metrics and KPIs
- **Progress:** Loading and completion states
- **Empty State:** No data scenarios

### Specialized Components
- **CareHomeCard:** Facility preview cards
- **SearchFilters:** Advanced search interface
- **BookingForm:** Multi-step booking process
- **PaymentForm:** Secure payment collection
- **ReviewCard:** User feedback display
- **MapView:** Location-based search

## Animation and Interaction

### Micro-interactions
- Button hover: Slight scale (1.02x) and shadow increase
- Card hover: Subtle lift with shadow enhancement
- Form focus: Ring animation with color transition
- Loading states: Skeleton screens and spinners

### Page Transitions
- Smooth fade-ins for content loading
- Stagger animations for list items
- Progressive disclosure for complex forms
- Smooth scrolling for anchor links

### Performance Considerations
- CSS transforms for smooth animations
- RequestAnimationFrame for complex animations
- Reduced motion support for accessibility
- 60fps target for all interactions

## Brand Voice and Tone

### Content Strategy
- **Professional yet approachable**
- Clear, jargon-free language
- Empathetic understanding of care decisions
- Trustworthy and reliable messaging
- Inclusive and diverse representation

### Photography Style
- Warm, natural lighting
- Diverse representation of families and caregivers
- Real facility photos, not stock imagery
- Focus on comfort and dignity
- Professional but not clinical feeling

## Technical Design Decisions

### CSS Framework
- Tailwind CSS for utility-first styling
- Custom design tokens for brand consistency
- Component-scoped styles when needed
- PostCSS for build optimization

### Icon System
- Lucide React for consistent iconography
- 24px standard size with scaling options
- Outlined style for better accessibility
- Semantic naming convention

### State Management
- React hooks for local component state
- Context API for global application state
- Form state with React Hook Form
- URL state for search and filters

### Performance Optimization
- Lazy loading for images and components
- Code splitting for route-based chunks
- Critical CSS inlining
- Service worker for caching strategy