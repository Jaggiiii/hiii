export default function Header() {
    return (
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <nav className="space-x-4">
            <button className="px-4 py-2 rounded-lg hover:bg-blue-700 transition">About</button>
            <button className="px-4 py-2 rounded-lg hover:bg-blue-700 transition">Projects</button>
            <button className="px-4 py-2 rounded-lg hover:bg-blue-700 transition">Skills</button>
            <button className="px-4 py-2 rounded-lg hover:bg-blue-700 transition">Contact</button>
          </nav>
        </div>
      </header>
    )
  }
  