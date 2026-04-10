# Ecommex Website - Powered by SaaS Factory V4

> Sitio web corporativo de **Ecommex**, empresa 3PL (Third-Party Logistics) en Mexico.
> El humano dice QUE quiere. Tu decides COMO construirlo.
> Idioma de trabajo: **Espanol**. Codigo y variables en **ingles**.

@AGENTS.md

---

## Que es Ecommex

Ecommex es una empresa de logistica 3PL que ofrece servicios de fulfillment, almacenamiento, envios, importacion, devoluciones y tecnologia para e-commerce en Mexico. El sitio web es su presencia digital principal — bilingue (ES/EN), desplegado en Vercel.

---

## Stack Real del Proyecto

| Capa | Tecnologia |
|------|------------|
| Framework | Next.js 16.2.2 + React 19 + TypeScript |
| Estilos | **Tailwind CSS v4** (via @tailwindcss/postcss) |
| Animaciones | Framer Motion 12 |
| Iconos | Lucide React |
| i18n | next-intl 4.9 (EN/ES) con routing `[locale]` |
| Deploy | Vercel |

**Diferencias vs Golden Path de SaaS Factory:**
- Tailwind **v4** (no v3.4) — CSS-first config, no tailwind.config.ts
- **No** shadcn/ui — componentes custom
- **No** Supabase — sitio estatico sin backend (por ahora)
- **No** Zustand/Zod — no hay estado cliente complejo
- **Si** next-intl — toda la copy vive en `messages/{en,es}.json`
- **Si** Framer Motion — animaciones de produccion

---

## Arquitectura del Proyecto

```
ecommex-website/
├── CLAUDE.md                    # Este archivo
├── AGENTS.md                    # Reglas Next.js 16
├── package.json
├── next.config.ts               # Plugin next-intl
├── postcss.config.mjs           # Tailwind v4
├── messages/
│   ├── en.json                  # Traducciones EN (~2100 lineas)
│   └── es.json                  # Traducciones ES (~2100 lineas)
├── public/                      # Assets estaticos (SVGs, imagenes)
├── src/
│   ├── app/[locale]/            # App Router con locale dinamico
│   │   ├── layout.tsx           # Root layout (Navbar + Footer)
│   │   ├── page.tsx             # Home
│   │   ├── HomeClient.tsx       # Home client component
│   │   ├── services/            # Hub de servicios
│   │   │   ├── page.tsx
│   │   │   ├── almacenamiento/
│   │   │   ├── devoluciones/
│   │   │   ├── envios/
│   │   │   ├── fulfillment/
│   │   │   ├── importacion/
│   │   │   └── tecnologia/
│   │   ├── contact/
│   │   ├── industries/
│   │   └── pricing/
│   │
│   ├── components/              # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx      # Hero con MexicoMap opcional
│   │   ├── HeroKpi.tsx          # KPIs compartido entre paginas
│   │   ├── CTASection.tsx       # CTA con form de contacto
│   │   ├── FAQAccordion.tsx     # Acordeon single-open
│   │   ├── ContactForm.tsx
│   │   ├── MexicoMap.tsx        # Mapa geografico interactivo
│   │   ├── SectionWrapper.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── StatCounter.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ProcessStep.tsx
│   │   ├── IndustryCard.tsx
│   │   ├── BlogCard.tsx
│   │   ├── PainPointIcons.tsx
│   │   └── LanguageSwitcher.tsx
│   │
│   ├── i18n/                    # Configuracion next-intl
│   │   ├── routing.ts           # Locales: ['en', 'es']
│   │   ├── navigation.ts        # createNavigation helper
│   │   └── request.ts           # Server-side locale loading
│   │
│   └── middleware.ts            # next-intl middleware
│
└── .claude/                     # SaaS Factory Intelligence Layer
    ├── skills/                  # 19 skills especializados
    ├── design-systems/          # 5 sistemas de diseno
    ├── memory/                  # Memoria persistente (git-versioned)
    └── PRPs/                    # Product Requirements Proposals
```

---

## Decision Tree

```
Usuario dice algo
    |
    ├── Trabajo en paginas/secciones/UI del sitio
    |       → Leer componentes existentes, mantener patrones, usar next-intl
    |
    ├── "Feature compleja" (multiples paginas, refactor grande)
    |       → /prp → aprobar → /bucle-agentico
    |
    ├── "Testea / revisa que funcione"
    |       → /playwright-cli
    |
    ├── "Landing cinematica / scroll animation"
    |       → /website-3d
    |
    ├── "Necesito login / auth / portal de clientes"
    |       → /add-login (activara Supabase)
    |
    ├── "Necesito IA / chatbot / asistente"
    |       → /ai
    |
    ├── "Genera imagenes / thumbnails / banners"
    |       → /image-generation
    |
    ├── "Recuerda esto / en que quedamos?"
    |       → /memory-manager
    |
    └── No encaja
            → Leer codebase, entender patrones, ejecutar
```

---

## Reglas Criticas del Proyecto

### i18n — TODA la copy en messages/
- **NUNCA** hardcodear texto en componentes
- Usar `useTranslations('namespace')` en client components
- Usar `getTranslations('namespace')` en server components
- Ambos idiomas (en.json y es.json) deben actualizarse SIEMPRE juntos
- Estructura de keys: `section.subsection.element`

### Componentes — Patrones establecidos
- **HeroSection**: variante con MexicoMap (home) o imagen (services)
- **HeroKpi**: componente shared para KPIs animados
- **FAQAccordion**: single-open con rotacion de icono Plus→X
- **CTASection**: split layout con form + contact card
- **SectionWrapper**: wrapper con padding/max-width consistente

### Routing
- Todas las rutas bajo `[locale]/` (next-intl middleware)
- Servicios: hub `/services` + 6 detail pages
- Links internos: usar `Link` de `@/i18n/navigation` (no de next/link)

### Estilos
- Tailwind v4 — config via CSS (`@theme`), NO tailwind.config.ts
- Animaciones complejas: Framer Motion (no CSS animations)
- Responsive: mobile-first, breakpoints `sm → md → lg → xl`
- Home page es el design reference para todo el sitio

---

## Comandos

```bash
npm run dev          # Dev server
npm run build        # Build produccion
npm run start        # Serve build
```

---

## Skills Disponibles (via SaaS Factory)

| Skill | Uso en Ecommex |
|-------|----------------|
| `prp` | Planear features complejas antes de implementar |
| `bucle-agentico` | Ejecutar features multi-fase |
| `playwright-cli` | Testing automatizado del sitio |
| `website-3d` | Landing pages cinematicas |
| `primer` | Cargar contexto al inicio de sesion |
| `memory-manager` | Memoria persistente del proyecto |
| `image-generation` | Generar assets visuales |
| `ai` | Cuando se agregue IA al sitio |
| `add-login` | Cuando se agregue portal de clientes |
| `add-payments` | Cuando se agregue checkout |
| `add-emails` | Cuando se agregue email transaccional |
| `add-mobile` | Cuando se convierta en PWA |
| `autoresearch` | Optimizar skills |
| `skill-creator` | Crear skills custom para Ecommex |

---

## Auto-Blindaje

```
Error ocurre → Se arregla → Se documenta → NUNCA ocurre de nuevo
```

Documentar en:
- PRP actual → errores de la feature
- Skill relevante → errores del patron
- Este CLAUDE.md → errores criticos globales

---

*Powered by SaaS Factory V4 — Agent-First. El usuario habla, tu construyes.*
