import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import logo from '../../assets/images/logo.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', path: '#servicios' },
    { name: 'Instalaciones', path: '#instalaciones' },
    { name: 'Contacto', path: '#contacto' },
  ];

  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="PowerFit Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none">PowerFit</span>
              <span className="text-xs text-gray-500">Copiapó</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="text-gray-600 hover:text-green-500 font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.instagram.com/powerfit_copiapo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600 transition-colors">
              <Instagram size={18} /> Instagram
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600" aria-label="Abrir menú">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} className="block px-3 py-2 text-gray-700 hover:text-green-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="https://www.instagram.com/powerfit_copiapo" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-semibold text-white hover:bg-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
