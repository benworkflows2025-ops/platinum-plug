import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendChatMessage, getSessionId } from '../lib/chat.js'

// Turn [label](/path) markdown links in the assistant's reply into buttons,
// the rest into plain text (newlines preserved by CSS white-space).
function renderReply(text, onLink) {
  const parts = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m
  let key = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(<span key={key++}>{text.slice(last, m.index)}</span>)
    const label = m[1]
    const url = m[2]
    parts.push(
      <button key={key++} type="button" className="chat__cta" onClick={() => onLink(url)}>
        {label}
      </button>
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(<span key={key++}>{text.slice(last)}</span>)
  return parts
}

const GREETING =
  'Hey, welcome to Platinum Plug. I can explain how the membership works, the perks, or help you pick a plan. What would you like to know?'

export default function ChatWidget() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const sessionId = useRef(getSessionId())
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Keep the conversation scrolled to the newest message.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, loading, open])

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  function handleLink(url) {
    setOpen(false)
    if (/^https?:\/\//i.test(url)) {
      window.open(url, '_blank', 'noopener')
    } else {
      navigate(url)
    }
  }

  async function handleSend(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setLoading(true)
    try {
      const reply = await sendChatMessage({ message: text, sessionId: sessionId.current })
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: reply || 'Sorry, I did not catch that. Could you rephrase?' },
      ])
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'bot', text: err.message }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        className={`chat-launcher ${open ? 'chat-launcher--hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 5h16v11H8l-4 4z" strokeLinejoin="round" />
        </svg>
        <span>Questions?</span>
      </button>

      {/* Panel */}
      <div className={`chat-panel ${open ? 'chat-panel--open' : ''}`} role="dialog" aria-label="Platinum Plug assistant">
        <div className="chat__header">
          <div className="chat__header-info">
            <span className="chat__avatar" aria-hidden="true" />
            <div>
              <div className="chat__title">Platinum Plug</div>
              <div className="chat__status">Concierge, usually replies instantly</div>
            </div>
          </div>
          <button type="button" className="chat__close" onClick={() => setOpen(false)} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="chat__messages" ref={scrollRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat__msg chat__msg--${msg.role}`}>
              {msg.role === 'bot' ? renderReply(msg.text, handleLink) : msg.text}
            </div>
          ))}
          {loading && (
            <div className="chat__msg chat__msg--bot chat__typing" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        <form className="chat__input" onSubmit={handleSend}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the card, perks, or plans"
            aria-label="Type your message"
          />
          <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M4 12l16-8-6 16-3-7-7-1z" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
