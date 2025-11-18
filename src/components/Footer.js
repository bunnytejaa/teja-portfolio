function Footer() {
  return (
    <footer className="py-6 text-center bg-black mt-20 border-t border-gray-700">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Teja Sankara. All Rights Reserved.
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Built with React & TailwindCSS
      </p>
    </footer>
  );
}

export default Footer;
