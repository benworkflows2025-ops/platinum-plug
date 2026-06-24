// Scarcity kicker. Deliberately NOT a pill-with-a-dot badge (that look is a
// dead giveaway). This is an editorial serif line with a short metal rule.
export const SPOTS_AVAILABLE = 5

export default function SpotsBadge() {
  return (
    <span className="spots">
      <span className="spots__rule" aria-hidden="true" />
      <span className="spots__text">
        Only <em>five</em> spots available
      </span>
    </span>
  )
}
