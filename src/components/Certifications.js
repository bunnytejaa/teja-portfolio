import Reveal from "./Reveal";

// IMPORT ALL CERTIFICATE IMAGES
import microsoftImg from "../assets/certificates/microsoft.png";
import web_developmentImg from "../assets/certificates/web_development.png";
import blockchainImg from "../assets/certificates/blockchain.png";
import gustovalleyImg from "../assets/certificates/gustovalley.png";
import infogain_bootcampImg from "../assets/certificates/infogain_bootcamp.png";
import infogain_IsmsImg from "../assets/certificates/infogain_isms.png";

function Certifications() {
  const certs = [
    {
      title: "Microsoft Full Stack Developer Capstone",
      issuer: "Microsoft / Coursera",
      image: microsoftImg,
      pdf: "/certificates/microsoft.pdf",
    },
    {
      title: "Web Development Specialization",
      issuer: "University of London / Coursera",
      image: web_developmentImg,
      pdf: "/certificates/web_development.pdf",
    },
    {
      title: "Blockchain Basics",
      issuer: "University at Buffalo (SUNY)",
      image: blockchainImg,
      pdf: "/certificates/blockchain.pdf",
    },
    {
      title: "Gustovalley Training Certificate",
      issuer: "Gustovalley",
      image: gustovalleyImg,
      pdf: "/certificates/gustovalley.pdf",
    },
    {
      title: "Infogain Developer Bootcamp",
      issuer: "Infogain",
      image: infogain_bootcampImg,
      pdf: "/certificates/infogain_bootcamp.pdf",
    },
    {
      title: "Infogain ISMS Awareness Training",
      issuer: "Infogain",
      image: infogain_IsmsImg,
      pdf: "/certificates/infogain_isms.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certs.map((c) => (
          <Reveal key={c.title}>
            <div
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition cursor-pointer"
              onClick={() => window.open(c.pdf, "_blank")}
            >
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-56 object-cover rounded-lg mb-4 border border-gray-700"
              />
              <h3 className="text-2xl font-semibold">{c.title}</h3>
              <p className="text-gray-400">{c.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
