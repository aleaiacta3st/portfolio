import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { posts } from '../data/posts'

function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="page">
        <h1>Post not found</h1>
      </div>
    )
  }

  return (
    <div className="page">
      <p className="blog-date">{post.date}</p>
      <h1>{post.title}</h1>
      <div className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default BlogPost