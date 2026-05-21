import { Dumbbell, Facebook, HeartPulse, Instagram, MapPin, Music2, Sparkles, Target, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { FaTiktok } from 'react-icons/fa';
import Footer from '../../components/layout/Footer';
import logo from '../../assets/images/logo.jpeg';
import heroA from '../../assets/images/fondo2.jpeg';
import heroB from '../../assets/images/fondo3.jpeg';
import heroC from '../../assets/images/fondo4.jpeg';
import baileImg from '../../assets/images/baile.jpeg';
import localizadoImg from '../../assets/images/localizado.jpeg';
import fitSalsaImg from '../../assets/images/fitsalsa.jpeg';
import stepImg from '../../assets/images/step.jpeg';
import cerro from '../../assets/images/cerro.jpeg';
import energia from '../../assets/images/energia.jpg';
import baile from '../../assets/images/gif1.gif';
import acompanar from '../../assets/images/acompanar.png';
import inicioA from '../../assets/images/inicio1.jpeg';
import inicioB from '../../assets/images/inicio2.jpeg';
import inicioC from '../../assets/images/inicio3.jpeg';
import inicioD from '../../assets/images/inicio4.jpeg';
import insta from '../../assets/images/instagram.mp4';
import face from '../../assets/images/facebook.mp4';
import tiktok from '../../assets/images/tiktok.mp4';
import gabi from '../../assets/images/gabi.jpeg';
import javi from '../../assets/images/javi.jpeg';
import power from '../../assets/images/power.jpeg';

const instagramUrl = 'https://www.instagram.com/powerfit_copiapo';
const facebookUrl = 'https://www.facebook.com/PowerFITcopiapo/';
const tiktokUrl = 'https://www.tiktok.com/@powerfit_copiapo';

const highlights = [
  { icon: Users, title: 'Comunidad activa', text: 'Personas reales que se apoyan y crecen juntas.' },
  { icon: Dumbbell, title: 'Clases grupales', text: 'Baile Entretenido, Step, Localizado, Fit Salsa, Taller Salsa, Taller Bachata' },
  { icon: Target, title: 'Acompañamiento', text: 'Seguimiento, motivación y orientación para avanzar.' },
  { icon: HeartPulse, title: 'Motivación real', text: 'Un ambiente positivo para volver con ganas cada día.' },
];

const services = [
  {
    title: 'Entrenamiento personalizado',
    text: 'Planes guiados según tus objetivos, evaluación y acompañamiento constante.',
    image: heroB,
    icon: Dumbbell,
  },
  {
    title: 'Clases grupales',
    text: 'Localizado, step, funcional training y rutinas dinámicas para todos los niveles.',
    image: localizadoImg,
    icon: Users,
  },
  {
    title: 'Baile y cardio',
    text: 'Sesiones llenas de ritmo, energía y baile fit para disfrutar cada entrenamiento al máximo.',
    image: baile,
    icon: Music2,
  },
  {
    title: 'Bienestar y comunidad',
    text: 'Un espacio cercano, motivador y pensado para sentirte acompañado en tu proceso.',
    image: heroC,
    icon: Sparkles,
  },
];


const Landing = () => {
  const coaches = [
  {
    name: 'Javier Órtiz',
    role: 'Coach de Bienestar',
    description:
      '------------------------------------------------------------',
    image: javi,
  },
  {
    name: 'Gabriela Sosa',
    role: 'Coach de Bienestar',
    description:
      'Fundadora de PowerFit, coach de bienestar y estudiante de Nutrición. Hace más de 8 años acompaño a mujeres y familias a mejorar sus hábitos, energía y bienestar de forma práctica y sostenible. Mi misión es inspirar un estilo de vida saludable a través de una comunidad cercana, motivadora y enfocada en el crecimiento personal. ✨“Transformando hábitos, bienestar y confianza para una vida mejor.”✨',
    image: gabi,
  },
  {
    name: 'Cristian Rivera',
    role: 'Coach de Bienestar',
    description:
      '------------------------------------------------------------',
    image: fitSalsaImg,
  },
  {
    name: 'Gloria & Katherine & Daniela',
    role: 'Coach de Bienestar',
    description:
      '------------------------------------------------------------',
    image: baileImg,
  }
];

const [coachIndex, setCoachIndex] = useState(0);

const nextCoaches = () => {
  setCoachIndex((prev) => (prev + 1) % coaches.length);
};

const prevCoaches = () => {
  setCoachIndex((prev) => (prev - 1 + coaches.length) % coaches.length);
};

const visibleCoaches = coaches.slice(coachIndex, coachIndex + 3);

  return (
    <div id="inicio" className="min-h-screen overflow-hidden bg-[#080908] text-white">
      <section className="relative min-h-[760px] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="grid h-full grid-cols-3 opacity-70">
            <img src={heroA} alt="Comunidad PowerFit" className="h-full w-full object-cover" />
            <img src={heroB} alt="Entrenamiento PowerFit" className="h-full w-full object-cover" />
            <img src={heroC} alt="PowerFit Copiapó" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(132,204,22,0.35),transparent_35%),linear-gradient(90deg,rgba(0,0,0,0.96),rgba(0,0,0,0.65),rgba(0,0,0,0.45))]" />
        </div>

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/50 bg-lime-400/10 px-4 py-2 text-sm font-bold text-lime-300 shadow-[0_0_25px_rgba(132,204,22,0.20)]">
              <HeartPulse size={18} /> Comunidad fit con resultados reales
            </div>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Transforma tu energía. <span className="block text-lime-400">Vive PowerFit.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
              Entrena, diviértete y alcanza tus metas junto a una comunidad que te motiva cada día. Clases grupales, seguimiento y un ambiente que te impulsa a seguir.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-lime-400 px-6 py-4 font-black uppercase text-black shadow-[0_0_30px_rgba(132,204,22,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_0_45px_rgba(132,204,22,0.55)]">
                <Instagram size={20} /> Ver Instagram
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-white/20 bg-black/40 px-6 py-4 font-black uppercase text-white backdrop-blur shadow-[0_0_25px_rgba(132,204,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:text-lime-400 hover:shadow-[0_0_40px_rgba(132,204,22,0.30)]">
                <Facebook size={20} /> Ver Facebook
              </a>
              <a href={tiktokUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-lime-400 px-9 py-4 font-black uppercase text-black shadow-[0_0_30px_rgba(132,204,22,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_0_45px_rgba(132,204,22,0.55)]">
                <FaTiktok size={20} /> Ver TikTok
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {['Entrenadores comprometidos', 'Ambiente motivador', 'Resultados reales', 'Comunidad que inspira'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-200 backdrop-blur shadow-[0_0_20px_rgba(132,204,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-lime-400/60 hover:shadow-[0_0_35px_rgba(132,204,22,0.25)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-10 top-12 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-black/35 p-4 shadow-[0_0_45px_rgba(132,204,22,0.12)] backdrop-blur-md transition duration-500 hover:border-lime-400/60 hover:shadow-[0_0_65px_rgba(132,204,22,0.28)]">
              <div className="grid grid-cols-2 gap-5 place-items-center">
                <img src={inicioA} alt="PowerFit entrenamiento" className="h-64 w-full rounded-3xl object-cover" />
                <img src={inicioB} alt="Clase PowerFit" className="h-64 w-full rounded-3xl object-cover" />
                <img src={inicioC} alt="Localizado PowerFit" className="h-64 w-full rounded-3xl object-cover" />
                <img src={inicioD} alt="Step PowerFit" className="h-64 w-full rounded-3xl object-cover" />
              </div>
              <div className="absolute left-1/2 top-[48%] grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-lime-400 bg-black p-3 shadow-[0_0_35px_rgba(132,204,22,0.6)]">
                <img src={logo} alt="Logo PowerFit" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white/10 bg-zinc-950/95 p-5 shadow-[0_0_45px_rgba(132,204,22,0.10)] transition duration-500 hover:border-lime-400/40 hover:shadow-[0_0_65px_rgba(132,204,22,0.22)] md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-white/5 bg-white/[0.03] p-5 shadow-[0_0_20px_rgba(132,204,22,0.06)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/50 hover:shadow-[0_0_40px_rgba(132,204,22,0.22)]">
              <Icon className="mb-4 text-lime-400" size={34} />
              <h3 className="font-black uppercase text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="redes" className="py-24">
          <div className="mx-auto grid max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-lime-400">
                 Redes sociales
              </p>
              <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
                Síguenos y sé parte de nuestra{" "}
              <span className="text-lime-400">comunidad</span>
             </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-400">
                 Rutinas, reels, novedades, desafíos, clases y resultados reales cada
                  semana. La comunidad PowerFit se vive también en redes.
              </p>
           <div className="mt-8 space-y-4">
           <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_25px_rgba(132,204,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-lime-400/70 hover:shadow-[0_0_35px_rgba(132,204,22,0.25)]">
              <Instagram className="text-lime-400" size={30} />
          <div>
            <p className="font-black uppercase">Instagram</p>
            <p className="text-zinc-400">@powerfit_copiapo</p>
          </div>
        </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_25px_rgba(132,204,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-lime-400/70 hover:shadow-[0_0_35px_rgba(132,204,22,0.25)]">
            <Facebook className="text-lime-400" size={30} />
          <div>
            <p className="font-black uppercase">Facebook</p>
            <p className="text-zinc-400">Power FIT Copiapó</p>
          </div>
        </a>
        <a href={tiktokUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_25px_rgba(132,204,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-lime-400/70 hover:shadow-[0_0_35px_rgba(132,204,22,0.25)]">
          <FaTiktok className="text-lime-400" size={30} />
          <div>
            <p className="font-black uppercase">TikTok</p>
            <p className="text-zinc-400">@powerfit_copiapo</p>
          </div>
        </a>
      </div>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      <a href={instagramUrl} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_0_35px_rgba(132,204,22,0.10)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/60 hover:shadow-[0_0_45px_rgba(132,204,22,0.35)]">
        <div className="flex items-center gap-3 p-5">
          <Instagram className="text-lime-400" />
          <div>
            <p className="font-black uppercase">Instagram</p>
            <p className="text-sm text-zinc-400">
              @powerfit_copiapo
            </p>
          </div>
        </div>
        <video src={insta} autoPlay loop muted playsInline className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
          ></video>
        <div className="p-5">
          <span className="font-black text-lime-400">
            Ver Instagram →
          </span>
        </div>
      </a>
      <a href={facebookUrl} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_0_35px_rgba(132,204,22,0.10)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/60 hover:shadow-[0_0_45px_rgba(132,204,22,0.35)]">
        <div className="flex items-center gap-3 p-5">
          <Facebook className="text-lime-400" />
          <div>
            <p className="font-black uppercase">Facebook</p>
            <p className="text-sm text-zinc-400">
              Power FIT Copiapó
            </p>
          </div>
        </div>
        <video src={face} autoPlay loop muted playsInline className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
          ></video>
        <div className="p-5">
          <span className="font-black text-lime-400">
            Ver Facebook →
          </span>
        </div>
      </a>
      <a href={tiktokUrl} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_0_35px_rgba(132,204,22,0.10)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/60 hover:shadow-[0_0_45px_rgba(132,204,22,0.35)]">
        <div className="flex items-center gap-3 p-5">
          <FaTiktok className="text-lime-400" />
          <div>
            <p className="font-black uppercase">TikTok</p>
            <p className="text-sm text-zinc-400">
              @powerfit_copiapo
            </p>
          </div>
        </div>
        <video src={tiktok} autoPlay loop muted playsInline className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
        ></video>
        <div className="p-5">
          <span className="font-black text-lime-400">
            Ver TikTok →
          </span>
        </div>
      </a>
    </div>
  </div>
</section>

      <section id="servicios" className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-lime-400">Servicios</p>
              <h2 className="max-w-2xl text-4xl font-black uppercase sm:text-5xl">Clases y actividades para entrenar con propósito</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, text, image, icon: Icon }) => (
              <article key={title} className="group overflow-hidden rounded-[2rem] border border-lime-400/20 bg-black shadow-[0_0_35px_rgba(132,204,22,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(132,204,22,0.25)]">
                <div className="relative h-56 overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-lime-400 text-black">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black uppercase">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comunidad" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="self-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-lime-400">Comunidad</p>
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">Más que un gimnasio, somos <span className="text-lime-400">comunidad</span></h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">Un espacio diseñado para que te sientas cómodo, motivado y acompañado en cada paso de tu proceso.</p>
            <ul className="mt-7 space-y-3 text-zinc-300">
              {['Ambiente inclusivo y motivador', 'Clases para todas las edades y niveles', 'Entrenadores que te acompañan siempre'].map((item) => (
                <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-lime-400 text-sm font-black text-black">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 md:grid-cols-5">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-lime-400/20 shadow-[0_0_40px_rgba(132,204,22,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(132,204,22,0.25)] md:col-span-3">
              <img src={cerro} alt="PowerFit Copiapó" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-black/70 px-5 py-4 backdrop-blur">
                <p className="flex items-center gap-2 font-black"><MapPin className="text-lime-400" /> Cerro Imán, Copiapó</p>
              </div>
            </div>
            <div className="grid gap-5 md:col-span-2">
              <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-5 shadow-[0_0_35px_rgba(132,204,22,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(132,204,22,0.22)]">
                <img src={power} alt="Clases PowerFit" className="mb-4 h-36 w-full rounded-2xl object-cover" />
                <h3 className="font-black uppercase text-lime-400">Clases con energía</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Baile, salsa fit, step y rutinas para disfrutar el proceso.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-5 shadow-[0_0_35px_rgba(132,204,22,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(132,204,22,0.22)]">
                <img src={acompanar} alt="Entrenadores PowerFit" className="mb-4 h-36 w-full rounded-2xl object-cover" />
                <h3 className="font-black uppercase text-lime-400">Acompañamiento</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Motivación cercana para avanzar de forma constante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coachs" className="py-24 bg-zinc-950 overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-lime-400">
        Equipo PowerFit
      </p>

      <h2 className="text-5xl font-black uppercase">
        Nuestros <span className="text-lime-400">Coachs</span>
      </h2>

      <p className="mt-5 text-lg text-zinc-400">
        Profesionales comprometidos con tu transformación
      </p>
    </div>

    <div className="relative mt-16">

      <button
        onClick={prevCoaches}
        className="absolute -left-6 top-1/2 z-20 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-lime-400 bg-black text-lime-400 shadow-[0_0_25px_rgba(132,204,22,0.3)] transition hover:bg-lime-400 hover:text-black"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextCoaches}
        className="absolute -right-6 top-1/2 z-20 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-lime-400 bg-black text-lime-400 shadow-[0_0_25px_rgba(132,204,22,0.3)] transition hover:bg-lime-400 hover:text-black"
      >
        <ChevronRight size={28} />
      </button>

      <div className="grid gap-6 md:grid-cols-3">

  {[0, 1, 2].map((offset) => {
    const coach = coaches[(coachIndex + offset) % coaches.length];

    return (
      <div
        key={coach.name}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_0_40px_rgba(132,204,22,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:shadow-[0_0_60px_rgba(132,204,22,0.25)]"
      >
        <div className="relative h-[420px] overflow-hidden">
          <img
            src={coach.image}
            alt={coach.name}
            className={`h-full w-full object-cover transition duration-500 hover:scale-105 ${ coach.name === "Gabriela Sosa" ? "object-top": ""} ${coach.name === "Cristian Rivera"? "scale-125": "hover:scale-105"}`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-6">
            <h3 className="text-3xl font-black text-white">
              {coach.name}
            </h3>

            <p className="font-bold text-lime-400">
              {coach.role}
            </p>
          </div>
        </div>

        <div className="p-6">
          <blockquote className="border-l-4 border-lime-400 pl-4 text-left text-zinc-300 leading-8">
            {coach.description}
          </blockquote>
        </div>
      </div>
    );
  })}

</div>
    </div>
  </div>
</section>

      <section id="contacto" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-lime-400/20 bg-gradient-to-r from-zinc-950 to-black p-8 shadow-[0_0_50px_rgba(132,204,22,0.12)] md:p-10">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-black uppercase">
            Tu mejor versión te está esperando
          </h2>
          <p className="mt-3 text-zinc-400">
            Conoce PowerFit Copiapó en redes y descubre todo lo que tenemos para ti.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
      <a href={instagramUrl} target="_blank" rel="noreferrer" className="rounded-3xl bg-lime-400 p-5 text-black transition-all duration-300 hover:-translate-y-2 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(132,204,22,0.45)]">
        <Instagram className="mb-3" />
        <p className="font-black uppercase">Ver Instagram</p>
        <p className="text-sm">@powerfit_copiapo</p>
      </a>
        <a href={facebookUrl} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-[0_0_40px_rgba(132,204,22,0.35)]">
        <Facebook className="mb-3 text-lime-400" />
        <p className="font-black uppercase">Ver Facebook</p>
        <p className="text-sm text-zinc-400">Power FIT Copiapó</p>
      </a>
      <a href={tiktokUrl} target="_blank" rel="noreferrer" className="rounded-3xl bg-lime-400 p-5 text-black transition-all duration-300 hover:-translate-y-2 hover:bg-lime-300 hover:shadow-[0_0_40px_rgba(132,204,22,0.45)]">
        <FaTiktok className="mb-3" />
        <p className="font-black uppercase">Ver Tiktok</p>
        <p className="text-sm">PowerFit_Copiapó</p>
      </a>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-[0_0_40px_rgba(132,204,22,0.35)]">
        <MapPin className="mb-3 text-lime-400" />
        <p className="font-black uppercase">Copiapó, Chile</p>
        <p className="text-sm leading-6 text-zinc-400">
          Calle Lastarria #1098, esquina Algarrobo.
        </p>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default Landing;
