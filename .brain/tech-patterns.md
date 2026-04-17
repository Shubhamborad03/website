# Tech Patterns — Code Solutions & Bug Fixes

Reusable patterns and known issues across all builds.

---

## Stack

- **Framework:** Next.js App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** lucide-react (check available icons before importing) or inline SVG
- **Fonts:** next/font/google (Geist built-in with Next.js 16+)
- **Images:** next/image with proper width/height

---

## Known Issues & Fixes

### Tailwind v3 vs v4
- Next.js 16+ scaffolds with Tailwind v4 (`@import "tailwindcss"` in globals.css)
- Tailwind v4 uses `@theme inline {}` instead of `tailwind.config.ts` for theming
- If you need v3 patterns, pin `tailwindcss@^3.4.0` explicitly
- v4 does NOT use `@tailwind base; @tailwind components; @tailwind utilities;`

### lucide-react missing icons
- `Instagram`, `Quote` don't exist in some versions
- Always check: `grep -r "export.*IconName" node_modules/lucide-react/dist/`
- Fallback: use inline SVG from lucide.dev

### ESM/CommonJS conflicts
- `npm init -y` adds `"type": "commonjs"` — remove it for Next.js
- Next.js handles module resolution itself

### Squarespace CDN image format trap
- Squarespace serves WebP with .png/.jpg URLs
- Always verify: `file downloaded-image.png`
- Convert if needed: `cwebp` or re-export from image editor

### Navbar dropdown hover gap
- Gap between trigger and dropdown creates a dead zone where `onMouseLeave` fires
- Fix: wrap dropdown in outer div with `pt-2` padding (invisible hover bridge)

---

## Reusable Patterns

### Scroll fade-in animation
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.7s ease-out forwards;
  opacity: 0;
}
```
Use with IntersectionObserver in a `useScrollFadeIn` hook.

### Fixed navbar with blur
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
```

### Form with mailto fallback
If no backend available, make submit open mailto with form data:
```tsx
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  const data = new FormData(e.target as HTMLFormElement);
  const body = Array.from(data.entries()).map(([k,v]) => `${k}: ${v}`).join('\n');
  window.location.href = `mailto:client@email.com?subject=Quote Request&body=${encodeURIComponent(body)}`;
};
```
