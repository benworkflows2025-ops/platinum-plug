import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { tierLabel } from '../data/plans'
import { formatCents } from '../lib/format'
import { startCheckout } from '../lib/checkout'

export default function Cart() {
  const { selectedPlan, clearCart } = useCart()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function goToPlans() {
    navigate('/plans')
  }

  async function handleCheckout() {
    if (!selectedPlan) return
    setError(null)
    setLoading(true)
    try {
      // Sends { tier, depositCents, monthlyCents } to the n8n webhook,
      // then redirects the browser to Stripe Checkout on success.
      await startCheckout(selectedPlan, tierLabel(selectedPlan))
      // On success the line above redirects away, so we never reach here.
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <section id="cart" className="section section--tight">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Your cart</span>
          <h2 className="section-title">Review &amp; checkout</h2>
        </div>

        <div className="cart">
          <div className="cart__panel">
            {!selectedPlan ? (
              <div className="cart__empty">
                <p>Your cart is empty. Choose a credit limit to get started.</p>
                <button type="button" className="btn btn--primary" onClick={goToPlans}>
                  View plans
                </button>
              </div>
            ) : (
              <>
                <div className="cart__line">
                  <div>
                    <div className="cart__line-title">{tierLabel(selectedPlan)}</div>
                    <div className="cart__line-meta">
                      American Express Platinum authorized-user membership ·{' '}
                      {formatCents(selectedPlan.depositCents)}{' '}
                      refundable deposit
                    </div>
                    <div className="cart__line-actions">
                      <button type="button" className="cart__link-btn" onClick={goToPlans}>
                        Change plan
                      </button>
                      <button type="button" className="cart__link-btn" onClick={clearCart}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                <div className="cart__totals">
                  <div className="cart__total-row">
                    <span className="cart__total-label">Refundable deposit</span>
                    <span className="cart__total-value">{formatCents(selectedPlan.depositCents)}</span>
                  </div>
                  <div className="cart__total-row">
                    <span className="cart__total-label">Monthly membership</span>
                    <span className="cart__total-value">
                      {formatCents(selectedPlan.monthlyCents)}
                      <span className="per"> /mo</span>
                    </span>
                  </div>

                  <div className="cart__total-row cart__total-row--due">
                    <span className="cart__total-label">Due today</span>
                    <span className="cart__total-value">
                      {formatCents(selectedPlan.depositCents + selectedPlan.monthlyCents)}
                    </span>
                  </div>
                  <div className="cart__total-row">
                    <span className="cart__total-label">Then per month</span>
                    <span className="cart__total-value">
                      {formatCents(selectedPlan.monthlyCents)}
                      <span className="per"> /mo</span>
                    </span>
                  </div>
                </div>

                {error && <div className="cart__error">{error}</div>}

                <div className="cart__checkout">
                  <button
                    type="button"
                    className="btn btn--primary btn--block"
                    onClick={handleCheckout}
                    disabled={loading}
                  >
                    {loading ? 'Starting secure checkout…' : 'Checkout'}
                  </button>
                </div>

                <p className="cart__fineprint">
                  Secure payment by Stripe. Today you pay your first month plus your refundable
                  deposit; the membership renews monthly until you cancel. Deposit is returned per
                  our Terms once the balance is paid in full.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
