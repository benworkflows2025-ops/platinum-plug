/* ============================================================
   Chat widget -> n8n -> OpenRouter assistant.

   SECURITY: the browser only ever calls this webhook URL. No API
   keys live in the frontend; the OpenRouter key sits in n8n.
   ============================================================ */

// BEN: confirm this matches the Production URL of your chat Webhook node.
export const CHAT_WEBHOOK_URL = 'https://puba321.app.n8n.cloud/webhook/platinum-plug-chat'

const SESSION_KEY = 'platinum-plug:chatSession'

// Stable per-browser id so the assistant keeps conversation memory.
export function getSessionId() {
  try {
    let id = window.localStorage.getItem(SESSION_KEY)
    if (!id) {
      id =
        (window.crypto && window.crypto.randomUUID && window.crypto.randomUUID()) ||
        's-' + Math.random().toString(36).slice(2) + Date.now()
      window.localStorage.setItem(SESSION_KEY, id)
    }
    return id
  } catch {
    return 's-' + Date.now()
  }
}

/**
 * Send a message to the assistant and return its reply text.
 * Posts { message, sessionId } and expects { reply } back from n8n.
 */
export async function sendChatMessage({ message, sessionId, name }) {
  let res
  try {
    res = await fetch(CHAT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sessionId, name }),
    })
  } catch {
    throw new Error('I could not reach the assistant. Please check your connection and try again.')
  }

  if (!res.ok) {
    throw new Error('The assistant is unavailable right now. Please try again in a moment.')
  }

  let data
  try {
    data = await res.json()
  } catch {
    throw new Error('The assistant returned an unexpected response. Please try again.')
  }

  // n8n responds with { reply: "..." } (fall back to { output } just in case).
  return (data && (data.reply || data.output)) || ''
}
