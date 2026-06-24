import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import Logo from './Logo.jsx'

export default function Nav() {
  const { hasItem } = useCart()

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Platinum Plug home">
          <Logo size={28} />
          Platinum&nbsp;Plug
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <Link to="/#perks">Perks</Link>
          <Link to="/#how">How it works</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/cart" className="nav__links-cta">
            Cart
            {hasItem && (
              <span className="nav__cart-count" aria-label="1 item in cart">
                1
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
