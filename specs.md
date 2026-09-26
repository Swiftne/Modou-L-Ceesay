# Portfolio Project Specifications

## 1. Project Overview

**Project name:** My Portfolio  
**Package name:** `my-portfolio`  
**Project type:** Personal developer portfolio  
**Primary goal:** Present Modou L Ceesay's profile, selected projects, technical skills, background, and contact options in a responsive single-page experience.

## 2. Technology Stack

- React `19.2.8`
- TypeScript `~6.0.2`
- Vite `^8.3.0`
- Tailwind CSS `^4.3.3`
- `@tailwindcss/vite` integration
- ESLint with TypeScript and React plugins
- Google Fonts:
  - Manrope for primary interface text
  - DM Mono for metadata and labels
  - Playfair Display for editorial emphasis

## 3. Application Structure

The application is composed in `src/App.tsx` in this order:

1. `SiteNav`
2. `Hero`
3. `WorkSection`
4. `SkillsSection`
5. `AboutSection`
6. `ContactSection`

The page is a single scrolling experience with anchor navigation.

## 4. Directory Responsibilities

```text
src/
├── App.tsx                         Page composition
├── main.tsx                        React application entry point
├── Componets/
│   ├── Layouts/
│   │   └── SiteNav.tsx             Sticky navigation
│   ├── Sections/
│   │   ├── AboutSection.tsx         About and background content
│   │   ├── ContactSection.tsx       Email and social links
│   │   ├── Hero.tsx                 Introductory hero section
│   │   ├── SkillsSection.tsx        Tools and skills badges
│   │   └── WorkSection.tsx          Project cards
│   └── UI/
│       └── ArrowUpRight.tsx         Shared external-link arrow
├── Data/
│   └── projects.ts                  Project type and project records
├── assets/                          Bundled static assets
├── styles/
│   └── index.css                    Tailwind theme, base rules, animations
├── Hooks/                            Reserved for reusable React hooks
├── Types/                            Reserved for shared TypeScript types
└── libs/                             Reserved for shared utilities
```

> The directory is currently named `Componets` to match the existing project imports.

## 5. Navigation Requirements

The navigation must:

- Remain sticky at the top of the viewport.
- Use a translucent paper-colored background.
- Apply backdrop blur, a subtle bottom border, and a soft shadow.
- Link to the following page anchors:
  - `#top`
  - `#work`
  - `#skills`
  - `#about`
  - `#contact`
- Animate navigation underlines:
  - Expand from left to right on hover.
  - Retract from right to left when the pointer leaves.

## 6. Page Sections

### Hero

- Identifies the site owner as an independent developer.
- Includes a short positioning statement.
- Links to selected work.
- Includes a scroll cue and location statement.

### Selected Work

- Displays three project records from `src/Data/projects.ts`.
- Uses responsive project cards with abstract color artwork as a fallback.
- Supports optional screenshots through the `image` field.
- Supports optional external project links through the `url` field.
- External project links open in a new browser tab.

### Skills

Displays badges for the current toolset:

- React
- TypeScript
- Tailwind
- Vite
- HTML
- JavaScript
- Python

### About

- Introduces Modou L Ceesay.
- Describes current web development and structural architecture studies.
- Links to the contact section.

### Contact

- Displays the contact email:
  `ceesaymodoulamin201@gmail.com`
- Provides links to Instagram, LinkedIn, and Facebook.
- Social links open in a new browser tab.

## 7. Project Data Contract

Project records use the following TypeScript shape:

```ts
export type Project = {
  number: string
  title: string
  type: string
  year: string
  tone: string
  description: string
  url?: string
  image?: string
}
```

Example with a live URL and screenshot:

```ts
{
  number: '01',
  title: 'Expense Tracker',
  type: 'Expense tracking app',
  year: '2025',
  tone: 'project-sage',
  description: 'A short project description.',
  url: 'https://example.com',
  image: '/projects/Expense-tracker.png',
}
```

## 8. Static Asset Rules

- Place public project screenshots in `public/projects/`.
- Reference public screenshots from data with a root-relative path:

```ts
image: '/projects/filename.png'
```

- The filename and capitalization must exactly match the file on disk.
- Supported browser image formats include PNG, JPG, JPEG, and WebP.
- If `image` is omitted, the project card uses its abstract fallback artwork.

## 9. Visual Design Rules

- Palette:
  - Ink: `#18211d`
  - Paper: `#f3f0e8`
  - Acid: `#d7f35b`
- Styling must use Tailwind utility classes for component layout and appearance.
- Global CSS should be limited to Tailwind setup, theme tokens, base rules, and shared animation utilities.
- The design should remain editorial, spacious, responsive, and typography-led.
- Mobile layout breakpoint is approximately `720px`.

## 10. Development Commands

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## 11. Build and Deployment

- Vite is configured with the Tailwind CSS plugin and React plugin.
- The configured base path is controlled by `VITE_BASE_PATH`.
- If no environment variable is supplied, the current fallback is `/Modou-L-Ceesay`.
- The production build must pass TypeScript compilation and Vite bundling before deployment.
- The repository should exclude `node_modules`, `dist`, local environment files, and editor metadata through `.gitignore`.

## 12. Quality Requirements

Before publishing changes:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Check that new public image paths match their actual filenames.
4. Check navigation anchors after adding or renaming sections.
5. Test the layout at desktop and mobile widths.
6. Confirm external links open the intended destinations.
