import Reveal from "./Reveal";

function Publications() {
  const publications = [
    {
      title:
        "Function Point Analysis On Software Effort Estimation Using Artificial Intelligence",
      platform: "Springer (Google Scholar Indexed)",
      date: "Sep 1, 2021",
      link: "https://scholar.google.nl/citations?view_op=view_citation&hl=cs&user=5dl5WxUAAAAJ&citation_for_view=5dl5WxUAAAAJ:2osOgNQ5qMEC",
      description:
        "Co-authored with my assistant professor, this research paper explores improvements to Function Point Analysis (FPA) for enhanced software effort estimation accuracy. The work evaluates limitations in classical FPA and introduces insights inspired by the Mark II methodology."
    },
    {
      title: "Effort Estimation Techniques",
      platform: "Scribd Publication",
      date: "Jul 12, 2021",
      link: "https://www.scribd.com/presentation/515444116/effort-estimation-techniques",
      description:
        "This publication analyzes key software effort estimation methods including Use-Case Points, Function Point Analysis, Wideband Delphi, PERT, and Three-Point Estimation. It provides comparative insights into their effectiveness and real-world applicability."
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-12">Research & Publications</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10">
        {publications.map((pub, index) => (
          <Reveal key={index}>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] transition">
              <h3 className="text-2xl font-semibold">{pub.title}</h3>

              <p className="text-gray-400 mt-1 text-sm">
                {pub.platform} • {pub.date}
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {pub.description}
              </p>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
              >
                View Publication →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Publications;
