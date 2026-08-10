const posts = [
  {
    title: 'How I Built My AI Digital Twin',
    date: '2026-08-10',
    summary: 'A walkthrough of building an LLM-powered chatbot with FastAPI and OpenAI.',
  },
]

function Blog() {
  return (
    <div className="page">
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <article key={index} className="blog-card">
          <p className="blog-date">{post.date}</p>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
        </article>
      ))}
    </div>
  )
}

export default Blog