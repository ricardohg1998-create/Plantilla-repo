---
name: nextjs-best-practices
description: Use when the request requires next.js App Router principles. Server Components, data fetching, routing patterns.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Next.js Best Practices

## When to use
- The request explicitly matches **nextjs best practices** outcomes.
- The user asks for work that aligns with: Use when the request requires next.js App Router principles. Server Components, data fetching, routing patterns.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply nextjs best practices to improve this feature."
- "Use nextjs best practices and give me the concrete deliverables."
- "Can you run a full nextjs best practices pass on this repo?"
- "I need step-by-step execution using nextjs best practices."
> Principles for Next.js App Router development.

---

## 1. Server vs Client Components

### Decision Tree

```
Does it need...?
│
├── useState, useEffect, event handlers
│   └── Client Component ('use client')
│
├── Direct data fetching, no interactivity
│   └── Server Component (default)
│
└── Both? 
    └── Split: Server parent + Client child
```

### By Default

| Type | Use |
|------|-----|
| **Server** | Data fetching, layout, static content |
| **Client** | Forms, buttons, interactive UI |

---

## 2. Data Fetching Patterns

### Fetch Strategy

| Pattern | Use |
|---------|-----|
| **Default** | Static (cached at build) |
| **Revalidate** | ISR (time-based refresh) |
| **No-store** | Dynamic (every request) |

### Data Flow

| Source | Pattern |
|--------|---------|
| Database | Server Component fetch |
| API | fetch with caching |
| User input | Client state + server action |

---

## 3. Routing Principles

### File Conventions

| File | Purpose |
|------|---------|
| `page.tsx` | Route UI |
| `layout.tsx` | Shared layout |
| `loading.tsx` | Loading state |
| `error.tsx` | Error boundary |
| `not-found.tsx` | 404 page |

### Route Organization

| Pattern | Use |
|---------|-----|
| Route groups `(name)` | Organize without URL |
| Parallel routes `@slot` | Multiple same-level pages |
| Intercepting `(.)` | Modal overlays |

---

## 4. API Routes

### Route Handlers

| Method | Use |
|--------|-----|
| GET | Read data |
| POST | Create data |
| PUT/PATCH | Update data |
| DELETE | Remove data |

### Best Practices

- Validate input with Zod
- Return proper status codes
- Handle errors gracefully
- Use Edge runtime when possible

---

## 5. Performance Principles

### Image Optimization

- Use next/image component
- Set priority for above-fold
- Provide blur placeholder
- Use responsive sizes

### Bundle Optimization

- Dynamic imports for heavy components
- Route-based code splitting (automatic)
- Analyze with bundle analyzer

---

## 6. Metadata

### Static vs Dynamic

| Type | Use |
|------|-----|
| Static export | Fixed metadata |
| generateMetadata | Dynamic per-route |

### Essential Tags

- title (50-60 chars)
- description (150-160 chars)
- Open Graph images
- Canonical URL

---

## 7. Caching Strategy

### Cache Layers

| Layer | Control |
|-------|---------|
| Request | fetch options |
| Data | revalidate/tags |
| Full route | route config |

### Revalidation

| Method | Use |
|--------|-----|
| Time-based | `revalidate: 60` |
| On-demand | `revalidatePath/Tag` |
| No cache | `no-store` |

---

## 8. Server Actions

### Use Cases

- Form submissions
- Data mutations
- Revalidation triggers

### Best Practices

- Mark with 'use server'
- Validate all inputs
- Return typed responses
- Handle errors

---

## 9. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| 'use client' everywhere | Server by default |
| Fetch in client components | Fetch in server |
| Skip loading states | Use loading.tsx |
| Ignore error boundaries | Use error.tsx |
| Large client bundles | Dynamic imports |

---

## 10. Project Structure

```
app/
├── (marketing)/     # Route group
│   └── page.tsx
├── (dashboard)/
│   ├── layout.tsx   # Dashboard layout
│   └── page.tsx
├── api/
│   └── [resource]/
│       └── route.ts
└── components/
    └── ui/
```

---

> **Remember:** Server Components are the default for a reason. Start there, add client only when needed.
