import { Link } from 'react-router-dom'

// Optional thank-you / info page (routes: /success, /thank-you). Payments are now
// peer-to-peer, so nothing auto-redirects here; it stays reachable if you link to it.
export default function Success() {
  return (
    <div className="page">
      <div className="container">
        <div className="success">
          <div className="success__seal" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="success__title">Welcome to Platinum Plug</h1>
          <p className="success__body">
            Your spot is reserved. Once we confirm your payment, we'll personally reach out within
            1 business day to collect the details we need and get your Platinum card on its way.
          </p>

          <ol className="success__steps">
            <li>
              <span className="n">1.</span>
              <span>We confirm your payment and message you to collect your details.</span>
            </li>
            <li>
              <span className="n">2.</span>
              <span>We add you as an authorized user and set your credit limit to your deposit.</span>
            </li>
            <li>
              <span className="n">3.</span>
              <span>Your American Express Platinum card ships to you. Welcome to the club.</span>
            </li>
          </ol>

          <div className="success__actions">
            <Link to="/" className="btn btn--ghost">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
