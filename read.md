# CallCare Project Read

## Project overview
CallCare is a premium, front-end-only customer support brand demo built with React and Vite. It is designed as a polished portfolio project that feels like a real SaaS-style support company, while staying honest about what is and is not implemented.

The project focuses on a clean support-services experience with:
- a premium landing page
- service pricing and cart functionality
- dark/light theme support
- route-based support agent pages
- responsive layouts and refined visual styling

## Project goal
The main goal is to turn the app into a modern customer-support brand presentation without adding fake backend logic, fake payment flows, or fake production data. The site is meant to showcase strong UI polish, React architecture, routing, state management, and reusable design patterns.

## Stack
- React 19
- Vite
- React Router
- Tailwind CSS
- Context API
- LocalStorage persistence

## Architecture notes
The app uses a lightweight front-end structure:
- App-level routes are managed in `src/App.jsx`
- Cart state and service pricing live in `src/context/ServiceContext.jsx`
- Theme state and persistence live in `src/context/themecontext.jsx`
- Shared UI components are located under `src/assets/components`
- Page layouts are separated by route under `src/assets/components/pages`

## Key files
- `src/App.jsx` — route configuration and overall page shell
- `src/main.jsx` — app bootstrap and provider setup
- `src/context/ServiceContext.jsx` — product catalog, cart logic, totals, and localStorage persistence
- `src/context/themecontext.jsx` — theme initialization and dark mode handling
- `src/assets/components/navbar.jsx` — main navigation and responsive menu
- `src/assets/components/Footer.jsx` — footer content and branding
- `src/assets/components/pages/home.jsx` — homepage hero, value proposition, and content sections
- `src/assets/components/pages/about.jsx` — company story and brand messaging
- `src/assets/components/pages/services.jsx` — support package listing and purchase interaction
- `src/assets/components/pages/cart.jsx` — selected items, quantity controls, and totals
- `src/assets/components/pages/agent.jsx` — agent overview and detail profile routing
- `src/assets/components/pages/contact.jsx` — contact page and front-end form layout
- `src/index.css` — global theme tokens, shared design system, and Tailwind styling
- `index.html` — page title and favicon metadata

## Route map
- `/` — Home
- `/about` — About page
- `/services` — Services catalog
- `/cart` — Shopping cart summary
- `/contact` — Contact page
- `/agent` — Team overview page
- `/agent/:name` — Individual agent profile route

## Features
- Premium orange-and-navy brand style
- Responsive layout for desktop and mobile
- Persistent theme preference using localStorage
- Add-to-cart flow with quantity updates and total calculation
- Clean route-based navigation with React Router
- Front-end-only demo checkout messaging
- Reusable design system with polished spacing and typography

## Shopping cart behavior
The cart is handled in context and saved in browser localStorage. Users can:
- add support services
- increase/decrease quantities
- remove items
- clear the cart
- view total price and number of items

This is intentionally a demo experience and does not connect to a real payment system or backend.

## Theme behavior
The theme system reads the saved preference first and falls back to the system preference when available. It updates the document state so the design remains consistent across the app in both light and dark modes.

## Brand direction
The branding follows a modern support SaaS approach with:
- orange as the primary action/accent color
- deep navy as a premium anchor color
- clear, high-contrast layout
- polished card-based sections and responsive spacing

## Run locally
```bash
npm install
npm run dev
```

## Build and validation
```bash
npm run build
npm run lint
```

## Important limitation
This is not a production business system. There is no real authentication, database, payment processing, or external API integration. The project is intentionally front-end only and is designed to demonstrate a realistic customer-support product experience without pretending to provide full backend services.

## Summary
CallCare is a portfolio-ready React app that demonstrates premium support-brand design, clean routing, cart logic, theme persistence, and modern front-end development practices in a realistic but honest way.
