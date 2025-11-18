import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      name: "Tourism Management System",
      description:
        "Full-stack platform using React, ASP.NET Core, and SQL Server for managing hotels, bookings, and customer data with secure APIs.",
    },
    {
      name: "Heartbeat Monitoring Device",
      description:
        "Real-time heart rate analyzer with 90%+ accuracy across 5000+ readings using sensor-based tech and JS visualizations.",
    },
    {
      name: "Provider Credentialing Workflow (Demo)",
      description:
        "Simulated version of enterprise credentialing workflow with license verification, CAQH data sync, and .NET + React dashboard.",
    },
    {
      name: "Movie Booking App",
      description:
        "React + Node.js application with seat-booking UI, movie listings, admin module, and MongoDB backend.",
    },
    {
      name: "Student Management Portal",
      description:
        "ASP.NET MVC + SQL Server system to manage students, attendance, reports, and teacher dashboards with secure RBAC.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Reveal key={project.name}>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}

export default Projects;
