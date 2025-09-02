# CareSpace

CareSpace is a marketplace platform designed to be the "AirBnB of care homes" — connecting families seeking care with available facilities and investment opportunities. This repository contains the project specification and (starter) implementation for the product.

## Table of contents
- Overview
- Key features
- User roles & permissions
- Technical requirements & non-functional goals
- Suggested architecture & technology choices
- Getting started (developer)
- Environment & configuration (placeholders)
- Testing
- Deployment & scaling notes
- Roadmap / Phase 2
- Success metrics
- Contributing
- License & contact

## Overview
CareSpace helps families discover, evaluate, book and invest in care homes. It supports two primary marketplaces:
- Booking marketplace: find and book placements at care homes.
- Investment marketplace: list and evaluate care homes for purchase or investment.

The platform also includes customer management, payments, compliance and admin tooling.

## Key features (from requirements)
- Landing page with modern purple theme, hero, CTAs, testimonials and mobile responsive design
- Care home listings with:
  - Detailed facility pages (amenities, staff, capacity)
  - Photo galleries and virtual tours
  - Availability calendar and pricing
  - Location, contact details, reviews & ratings
- Marketplace for investment opportunities with financials, ROI, documents and due diligence access
- Advanced search & discovery:
  - Filters (location, price, amenities)
  - Sorting (relevance, price, rating, distance)
  - Map-based search, saved searches, favorites
- Customer management:
  - User registration and profiles
  - Family member forms and care assessments
  - Medical/dietary info, emergency contacts, document uploads
- Payments:
  - Secure payment processing (placeholder integration)
  - Support for deposits, full and recurring payments
  - Invoice generation and refund handling
- Platform admin:
  - User verification, moderation, analytics, support tools

## User roles
- Families / Customers
- Care Home Owners / Operators
- Investors
- Platform Administrators

Each role has role-based permissions for listing, booking, investments, responding to inquiries and managing content.

## Technical requirements & goals
- Performance: pages < 3s, mobile-first, SEO-friendly, accessible (WCAG 2.1), cross-browser compatible
- Security: secure auth, encryption in transit & at rest, PCI for payments, GDPR-compliant, routine audits
- Scalability: component-based architecture, API-ready backend, caching, CDN for media, DB optimization

## Suggested architecture & technology
The project is stack-agnostic; below are recommended starters:

Frontend
- React or Next.js for SEO-friendly pages and server-rendered landing pages
- TailwindCSS or component library (with purple theme) for rapid UI
- Map integration (Mapbox / Google Maps)

Backend / API
- Node.js + Express / NestJS or Python + Django/DRF
- GraphQL or REST API
- Authentication (JWT / OAuth2 / session-based)

Database & storage
- PostgreSQL for relational data
- S3-compatible object storage for media
- Redis for caching and background job/state

Payments & integrations
- Stripe (or another PCI-compliant provider) for payments
- Email provider (SendGrid / Mailgun)
- Optional: EHR / insurance / government integrations (phase 2)

Deployment & infra
- Dockerized services
- Kubernetes / managed containers on AWS/GCP/Azure
- CDN for static and media (CloudFront, Cloudflare)
- CI/CD pipelines (GitHub Actions)

## Getting started (developer)
These are generic steps — adapt to the chosen stack:

1. Clone the repository
   git clone https://github.com/dcurioustech/care_space.git
2. Install dependencies
   - For Node: npm install or yarn
   - For Python: pip install -r requirements.txt (or use Poetry)
3. Configure environment variables (see .env.example or the Environment section)
4. Run database migrations
   - Example: npm run migrate / python manage.py migrate
5. Start local services
   - Frontend: npm run dev
   - Backend: npm run start:dev or python manage.py runserver
6. Run tests
   - npm test or pytest

Replace the example commands with the actual scripts used by the chosen stack in this repository.

## Environment & configuration (placeholders)
Keep secrets out of source control. Typical environment variables:
- DATABASE_URL
- SECRET_KEY / JWT_SECRET
- STRIPE_API_KEY (payments)
- S3_BUCKET, S3_REGION, S3_ACCESS_KEY, S3_SECRET_KEY
- EMAIL_PROVIDER_API_KEY

Provide a `.env.example` file with keys (no secret values).

## Testing
- Unit tests for backend models, services and API endpoints
- Integration tests for critical flows (booking, payment)
- E2E tests for core user journeys (Cypress / Playwright)
- Security and accessibility checks (Snyk/Dependabot, aXe)

## Deployment & scaling notes
- Use connection pooling for the DB and sensible caching on read-heavy endpoints (listings, search)
- Serve images and static assets from a CDN and optimize images for web
- Rate-limit public APIs and protect sensitive endpoints
- Use background workers for long-running tasks (email, document processing, thumbnail generation)

## Roadmap (Phase 2 & beyond)
- Mobile apps (native or React Native)
- Advanced matching & recommendation algorithms
- AI-powered care recommendations and search enhancements
- Telehealth integration and community features
- EHR/insurance provider integrations and more marketplace analytics

## Success metrics
- Monthly active users (MAU)
- Booking conversion rate and search-to-inquiry conversion
- Average transaction value and total booking volume
- Customer retention and acquisition cost (CAC)

## Contribution
We welcome contributions. Suggested workflow:
1. Open an issue describing the change or feature
2. Create a branch: feature/<short-description>
3. Submit a PR referencing the issue and include tests
4. Maintain code quality: linting, tests, and documentation updates

See CONTRIBUTING.md for more details (if present).

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact
For questions, reach out to the maintainers or open an issue in this repository.
