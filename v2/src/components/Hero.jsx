import { Link } from 'react-router-dom'
import SpotsBadge from './SpotsBadge.jsx'
import platinumCard from '../assets/platinum-card.avif'
import { IMAGES } from '../lib/images.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
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
        </div>

        {/* Card layered over an ambient scene. Decorative; the headline carries the meaning.
            Drop a real lounge/hotel photo onto .hero__scene to go photographic. */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__beam" />
          <div className="hero__scene">
            <img className="hero__photo" src={IMAGES.heroScene} alt="" loading="eager" />
          </div>
          <div className="hero__ellipse hero__ellipse--1" />
          <div className="hero__ellipse hero__ellipse--2" />
          <div className="hero__card-reflection" />
          <img
            src={platinumCard}
            alt=""
            className="hero__card-img"
            width="315"
            height="200"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
