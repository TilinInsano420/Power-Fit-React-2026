import { Dumbbell, Users, Coffee, MapPin, Instagram, Phone } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import FondoImg from '../../assets/images/fondo2.jpeg';
import Fondo2Img from '../../assets/images/fondo3.jpeg';
import Fondo3Img from '../../assets/images/fondo4.jpeg';
import baileImg from '../../assets/images/baile.jpeg';
import localizadoImg from '../../assets/images/localizado.jpeg';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[430px] md:h-[560px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="relative"><img src={Fondo2Img} alt="PowerFit comunidad" className="w-full h-full object-cover" /></div>
          <div className="relative"><img src={FondoImg} alt="Gimnasio PowerFit" className="w-full h-full object-cover" /></div>
          <div className="relative"><img src={Fondo3Img} alt="Entrenamiento PowerFit" className="w-full h-full object-cover" /></div>
        </div>
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-500 text-green-400 text-sm font-semibold">Gimnasio y comunidad fitness en Copiapó</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Transforma tu cuerpo <br /><span className="text-green-500">transforma tu vida</span></h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl">Entrenamientos, clases grupales y un ambiente motivador para avanzar a tu ritmo.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#servicios" className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition-colors">Conocer servicios</a>
            <a href="https://www.instagram.com/powerfit_copiapo" target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors">Ver Instagram</a>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros <span className="text-green-500">servicios</span></h2>
            <p className="text-gray-500 mt-2">Todo lo necesario para entrenar, motivarte y mantener una rutina activa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"><div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6"><Dumbbell size={32} /></div><h3 className="text-xl font-bold mb-3">Entrenamiento personalizado</h3><p className="text-gray-500 text-sm">Acompañamiento y orientación para trabajar según tus objetivos personales.</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"><div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6"><Users size={32} /></div><h3 className="text-xl font-bold mb-3">Clases grupales</h3><p className="text-gray-500 text-sm">Baile entretenido, Salsa fit, Localizado y otras actividades dinámicas.</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100"><div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6"><Coffee size={32} /></div><h3 className="text-xl font-bold mb-3">Energía y bienestar</h3><p className="text-gray-500 text-sm">Un espacio pensado para entrenar con energía, comunidad y buena motivación.</p></div>
          </div>
        </div>
      </section>

      <section id="instalaciones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Instalaciones <span className="text-green-500">cómodas y funcionales</span></h2>
          <p className="text-gray-500 mb-12">Espacios para entrenar, compartir y vivir una experiencia fitness completa.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm"><img src={baileImg} alt="Clase de baile PowerFit" className="w-full h-full object-cover" /></div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm"><img src={localizadoImg} alt="Clase localizado PowerFit" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Quieres conocer más de <span className="text-green-500">PowerFit</span>?</h2>
          <p className="text-gray-500 mt-3 mb-8">Revisa novedades, clases y publicaciones directamente desde nuestras redes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm"><Instagram className="text-green-500 mb-3" /><h3 className="font-bold text-gray-900">Instagram</h3><a href="https://www.instagram.com/powerfit_copiapo" target="_blank" rel="noreferrer" className="text-green-600 hover:underline">@powerfit_copiapo</a></div>
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm"><MapPin className="text-green-500 mb-3" /><h3 className="font-bold text-gray-900">Ubicación</h3><p className="text-gray-500">Copiapó, Chile</p></div>
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm"><Phone className="text-green-500 mb-3" /><h3 className="font-bold text-gray-900">Contacto</h3><p className="text-gray-500">Disponible mediante redes sociales.</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
