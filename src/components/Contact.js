import Reveal from "./Reveal";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-300 text-lg mb-8">
          I'm open to Full Stack, .NET, React, and Cloud Engineering roles.  
          Feel free to reach out — I usually respond within the same day.
        </p>
      </Reveal>

      <Reveal>
        <div className="space-y-4 text-xl">
          <p>
            Email:{" "}
            <a
              href="mailto:teja.uta@gmail.com"
              className="text-blue-400 hover:underline"
            >
              teja.uta@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <span className="text-blue-400">
              +1 (513) 496-4544
            </span>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/teja-sankara-719660196"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/teja-sankara-719660196
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
