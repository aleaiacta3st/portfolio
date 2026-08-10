const projects = [
  {
    title: 'Digital Twin',
    description: 'An LLM-powered chatbot that answers questions about my career and experience.',
    tags: ['FastAPI', 'OpenAI', 'Python'],
  },
  {
    title: 'Portfolio Website',
    description: 'This website. Built with React and React Router.',
    tags: ['React', 'Vite'],
  },
  {
    title: 'Asteroid Bot',
    description: 'Ever wanted to know how close the Earth comes to danger everyday? Try my asteroid bot.',
    tags: ['React', 'Vite'],
  },
  {
    title: 'AudioScribeSeek',
    description: 'Transcribes audio to Text',
    tags: ['React', 'Vite'],
  },
]

function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects