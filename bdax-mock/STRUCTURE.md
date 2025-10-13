# BDAX Website Mock - Project Structure

## Overview
A clean, modular Next.js application built with TypeScript, Tailwind CSS, and Shadcn UI.

## Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main landing page (composes all sections)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles & Tailwind config
├── components/
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   │   ├── Header.tsx
│   │   └── index.ts
│   ├── sections/          # Page sections (modular & reusable)
│   │   ├── Banner.tsx
│   │   ├── Hero.tsx
│   │   ├── Cohort.tsx
│   │   ├── Portfolio.tsx
│   │   ├── FounderResources.tsx
│   │   └── index.ts
│   └── ui/                # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── separator.tsx
├── data/
│   └── content.ts         # All website content (data-driven)
└── lib/
    └── utils.ts           # Utility functions
```

## Key Principles

### 1. **Data-Driven Content**
All content is centralized in `src/data/content.ts`. No hardcoded strings in components.

```typescript
// Example: Modify navigation links
export const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Network', href: '#network' },
  // Add more links here
];
```

### 2. **Modular Components**
Each section is a standalone component with clear responsibilities:
- **Header**: Navigation & branding
- **Banner**: Announcement banner
- **Hero**: Main hero section with CTA
- **Cohort**: Stats and cohort information
- **Portfolio**: Company showcase
- **FounderResources**: Resources section

### 3. **Flexible Layouts**
Components use Tailwind's responsive utilities for flexible layouts that won't break:
- Grid systems adapt to screen sizes
- No fixed positions
- Responsive spacing

### 4. **Clean Code**
- No unnecessary React hooks or state
- Presentational components
- TypeScript for type safety
- Shadcn UI for consistent, accessible components

## How to Modify

### Change Content
Edit `src/data/content.ts`:
```typescript
export const heroContent = {
  title: 'Your New Title',
  description: 'Your description',
  // ...
};
```

### Add New Section
1. Create component in `src/components/sections/`
2. Add data to `src/data/content.ts`
3. Import and use in `src/app/page.tsx`

### Styling
- Use Tailwind utility classes
- Modify design tokens in `src/app/globals.css`
- Shadcn components in `src/components/ui/`

## Running the Project

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

Visit: http://localhost:3000

