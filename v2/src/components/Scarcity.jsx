import { Link } from 'react-router-dom'
import { SPOTS_AVAILABLE } from './SpotsBadge.jsx'

// Exclusive-invitation CTA placed between the pitch and the FAQ.
export default function Scarcity() {
  return (
    <section className="section--tight scarcity">
      <div className="container">
        <div className="invite">
          <span className="invite__corner invite__corner--tl" aria-hidden="true" />
          <span className="invite__corner invite__corner--tr" aria-hidden="true" />
          <span className="invite__corner invite__corner--bl" aria-hidden="true" />
          <span className="invite__corner invite__corner--br" aria-hidden="true" />
          <span className="invite__label">Private Invitation</span>
          <p className="invite__text">
            Membership is capped at <strong>{SPOTS_AVAILABLE} spots</strong>.
            <br />
            When they're gone, they're gone.
          </p>
          <Link to="/plans" className="btn btn--primary">
            Claim your spot
          </Link>
        </div>
        <p className="invite__trust">
          Independent private membership service. Not affiliated with American Express. Authorized
          user access only. Refundable security deposit.
        </p>
      </div>
    </section>
  )
}
