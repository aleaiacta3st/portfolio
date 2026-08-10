import ReactMarkdown from 'react-markdown'
import { useState, useRef, useEffect } from 'react'

function DecodingText({ text }) {
  const [html, setHtml] = useState('')
  const [decoded, setDecoded] = useState(false)

  useEffect(() => {
    let rendered = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/^[\s]*[-○◦•]\s+(.+)/gm, '<div style="padding-left:16px;margin:1px 0;">○ $1</div>')
      .replace(/\n\n/g, '<br>')
      .replace(/\n/g, ' ')

    const runes = 'ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫ∀∂∃∅∆∇ΣΩΨΦΘΛπ◆◇○●△▽'
    const regex = /(<[^>]+>)/g
    const segments = []
    let lastIndex = 0
    let totalTextLen = 0
    let match

    while ((match = regex.exec(rendered)) !== null) {
      if (match.index > lastIndex) {
        const txt = rendered.substring(lastIndex, match.index)
        segments.push({ type: 'text', content: txt })
        totalTextLen += txt.length
      }
      segments.push({ type: 'tag', content: match[0] })
      lastIndex = regex.lastIndex
    }
    if (lastIndex < rendered.length) {
      const rest = rendered.substring(lastIndex)
      segments.push({ type: 'text', content: rest })
      totalTextLen += rest.length
    }

    const steps = 50
    let step = 0

    const interval = setInterval(() => {
      if (step >= steps) {
        setHtml(rendered)
        setDecoded(true)
        clearInterval(interval)
        return
      }

      const ratio = step / steps
      const revealed = Math.floor(totalTextLen * ratio)
      let out = ''
      let textSoFar = 0

      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i]
        if (seg.type === 'tag') {
          out += seg.content
        } else {
          for (let j = 0; j < seg.content.length; j++) {
            if (textSoFar + j < revealed) {
              out += seg.content[j]
            } else if (seg.content[j] === ' ' || seg.content[j] === '\n') {
              out += seg.content[j]
            } else {
              out += runes.charAt(Math.floor(Math.random() * runes.length))
            }
          }
          textSoFar += seg.content.length
        }
      }

      setHtml(out)
      step++
    }, 80)

    return () => clearInterval(interval)
  }, [text])

  return <div className="decoding" dangerouslySetInnerHTML={{ __html: html }} />
}

function Chat() {
  const [message, setMessage] = useState('')
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [runeText, setRuneText] = useState('')
  const [latency, setLatency] = useState('14ms')
  const [neuralLoad, setNeuralLoad] = useState('62%')
  const [addr, setAddr] = useState('0xA7F3')

  const messagesEndRef = useRef(null)
  const rainRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [history, loading])

  useEffect(() => {
    if (!loading) return

    const runes = 'ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫ∀∂∃∅∆∇ΣΩΨΦΘΛπ◆◇○●△▽'

    const interval = setInterval(() => {
      let text = ''
      for (let i = 0; i < 12; i++) {
        text += runes.charAt(Math.floor(Math.random() * runes.length))
      }
      setRuneText(text)
    }, 120)

    return () => clearInterval(interval)
  }, [loading])

  useEffect(() => {
    const canvas = rainRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = []
    for (let i = 0; i < columns; i++) {
      drops.push(Math.floor(Math.random() * canvas.height / fontSize))
    }

    const chars = 'ABCDEF0123456789<>{}[]'

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(5, 5, 10, 0.07)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#ecad0a'
      ctx.font = fontSize + 'px monospace'

      for (let j = 0; j < columns; j++) {
        const char = chars.charAt(Math.floor(Math.random() * chars.length))
        ctx.fillText(char, j * fontSize, drops[j] * fontSize)
        if (drops[j] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[j] = 0
        }
        drops[j]++
      }
    }, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((8 + Math.floor(Math.random() * 20)) + 'ms')
      setNeuralLoad((55 + Math.floor(Math.random() * 30)) + '%')
      setAddr('0x' + Math.floor(Math.random() * 65535).toString(16).toUpperCase())
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const sendMessage = async (text) => {
    const finalMessage = text || message
    if (!finalMessage.trim()) return

    const userMessage = { role: 'user', content: finalMessage }
    const newHistory = [...history, userMessage]
    setHistory(newHistory)
    setMessage('')

    setLoading(true)

    const response = await fetch('https://digitwinenhanced-production.up.railway.app/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: finalMessage,
        history: history,
      }),
    })

    const data = await response.json()
    setHistory([...newHistory, { role: 'assistant', content: data.response }])
    setLoading(false)
  }

  return (
    <>
      <canvas ref={rainRef} className="matrix-rain"></canvas>
      <div className="page">
        <h1>D<span className="flicker">I</span>G<span className="flicker flicker-2">I</span>TAL TW<span className="flicker flicker-3">I</span>N <span className="online-status"><span className="online-dot"></span> Online</span></h1>
        <p className="chat-subtitle">Talk to my AI twin about my career</p>
        <div className="chat-container">
          <div className="scanlines"></div>
          <div className="beam"></div>
          <div className="hud hud-tl"></div>
          <div className="hud hud-tr"></div>
          <div className="hud hud-bl"></div>
          <div className="hud hud-br"></div>
          <div className="chat-messages">
            {history.length === 0 && !loading && (
              <div className="welcome">
                <div className="welcome-text">
                  <strong>Siddartha's Digital Twin</strong><br />
                  Ask me about his career, skills, and experience
                </div>
                <div className="welcome-examples">
                  <button className="example" onClick={() => sendMessage('Tell me about your background and experience.')}>Tell me about your background and experience.</button>
                  <button className="example" onClick={() => sendMessage('What kinds of projects are you working on now?')}>What kinds of projects are you working on now?</button>
                  <button className="example" onClick={() => sendMessage('What are your strongest technical skills?')}>What are your strongest technical skills?</button>
                  <button className="example" onClick={() => sendMessage('How can I get in touch with you?')}>How can I get in touch with you?</button>
                </div>
              </div>
            )}
            {history.map((msg, index) => (
              <div key={index} className={msg.role}>
                {msg.role === 'assistant' ? (
                  <DecodingText text={msg.content} />
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {loading && <div className="thinking">{runeText}</div>}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              disabled={loading}
            />
            <button onClick={() => sendMessage()} disabled={loading}>Send</button>
          </div>
        </div>
      </div>
      <div className="statusbar">
        <div>
          <span className="status-dot"></span>
          <span className="status-gold">SESSION ACTIVE</span>
          &nbsp;&nbsp;&nbsp;
          LATENCY: <span className="status-gold">{latency}</span>
          &nbsp;&nbsp;&nbsp;
          NEURAL LOAD: <span className="status-gold">{neuralLoad}</span>
        </div>
        <div>
          ENCRYPTION: <span className="status-gold">AES-256</span>
          &nbsp;&nbsp;&nbsp;
          ADDR: <span className="status-gold">{addr}</span>
        </div>
      </div>
    </>
  )
}

export default Chat