# Platinum Access — Authorized User Service Site (paste into Claude Code in VS Code)

## IMPORTANT — build in a NEW folder
Do NOT touch any existing project. Create a brand new folder for this build (for example `platinum-access/`) and build everything there. Confirm the folder name with me before writing files.

## Assumptions (tell me if any are wrong before building)
- Working brand name: "Platinum Access" (placeholder — easy to rename later)
- Hosting: Netlify static deploy. Payments run through an n8n webhook so NO Stripe secret key ever lives in the frontend.
- Plans (the deposit equals the credit limit the customer wants; the monthly fee is the membership):
  | Credit limit | Refundable deposit | Monthly membership |
  |---|---|---|
  | $300 | $300 | $300/mo |
  | $500 | $500 | $300/mo |
  | $1,000 | $1,000 | $350/mo |
  | $1,500 | $1,500 | $400/mo |
  | $2,000 | $2,000 | $450/mo |
  | $3,000 | $3,000 | $500/mo |
- Scarcity: show "Only 5 spots available" prominently. Max 3-5 members total.

## Context — what this service is
The owner (Ben) adds a customer as an authorized user on his American Express Platinum card. The customer:
- Sends a refundable security deposit equal to the credit limit they want (e.g. $1,000 deposit = $1,000 limit set on the card).
- Pays a monthly membership fee.
- Gets a physical AmEx Platinum card in their name as an authorized user, plus the Platinum perks (Centurion Lounge airport access, hotel and travel benefits, the status and look of carrying an AmEx Platinum).
- If they cancel and the card balance is paid in full, they get the deposit back. If they do not pay their charges, part of the deposit is kept to cover it.

Positioning: premium, exclusive, aspirational. The audience wants the flex and the perks of an AmEx Platinum. Lean into status, exclusivity, and limited spots.

## Goal
Build a polished site where a visitor can read the offer, pick a plan, manage a cart (add / change / remove), and check out through Stripe (deposit charged once + monthly membership recurring). After payment they hit a success page.

## Tech
- React + Vite to match the other sites (or plain HTML/CSS/JS if you think it is cleaner for a small site — your call, but default to React + Vite).
- Stripe Checkout created server-side via an n8n webhook (I will build the n8n side; you build the frontend that calls it).
- Deploy target: Netlify (static build output).
- Fully responsive, mobile first.

## Visual style
Ultra premium AmEx Platinum aesthetic: near-black and charcoal background, brushed metal / platinum silver accents, thin elegant typography, lots of negative space, subtle gold or silver highlights. Think luxury, not loud. No clip art. It should feel like a high-end private membership.

## Page sections
1. **Hero**: bold headline (e.g. "Carry the Platinum. Live the Status."), one-line subhead explaining they get a real AmEx Platinum authorized-user card with full perks, a primary button "Claim Your Spot", and a visible "Only 5 spots available" badge.
2. **The Perks**: cards for the AmEx Platinum benefits — Centurion Lounge airport access, hotel and travel credits, concierge, the status of carrying Platinum. (Describe perks generally; do not over-promise specific dollar amounts.)
3. **How It Works**: 3 steps — 1) Choose your credit limit and send a refundable deposit, 2) We add you as an authorized user and ship your Platinum card, 3) Enjoy the card and the perks, cancel anytime and get your deposit back when the balance is paid.
4. **Choose Your Plan**: the 6 tiers as selectable cards. Each shows the credit limit, the refundable deposit, and the monthly membership. An "Add to Cart" button on each.
5. **Cart**: shows selected plan(s), the deposit amount, the monthly amount, lets the user change the plan or remove it, and a running total (deposit due today + monthly going forward). A "Checkout" button. (Realistically a customer picks ONE plan — make the cart handle one plan cleanly, but allow changing/removing it. Do not let them stack multiple AmEx limits unless that is trivial.)
6. **Scarcity / urgency**: reinforce "Only 5 spots available" near the plans and cart.
7. **FAQ**: short answers — Is the deposit refundable? (Yes, when the balance is paid in full.) What is the monthly fee for? Can I cancel? Is this legal? (It is a private authorized-user arrangement.)
8. **Terms link + footer**: link to a Terms page (see below).
9. **Terms page** (`/terms`): plain-language terms covering the deposit, refund conditions, what happens if charges go unpaid (part of deposit kept), cancellation, and that this is an authorized-user membership not a loan. This protects the owner — write a clear first draft, I will review it.

## Checkout flow (Stripe via n8n — NO secret key in the frontend)
1. When the user clicks Checkout, the frontend sends the selected plan to this n8n webhook with a POST request:
   `https://puba321.app.n8n.cloud/webhook/amex-create-checkout`
   Send JSON like:
   ```json
   { "tier": "$1,000 limit", "depositCents": 100000, "monthlyCents": 35000 }
   ```
2. The n8n workflow creates a Stripe Checkout Session (subscription mode: the monthly membership as a recurring line item PLUS the deposit as a one-time line item) and returns JSON `{ "url": "https://checkout.stripe.com/..." }`.
3. The frontend redirects the browser to that `url`.
4. Stripe handles the actual card entry and payment (so we never handle card data).
5. `success_url` should point to a `/success` page on this site; `cancel_url` back to the plans.
6. Build a `/success` page that thanks them and says we will reach out shortly to collect their details and ship the card.

**Your job in this codebase:** build the frontend, the cart logic, the POST to the webhook, the redirect to Stripe, and the success page. I will build the n8n workflow that talks to Stripe and creates the GHL contact. Add clear code comments where the webhook URL is used so I can confirm it matches.

## Constraints
- Free tools only (Netlify free tier, the existing n8n, Stripe which is free to integrate).
- NEVER put the Stripe secret key, GHL key, or any secret in the frontend. The frontend only calls the n8n webhook URL, which is safe to expose.
- Amounts must be sent to the webhook in cents (integers) to avoid rounding issues.
- Match the premium visual style above. Responsive on mobile and desktop.

## Before you start
1. Inspect nothing else — this is a fresh build. Confirm the new folder name.
2. Tell me the framework you will use and the folder structure.
3. Build the sections in order, and after the cart + checkout call is wired, tell me exactly how to test it (including that the n8n webhook must be live first).
