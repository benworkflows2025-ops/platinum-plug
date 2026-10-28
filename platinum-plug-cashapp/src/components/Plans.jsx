import { useNavigate } from 'react-router-dom'
import { PLANS, tierLabel } from '../data/plans'
import { formatCents } from '../lib/format'
import { useCart } from '../context/CartContext.jsx'
import SpotsBadge, { SOLD_OUT } from './SpotsBadge.jsx'

export default function Plans() {
  const { selectedPlan, selectPlan } = useCart()
  const navigate = useNavigate()

  function handleAdd(plan) {
    selectPlan(plan)
    // Selecting a plan takes the visitor to the dedicated cart page.
    navigate('/cart')
  }

  return (
    <section id="plans" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Choose your plan</span>
          <h2 className="section-title">Pick your credit limit</h2>
          <p className="section-sub">
            Your deposit is refundable and equals your limit. The monthly is your membership. One
            membership per person.
          </p>
          <div style={{ marginTop: 24 }}>
            <SpotsBadge />
          </div>
        </div>

        <div className="plans-grid">
          {PLANS.map((plan) => {
            const isSelected = selectedPlan?.id === plan.id
            return (
              <article
                key={plan.id}
                className={[
                  'plan',
                  plan.featured ? 'plan--featured' : '',
                  isSelected ? 'plan--selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="plan__limit-label">Credit limit</span>
                <div className="plan__limit">{formatCents(plan.depositCents)}</div>

                <div className="plan__rows">
                  <div className="plan__row">
                    <span className="plan__row-label">Refundable deposit</span>
                    <span className="plan__row-value">{formatCents(plan.depositCents)}</span>
                  </div>
                  <div className="plan__row">
                    <span className="plan__row-label">Monthly membership</span>
                    <span className="plan__row-value">
                      {formatCents(plan.monthlyCents)}
                      <span className="per"> /mo</span>
                    </span>
                  </div>
                </div>

                <div className="plan__cta">
                  <button
                    type="button"
                    className={`btn btn--block ${isSelected ? 'btn--ghost' : 'btn--primary'}`}
                    onClick={() => handleAdd(plan)}
                    aria-pressed={isSelected}
                    disabled={SOLD_OUT}
                  >
                    {SOLD_OUT ? 'Sold Out' : isSelected ? 'Selected' : 'Add to Cart'}
                  </button>
                  <p className="plan__note">{tierLabel(plan)} · refundable</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
