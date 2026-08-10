import { useState } from 'react'

function Chat() {
  const [message, setMessage] = useState('')
  const [history, setHistory] = useState([])

  const sendMessage = async () => {
    if (!message.trim()) return
  
    const userMessage = { role: 'user', content: message }
    const newHistory = [...history, userMessage]
    setHistory(newHistory)
    setMessage('')
  
    const response = await fetch('https://digitwinenhanced-production.up.railway.app/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message,
        history: history,
      }),
    })
  
    const data = await response.json()
    setHistory([...newHistory, { role: 'assistant', content: data.response }])
  }

  return (
    <div className="page">
      <h1>Chat</h1>
      <div className="chat-container">
        <div className="chat-messages">
          {history.map((msg, index) => (
            <div key={index} className={msg.role}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat