export default function Projects() {
    const projects = [
      { title: "Project 1", description: "Description of project 1" },
      { title: "Project 2", description: "Description of project 2" },
      { title: "Project 3", description: "Description of project 3" },
    ]
  
    return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  