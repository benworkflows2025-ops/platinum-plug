import { Link } from 'react-router-dom'

// 404 page. Reuses the centered success layout + existing button styles.
export default function NotFound() {
  return (
    <div className="page">
      <div className="container">
        <div className="success">
          <div
            className="metal-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.5rem, 14vw, 8rem)',
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            404
          </div>
          <h1 className="success__title">This page slipped past the velvet rope</h1>
          <p className="success__body">
            The page you are looking for does not exist or has moved. Let us get you back to the
            good stuff.
          </p>
          <div
            className="success__actions"
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/" className="btn btn--primary">
              Back to home
            </Link>
            <Link to="/plans" className="btn btn--ghost">
              See the plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
