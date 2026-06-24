/* ============================================================
   Peer-to-peer payment handles + clipboard helper.

   ▼▼▼ BEN: replace the three placeholder `handle` values with your
   real ones. Everything else (labels, colors, icons) is final. ▼▼▼
   ============================================================ */

export const PAYMENT_METHODS = [
  {
    key: 'cashapp',
    label: 'Pay with Cash App',
    handle: '$PlatinumPlug', // BEN: your real $cashtag
    color: '#00D632',
    onColor: '#06250f',
    glow: 'rgba(0, 214, 50, 0.42)',
    icon: 'https://cdn.simpleicons.org/cashapp/ffffff', // brand logo via Simple Icons CDN
  },
  {
    key: 'venmo',
    label: 'Pay with Venmo',
    handle: '@PlatinumPlug', // BEN: your real Venmo username
    color: '#3D95CE',
    onColor: '#ffffff',
    glow: 'rgba(61, 149, 206, 0.45)',
    icon: 'https://cdn.simpleicons.org/venmo/ffffff',
  },
  {
    key: 'zelle',
    label: 'Pay with Zelle',
    handle: 'payments@platinumplug.com', // BEN: your real Zelle email or phone
    color: '#6B1FC2',
    onColor: '#ffffff',
    glow: 'rgba(107, 31, 194, 0.5)',
    icon: 'https://cdn.simpleicons.org/zelle/ffffff',
  },
]

// BEN: where members reach you after paying (already your number).
export const PAY_CONTACT = { label: '(757) 364-0983', href: 'tel:+17573640983' }

// Copy with a legacy fallback for older / non-secure browsers.
export async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through */
  }
  try {
    const el = document.createElement('textarea')
    el.value = text
    el.style.position = 'fixed'
    el.style.opacity = '0'
    document.body.appendChild(el)
    el.focus()
    el.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(el)
    return ok
  } catch {
    return false
  }
}
