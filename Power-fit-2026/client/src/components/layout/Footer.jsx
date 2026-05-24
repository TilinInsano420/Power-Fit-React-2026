import { Facebook, Instagram, MapPin } from 'lucide-react';
import logo from '../../assets/images/logo.jpeg';
import { FaTiktok } from 'react-icons/fa';

const direccionUrl = 'https://www.google.com/maps/place/PowerFit+Copiapo/@-27.3632257,-70.3206141,17z/data=!4m6!3m5!1s0x9698053de6062ca1:0xc1fae9af13081e27!8m2!3d-27.3630232!4d-70.3222673!16s%2Fg%2F11y4yjhzqf?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src={logo} alt="PowerFit Copiapó" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="text-xl font-black uppercase">PowerFit Copiapó</p>
              <p className="text-sm text-lime-400">Comunidad fit con resultados reales</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            Más que un gimnasio: una comunidad que entrena, motiva y acompaña tu proceso con energía todos los días.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-lime-400">Navegación</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><a href="#inicio" className="hover:text-lime-400">Inicio</a></li>
            <li><a href="#redes" className="hover:text-lime-400">Redes</a></li>
            <li><a href="#noticias" className="hover:text-lime-400">Noticias</a></li>
            <li><a href="#servicios" className="hover:text-lime-400">Servicios</a></li>
            <li><a href="#comunidad" className="hover:text-lime-400">Comunidad</a></li>
            <li><a href="#coachs" className="hover:text-lime-400">Coachs</a></li>
            <li><a href="#contacto" className="hover:text-lime-400">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-lime-400">Síguenos</h3>
          <div className="space-y-3 text-sm text-zinc-300">
            <a href="https://www.instagram.com/powerfit_copiapo" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-lime-400"><Instagram size={18} /> @powerfit_copiapo</a>
            <a href="https://www.facebook.com/PowerFITcopiapo/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-lime-400"><Facebook size={18} /> Power FIT Copiapó</a>
            <a href="https://www.tiktok.com/@powerfit_copiapo" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-lime-400"><FaTiktok size={18} /> PowerFit_Copiapó</a>
          </div>
        </div>

        <div>
  <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-lime-400">
    Ubicación
  </h3>

          <p className="flex items-start gap-2 text-sm leading-6 text-zinc-400">
            <MapPin className="mt-1 shrink-0 text-lime-400"size={18}/>
                Calle Lastarria #1098, esquina Algarrobo, Copiapó.
          </p>
           <a href={direccionUrl} target="_blank" rel="noreferrer"  className="mt-4 block overflow-hidden rounded-2xl border border-lime-400/20 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-[0_0_25px_rgba(132,204,22,0.25)]">
           <iframe title="Ubicación PowerFit Copiapó" src="https://www.google.com/maps?q=PowerFit+Copiapo&output=embed" width="100%" height="180" loading="lazy" className="pointer-events-none"/>
          </a>
      </div>
          </div>
              <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500">
              © 2026 PowerFit Copiapó. Diseñado con energía y pasión.
        </div>
    </footer>
  );
};

export default Footer;
