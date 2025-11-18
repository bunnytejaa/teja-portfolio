import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Elevance Health (via Cognizant)",
      duration: "Jul 2023 – Present | Dallas, TX",
      points: [
        "Developed and enhanced ASP.NET Core APIs used for provider credentialing, licensing, and compliance workflows across enterprise teams.",
        "Built ReactJS, Blazor, and .NET MVC components for internal dashboards, improving overall UI responsiveness and clarity.",
        "Integrated external services including CertifyOS, CAQH, and NPI Registry for automated license, education, and credential verification.",
        "Improved database workflows across SQL Server, Oracle, and DB2 by optimizing stored procedures, indexing, and query structure.",
        "Implemented build and deployment pipelines using Azure DevOps, ensuring reliable release cycles and smooth production deployments.",
        "Collaborated with QA, DevOps, and Business Analysts in an Agile/Scrum environment to deliver stable, scalable features.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Infogain",
      duration: "Jul 2021 – Nov 2021 | Bangalore, India",
      points: [
        "Developed full-stack modules using ReactJS, ASP.NET MVC, and SQL Server for client-facing applications.",
        "Designed REST APIs and backend logic in C# for secure data processing and internal reporting features.",
        "Contributed to database improvements through stored procedure tuning and schema refinement.",
        "Participated in Agile ceremonies including sprint planning, review, and daily standups.",
      ],
    },
    {
      role: "Application Developer",
      company: "SupraEdge Technologies",
      duration: "Jun 2020 – Jul 2021 | Bangalore, India",
      points: [
        "Built and maintained frontend components using ReactJS, JavaScript, and modern UI patterns.",
        "Developed backend modules in PHP and MySQL, including user authentication and role-based access features.",
        "Created reusable, modular UI elements to improve maintainability and development speed.",
        "Worked closely with senior engineers to implement best practices in code quality, testing, and system design.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Experience</h2>
      </Reveal>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <Reveal key={index}>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.01] transition">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400 text-lg">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>

              <ul className="text-gray-300 space-y-2 list-disc ml-6">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
