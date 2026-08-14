import { posts } from '../data/posts'

function Blog() {
  const projectPosts = posts.filter(p => p.category === 'project')
  const techPosts = posts.filter(p => p.category === 'tech')

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
      <h1>Blog</h1>

      <div className="blog-list">
        <p className="blog-section-label">project writeups</p>
        {projectPosts.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="blog-entry fade-in">
            
            <p className="blog-date">{formatDate(post.date)}</p>
            <h2>&gt; {post.title}</h2>
            <p className="blog-summary">{post.summary}</p>
          </a>
        ))}

        <p className="blog-section-label">tech notes</p>
        {techPosts.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="blog-entry fade-in">
            
            <p className="blog-date">{formatDate(post.date)}</p>
            <h2>&gt; {post.title}</h2>
            <p className="blog-summary">{post.summary}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Blog