export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-400 font-medium">AIWorks</span>. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-gray-400 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          <a href="mailto:hello@aiworks.dev" className="hover:text-gray-400 transition-colors">
            hello@aiworks.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
