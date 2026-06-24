import { Link } from 'react-router-dom'
import { SPOTS_AVAILABLE } from './SpotsBadge.jsx'

// Urgency strip placed between the plans and the cart.
export default function Scarcity() {
  return (
    <section className="section--tight scarcity">
      <div className="container scarcity__inner">
        <p className="scarcity__text">
          Membership is capped at <strong>{SPOTS_AVAILABLE} spots</strong>. When they're gone,
          they're gone.
        </p>
        <Link to="/plans" className="btn btn--primary btn--sm">
          Claim your spot
        </Link>
      </div>
    </section>
  )
}
