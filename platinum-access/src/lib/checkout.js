/* ============================================================
   Checkout: talk to the n8n webhook, then redirect to Stripe.

   SECURITY: There is NO Stripe secret key here, and there must
   never be one. The frontend only knows the webhook URL below,
   which is safe to expose publicly. n8n holds the Stripe secret
   key server-side, creates the Checkout Session, and returns a
   hosted Stripe URL. We just redirect the browser to it, so we
   never touch card data.
   ============================================================ */

// ▼▼▼ BEN: confirm this matches your n8n "Webhook" node Production URL ▼▼▼
//     Method must be POST. The workflow must respond with JSON: { "url": "https://checkout.stripe.com/..." }
export const CHECKOUT_WEBHOOK_URL =
  'https://puba321.app.n8n.cloud/webhook/amex-create-checkout'
// ▲▲▲ BEN: confirm this matches your n8n "Webhook" node Production URL ▲▲▲

/**
 * Create a Stripe Checkout Session via n8n and return the hosted URL.
 *
 * @param {Object} plan - a plan object from src/data/plans.js
 * @param {string} tier - human label, e.g. "$1,000 limit"
 * @returns {Promise<string>} the Stripe Checkout URL to redirect to
 * @throws {Error} with a user-friendly message if anything fails
 */
export async function createCheckoutSession(plan, tier) {
  // Exactly the JSON shape the n8n workflow expects.
  // Amounts are integer CENTS so Stripe gets clean values (no rounding).
  const payload = {
    tier, // e.g. "$1,000 limit"
    depositCents: plan.depositCents, // one-time refundable deposit, in cents
    monthlyCents: plan.monthlyCents, // recurring membership, in cents
  }

  let res
  try {
    res = await fetch(CHECKOUT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (networkErr) {
    // fetch() only rejects on network-level failure (offline, DNS, CORS block).
    throw new Error(
      'We could not reach the checkout service. Please check your connection and try again.'
    )
  }

  if (!res.ok) {
    throw new Error(
      `Checkout could not be started (status ${res.status}). Please try again in a moment.`
    )
  }

  // n8n should respond with JSON: { "url": "https://checkout.stripe.com/..." }
  let data
  try {
    data = await res.json()
  } catch {
    throw new Error('The checkout service returned an unexpected response. Please try again.')
  }

  if (!data || typeof data.url !== 'string' || !data.url) {
    throw new Error('The checkout service did not return a payment link. Please try again.')
  }

  return data.url
}

/**
 * Full checkout flow: create the session, then send the browser to Stripe.
 * Stripe's hosted page handles all card entry and payment.
 */
export async function startCheckout(plan, tier) {
  const url = await createCheckoutSession(plan, tier)
  // Redirect to Stripe's hosted Checkout page.
  // (Stripe's success_url / cancel_url are configured server-side in n8n:
  //  success_url -> https://<your-site>/success , cancel_url -> back to /#plans )
  window.location.href = url
}
