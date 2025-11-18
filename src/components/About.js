import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a Full Stack Software Developer specializing in modern web
          application development using ReactJS, ASP.NET Core, SQL Server, and
          Azure services. My experience spans building scalable enterprise
          applications, optimizing backend APIs, and creating responsive and
          intuitive UI components.
        </p>
      </Reveal>

      <Reveal>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          I enjoy working on cloud-native architectures, microservices,
          performance tuning, and clean component-driven frontend design.
          Whether it's backend logic, database optimization, or frontend UX, I
          bring a detail-oriented and collaborative approach to every project.
        </p>
      </Reveal>

      <Reveal>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          I am always open to opportunities where I can contribute to impactful 
          products, learn new technologies, and grow in a team that values 
          quality engineering and innovation.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
