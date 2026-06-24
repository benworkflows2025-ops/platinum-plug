import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

// Stripe's success_url (configured server-side in n8n) sends the
// customer here after payment. We clear the cart since the order is done.
export default function Success() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

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
            Your spot is reserved and your membership is active. Keep an eye on your inbox, and we'll
            personally reach out within 1 business day to collect the details we need and get your
            Platinum card on its way.
          </p>

          <ol className="success__steps">
            <li>
              <span className="n">1.</span>
              <span>We email you to securely collect your details for the authorized-user add.</span>
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
