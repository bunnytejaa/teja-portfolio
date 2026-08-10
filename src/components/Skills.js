import Reveal from "./Reveal";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      items: [
        "ReactJS",
        "Angular",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      items: [
        "ASP.NET Core",
        "ASP.NET MVC",
        "C#",
        "Node.js",
        "PHP",
      ],
    },
    {
      title: "Databases",
      items: [
        "SQL Server",
        "Oracle SQL",
        "IBM DB2",
        "MySQL",
        "NoSQL (MongoDB)",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "Azure App Services",
        "Azure Functions",
        "Docker",
        "Kubernetes",
        "AWS (EC2, S3)",
        "CI/CD Pipelines",
        "Azure DevOps",
      ],
    },
    {
      title: "Testing & QA",
      items: [
        "NUnit",
        "Jest",
        "Postman",
        "Unit Testing",
        "Integration Testing",
        "End-to-End Testing",
      ],
    },
    {
      title: "Tools & IDEs",
      items: [
        "Visual Studio",
        "Eclipse",
        "Maven",
        "Git",
        "JIRA",
        "TFS",
        "XAMPP",
        "Tomcat",
      ],
    },
    {
      title: "Concepts & Practices",
      items: [
        "Microservices",
        "RESTful APIs",
        "Design Patterns",
        "Agile Development",
        "Cloud-Native Architecture",
        "Modular Component Design",
        "Secure Coding Practices",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <Reveal key={group.title}>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
