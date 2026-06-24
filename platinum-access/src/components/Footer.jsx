import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Logo size={24} />
              Platinum Plug
            </div>
            <p className="footer__tag">
              A private, invitation-only membership for those who want to carry the Platinum
              and live the status.
            </p>
            <p className="footer__contact">
              Questions? Call or text{' '}
              <a href="tel:+17573640983">(757) 364-0983</a>
            </p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <Link to="/#perks">Perks</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/terms">Terms</Link>
          </nav>
        </div>

        <div className="footer__legal">
          <p>
            Platinum Plug is an independent private membership service. We are not affiliated
            with, endorsed by, or sponsored by American Express. "American Express", "Amex", and
            "Platinum Card" are trademarks of their respective owners and are used here only to
            describe the card a member is added to as an authorized user.
          </p>
          <p>
            Membership grants authorized-user access to a card held by Platinum Plug; it is not
            a loan, a line of credit issued to you, or a credit-repair product. Card benefits are
            set by the card issuer and may change at any time. Deposits are refundable subject to
            the conditions in our{' '}
            <Link to="/terms" style={{ textDecoration: 'underline' }}>
              Terms
            </Link>
            .
          </p>
          <p>© {2026} Platinum Plug. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
