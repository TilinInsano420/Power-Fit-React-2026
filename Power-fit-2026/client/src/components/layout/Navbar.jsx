import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo.jpeg';
import { FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '#inicio' },
    { name: 'Redes', path: '#redes' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Comunidad', path: '#comunidad' },
    { name: 'Coachs', path: '#coachs'},
    { name: 'Contacto', path: '#contacto' },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="PowerFit Copiapó" className="h-12 w-12 rounded-full border border-lime-400/60 object-cover shadow-[0_0_20px_rgba(132,204,22,0.35)]" />
          <div className="leading-none">
            <p className="text-xl font-black uppercase tracking-tight text-white">PowerFit</p>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-400">Copiapó</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="text-sm font-semibold text-zinc-300 transition hover:text-lime-400">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://www.instagram.com/powerfit_copiapo" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-lime-400/70 text-lime-400 transition hover:bg-lime-400 hover:text-black" aria-label="Instagram PowerFit Copiapó">
            <Instagram size={19} />
          </a>
          <a href="https://www.facebook.com/PowerFITcopiapo/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-lime-400/70 text-lime-400 transition hover:bg-lime-400 hover:text-black" aria-label="Facebook PowerFit Copiapó">
            <Facebook size={19} />
          </a>
          <a href="https://www.tiktok.com/@powerfit_copiapo" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-lime-400/70 text-lime-400 transition hover:bg-lime-400 hover:text-black" aria-label="Facebook PowerFit Copiapó">
            <FaTiktok size={19} />
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white md:hidden" aria-label="Abrir menú">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black px-4 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-zinc-200 hover:bg-white/10 hover:text-lime-400">
                {link.name}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href="https://www.instagram.com/powerfit_copiapo" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 font-black text-black">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://www.facebook.com/PowerFITcopiapo/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime-400 px-4 py-3 font-black text-lime-400">
                <Facebook size={18} /> Facebook
              </a>
               <a href="https://www.tiktok.com/@powerfit_copiapo" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime-400 px-4 py-3 font-black text-lime-400">
                <FaTiktok size={18} /> Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
