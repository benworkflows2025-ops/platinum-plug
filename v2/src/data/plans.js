/* ============================================================
   Plan tiers.

   IMPORTANT: every money amount is stored in CENTS as an integer.
   This is what gets POSTed to the n8n webhook, so there is never
   any floating-point rounding on amounts. Display helpers in
   src/lib/format.js turn cents back into "$1,000".

   The deposit equals the credit limit the customer wants.
   The monthly is the membership fee.
   ============================================================ */

export const PLANS = [
  {
    id: 'limit-300',
    creditLimit: 300,
    depositCents: 30000, // $300 refundable deposit
    monthlyCents: 30000, // $300 / mo membership
  },
  {
    id: 'limit-500',
    creditLimit: 500,
    depositCents: 50000, // $500
    monthlyCents: 30000, // $300 / mo
  },
  {
    id: 'limit-1000',
    creditLimit: 1000,
    depositCents: 100000, // $1,000
    monthlyCents: 35000, // $350 / mo
    featured: true, // visually highlighted as "Most popular"
  },
  {
    id: 'limit-1500',
    creditLimit: 1500,
    depositCents: 150000, // $1,500
    monthlyCents: 40000, // $400 / mo
  },
  {
    id: 'limit-2000',
    creditLimit: 2000,
    depositCents: 200000, // $2,000
    monthlyCents: 45000, // $450 / mo
  },
  {
    id: 'limit-3000',
    creditLimit: 3000,
    depositCents: 300000, // $3,000
    monthlyCents: 50000, // $500 / mo
  },
]

// The "tier" string the webhook expects, e.g. "$1,000 limit".
// Derived from the credit limit so it always matches what's displayed.
export function tierLabel(plan) {
  return `$${plan.creditLimit.toLocaleString('en-US')} limit`
}

export function getPlanById(id) {
  return PLANS.find((p) => p.id === id) || null
}
