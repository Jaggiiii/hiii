export default function Skills() {
    const skills = ["JavaScript", "React", "Node.js", "Python", "CAD", "3D Printing", "Circuit Design"]
  
    return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }
  