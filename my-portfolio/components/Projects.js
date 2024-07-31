// components/Projects.js
export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white shadow-lg p-6 rounded">
                <h3 className="text-xl font-semibold mb-4">Project Title</h3>
                <p>Project description goes here. Highlight the key features and technologies used.</p>
                <a href="#" className="text-blue-500">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  