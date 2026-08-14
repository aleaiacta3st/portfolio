function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>
      

      <div className="featured">
        <div className="featured-project">
          <h2>&gt; Sentinel Agents</h2>
          <p className="fp-desc">Multi-agent AI police dispatch system. Victims email in crime reports, a triage agent classifies the crime, routes to specialist agents that autonomously conduct interviews, dispatch ambulances, freeze accounts — all over email with full conversation memory.</p>
          <p className="fp-stack">Python · FastAPI · OpenAI Agents SDK · Resend · SQLite · React</p>
          <div className="fp-links">
            <a href="https://sentinel.siddartha.dev" target="_blank">sentinel.siddartha.dev →</a>
            <a href="https://github.com/aleaiacta3st/police-email-agent" target="_blank">GitHub →</a>
            <a href="/blog/sentinel-agents">Blog post →</a>
          </div>
        </div>

        <div className="featured-project">
          <h2>&gt; TerraForge</h2>
          <p className="fp-desc">Mining operations dashboard with AI-powered safety incident analysis. RAG pipeline retrieves semantically similar historical incidents using pgvector, generates risk assessments via Claude, and delivers results over WebSockets. Celery and Redis handle async task orchestration.</p>
          <p className="fp-stack">Python · FastAPI · Celery · Redis · pgvector · Claude API · WebSockets</p>
          <div className="fp-links">
            <a href="https://terraforge.siddartha.dev" target="_blank">terraforge.siddartha.dev →</a>
            <a href="https://github.com/aleaiacta3st/terraforge-ops-dashboard" target="_blank">GitHub →</a>
            <a href="/blog/terraforge">Blog post →</a>
          </div>
        </div>
      </div>

      <div className="other-projects fade-in">
        <div className="project-grid">
          <div className="grid-project">
            <h3>&gt; Digital Twin</h3>
            <p>LLM-powered chatbot that answers questions about my career — a living, interactive resume with cyberpunk UI</p>
            <div className="fp-links">
              <a href="https://digitaltwin.siddartha.dev" target="_blank">digitaltwin.siddartha.dev →</a>
              <a href="https://github.com/aleaiacta3st/digi_twin_enhanced" target="_blank">GitHub →</a>
              <a href="/blog/digital-twin">Blog post →</a>
            </div>
          </div>

          <div className="grid-project">
            <h3>&gt; Asteroid Watch</h3>
            <p>Multimodal AI assistant that queries NASA's live asteroid database, generates dramatic images, and speaks doom summaries aloud</p>
            <div className="fp-links">
              <a href="https://asteroid.siddartha.dev" target="_blank">asteroid.siddartha.dev →</a>
              <a href="https://github.com/aleaiacta3st/asteroid-watch-bot" target="_blank">GitHub →</a>
              <a href="/blog/asteroid-watch">Blog post →</a>
            </div>
          </div>

          <div className="grid-project">
            <h3>&gt; AudioScribeSeek</h3>
            <p>Audio transcription app with bidirectional sync — transcript highlights as audio plays, click any line to jump there</p>
            <div className="fp-links">
              <a href="https://transcribe.siddartha.dev" target="_blank">transcribe.siddartha.dev →</a>
              <a href="https://github.com/aleaiacta3st/audioscribeseek" target="_blank">GitHub →</a>
              <a href="/blog/audioscribeseek">Blog post →</a>
            </div>
          </div>

          <div className="grid-project">
            <h3>&gt; GameCompass</h3>
            <p>Game discovery platform searching 350,000+ games with genre and platform filters, infinite scroll, and caching</p>
            <div className="fp-links">
              <a href="https://gamecompass.siddartha.dev" target="_blank">gamecompass.siddartha.dev →</a>
              <a href="https://github.com/aleaiacta3st/gamecompass" target="_blank">GitHub →</a>
            </div>
          </div>

          <div className="grid-project">
            <h3>&gt; EagleStore</h3>
            <p>RESTful e-commerce API with JWT auth, cart and order processing, Redis caching, and Celery background tasks</p>
            <div className="fp-links">
              <a href="https://eaglestore.siddartha.dev" target="_blank">eaglestore.siddartha.dev →</a>
              <a href="https://github.com/aleaiacta3st/ecommerce" target="_blank">GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects