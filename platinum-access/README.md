# Platinum Plug

A premium, single-page React + Vite marketing & checkout site for an invitation-only
authorized-user membership. Visitors read the offer, pick a credit-limit tier, manage a
single-plan cart, and check out through **Stripe**, where the Checkout Session is created
**server-side by an n8n webhook**, so no Stripe secret key ever lives in this frontend.

> **Heads-up (read before launch):** the FAQ legality/refund copy is written honestly, and
> `src/pages/Terms.jsx` is a **plain-language draft marked for attorney review**. Have a lawyer
> review the Terms and confirm the model is consistent with the card issuer's cardmember
> agreement before going live.

## Tech
- React 18 + Vite 5 (static build to `dist/`)
- react-router-dom (`/`, `/success`, `/terms`)
- No backend in this repo; checkout calls an n8n webhook (see below)
- Deploy target: Netlify (`netlify.toml` + `public/_redirects` handle SPA routing)

## Project structure
```
platinum-access/
├─ index.html
├─ netlify.toml              # Netlify build + SPA redirect
├─ vite.config.js
├─ public/_redirects         # SPA fallback for Netlify
└─ src/
   ├─ main.jsx               # entry: Router + CartProvider
   ├─ App.jsx                # routes
   ├─ index.css              # full design system (one coherent stylesheet)
   ├─ data/plans.js          # the 6 tiers, amounts in integer CENTS
   ├─ lib/
   │  ├─ checkout.js         # POST to n8n webhook + redirect to Stripe  ← webhook URL here
   │  └─ format.js           # cents → "$1,000"
   ├─ context/CartContext.jsx# single-plan cart (persisted in localStorage)
   ├─ components/            # Nav, Hero, Perks, HowItWorks, Plans, Cart, Scarcity, FAQ, Footer…
   └─ pages/                 # Home, Success, Terms
```

## The checkout integration (where to look)
All of it lives in [`src/lib/checkout.js`](src/lib/checkout.js):

- `CHECKOUT_WEBHOOK_URL`: **confirm this matches your n8n Webhook node's Production URL.**
  Currently: `https://puba321.app.n8n.cloud/webhook/amex-create-checkout`
- The POST body is exactly:
  ```json
  { "tier": "$1,000 limit", "depositCents": 100000, "monthlyCents": 35000 }
  ```
  (amounts are integer cents)
- n8n must respond with JSON `{ "url": "https://checkout.stripe.com/..." }`; the app redirects
  the browser there.
- `success_url` / `cancel_url` are set **server-side in n8n**, not here. Point:
  - `success_url` → `https://<your-site>/success`
  - `cancel_url`  → `https://<your-site>/#plans`

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for Netlify
```bash
npm run build    # outputs static site to dist/
npm run preview  # serve the production build locally
```
On Netlify: build command `npm run build`, publish directory `dist` (already in `netlify.toml`).

## Testing checkout
See the "How to test" section the assistant provided, or in short:
1. The n8n workflow at the webhook URL **must be live** and returning `{ "url": ... }`.
2. Use Stripe **test mode** keys in n8n; pay with card `4242 4242 4242 4242`, any future expiry/CVC.
3. Confirm the browser lands on `/success` afterward.
