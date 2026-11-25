# Page Templates

This directory contains reusable features, UI compositions, and adapter
components that bridge server-rendered pages with client-side interactivity.

## Purpose

- **Reusable features**: Larger, self-contained pieces of functionality that
  combine multiple components and can be reused across different pages.
- **Reusable UI compositions**: Higher-level UI blocks built from smaller
  components (e.g. `components/ui`) that represent a recognizable section of
  a page (hero sections, feature grids, testimonial carousels, etc.).
- **Server/client adapters**: Components here often act as the boundary
  between a server-rendered page (e.g. a Next.js server component/page) and
  a client component. A template may:
  - Accept server-fetched data as props.
  - Wrap and configure a `"use client"` component so the page itself can
    remain a server component.
  - Handle any client-only concerns (state, effects, event handlers) so the
    rest of the page tree doesn't need to opt into client rendering.

## When to add something here

Add a component to this directory if it:

1. Is used on more than one page, **or**
2. Encapsulates a specific feature/section that could be reused, **or**
3. Needs to serve as the client-boundary adapter for a server-rendered page.

If a component is only used once and has no server/client boundary concerns,
prefer colocating it with the page that uses it instead.

## Conventions

- Name templates after the feature/section they represent (e.g.
  `HeroSection`, `ContactFormAdapter`, `ServicesGrid`).
- Keep server-only logic (data fetching) in the page/server component, and
  pass the resulting data into the template as props.
- Mark client components explicitly with `"use client"` at the top of the
  file when interactivity, state, or browser-only APIs are required.
- Co-locate any template-specific styles, hooks, or helpers alongside the
  template file or in a nested folder if the template grows in complexity.
