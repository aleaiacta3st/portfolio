import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { posts } from '../data/posts'

function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (!post) {
    return (
      <div className="page">
        <h1>Post not found</h1>
      </div>
    )
  }

  return (
    <div className="page">
      <a href="/blog" className="blog-back">← Back to blog</a>
      <p className="blog-date">{formatDate(post.date)}</p>
      <h1>{post.title}</h1>
      <div className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default BlogPost