import fm from 'front-matter'

const modules = import.meta.glob('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

const posts = Object.entries(modules).map(([path, raw]) => {
  const { attributes, body } = fm(raw)
  const slug = path.split('/').pop().replace('.md', '')
  return {
    slug,
    title: attributes.title,
    date: attributes.date.toISOString().split('T')[0],
    category: attributes.category,
    summary: attributes.summary,
    content: body
  }
})

posts.sort((a, b) => new Date(b.date) - new Date(a.date))

export { posts }