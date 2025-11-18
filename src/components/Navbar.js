function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-lg py-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl sm:text-2xl font-bold">Teja Sankara</h1>

        <div className="space-x-6 hidden sm:flex">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#certifications" className="hover:text-blue-400">Certifications</a>
          <a href="#publications" className="hover:text-blue-400">Publications</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
