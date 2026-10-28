// Scarcity kicker. Deliberately NOT a pill-with-a-dot badge (that look is a
// dead giveaway). This is an editorial serif line with a short metal rule.
export const SPOTS_AVAILABLE = 5
// Ben 2026-10-29: no new members for now. Set to false to reopen buying.
export const SOLD_OUT = true

export default function SpotsBadge() {
  return (
    <span className="spots">
      <span className="spots__rule" aria-hidden="true" />
      <span className="spots__text">
        {SOLD_OUT ? (
          <>
            All spots <em>sold out</em> · next opening in 90 days
          </>
        ) : (
          <>
            Only <em>five</em> spots available
          </>
        )}
      </span>
    </span>
  )
}
