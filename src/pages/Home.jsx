import { posts } from '../data/posts'


function Home() {

  const featured = posts.filter(p => p.featured)

  function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="page">
      <div className="hero">
        <h1>Siddartha</h1>
        <p className="hero-role">SWE & AI Engineer</p>
        <p className="hero-tagline">I build AI systems<span className="blink">_</span></p>
      </div>

      <p className="blog-section-label fade-in">featured projects</p>

      <div className="featured fade-in">
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
          </div>
        </div>
      </div>

      <a href="/projects" className="view-all fade-in">See all projects →</a>

      <p className="blog-section-label fade-in">featured post</p>
      <div className="featured fade-in">
        <div className="featured-project">
          {featured.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="blog-entry">
              <p className="blog-date">{formatDate(post.date)}</p>
              <h2>&gt; {post.title}</h2>
              <p className="fp-desc">{post.summary}</p>
            </a>
          ))}
        </div>
      </div>

      <a href="/blog" className="view-all fade-in">See all posts →</a>

      <div className="stack fade-in">
        <p className="stack-label">&gt; tech</p>
        <p className="stack-list">Python · JavaScript · TypeScript · SQL · React · FastAPI · Django · Pydantic · Gradio · OpenAI · Claude API · LangChain · HuggingFace Transformers · RAG · QLoRA · Ollama · Celery · Redis · PostgreSQL · pgvector · ChromaDB · Docker · AWS · Modal · Weights & Biases · WebSockets · Git</p>
      </div>

      <div className="footer fade-in">
        <p className="footer-label">&gt; contact</p>
        <div className="footer-links">
          <a href="https://github.com/aleaiacta3st" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/siddarthathota/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Home