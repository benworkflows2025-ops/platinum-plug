import { Link } from 'react-router-dom'
import SpotsBadge from './SpotsBadge.jsx'
import platinumCard from '../assets/platinum-card.avif'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <SpotsBadge />

        <h1 className="hero__title">
          Carry the <span className="metal-text">Platinum.</span>
          <br />
          Live the Status.
        </h1>

        <p className="hero__sub">
          Get a real American Express Platinum card in your name as an authorized user: the
          metal, the lounges, the look, all without the income requirements or the wait. A
          private membership for those who move differently.
        </p>

        <div className="hero__actions">
          <Link to="/plans" className="btn btn--primary">
            Claim Your Spot
          </Link>
          <Link to="/#how" className="btn btn--ghost">
            How it works
          </Link>
        </div>

        <p className="hero__trust">Refundable deposit · Cancel anytime · Discreet &amp; private</p>

        {/* Real American Express Platinum card (transparent cutout) */}
        <img
          src={platinumCard}
          alt="American Express Platinum card"
          className="hero__card-img"
          width="315"
          height="200"
          loading="eager"
        />
      </div>
    </section>
  )
}
