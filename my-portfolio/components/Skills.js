// components/Skills.js
export default function Skills() {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/4 p-4">
              <div className="bg-white shadow-lg p-6 rounded">
                <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
                <p>Experience with ES6+, React, and Node.js</p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 p-4">
              <div className="bg-white shadow-lg p-6 rounded">
                <h3 className="text-xl font-semibold mb-4">Python</h3>
                <p>Experience with Django and Flask</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  