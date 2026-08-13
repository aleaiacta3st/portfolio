function Blog() {
  return (
    <div className="page">
      <h1>Blog</h1>

      <div className="blog-list">
        <a href="/blog/sentinel-agents" className="blog-entry">
          <p className="blog-date">Coming soon</p>
          <h2>&gt; Building a Multi-Agent AI Police Dispatch System</h2>
          <p className="blog-summary">How four autonomous agents triage, investigate, and respond to crime reports over email — the architecture behind Sentinel Agents.</p>
        </a>
      </div>
    </div>
  )
}

export default Blog