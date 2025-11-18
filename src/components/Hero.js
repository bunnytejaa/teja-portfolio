import teja from "../assets/teja.jpg";

function Hero() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-center min-h-screen px-6 pt-24 max-w-6xl mx-auto">
      
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
          Full Stack Software Engineer
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-xl">
          I build scalable enterprise-grade .NET and React applications, 
          automate workflows, and create modern UIs.
        </p>

        <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded-lg text-lg">
          Contact Me
        </a>
      </div>

      <div className="flex-1 flex justify-center mb-10 sm:mb-0">
        <img
          src={teja}
          alt="Teja Sankara"
          className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-xl border border-gray-700"
        />
      </div>

    </section>
  );
}

export default Hero;
