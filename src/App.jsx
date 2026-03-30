import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, GitBranch, Briefcase, ExternalLink, Code2, MonitorPlay, Sparkles, BookOpen, Presentation, Calendar, MapPin, ChevronRight, Play, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initial reveal animation
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-title', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 });
      gsap.from('.hero-subtitle', { y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.6 });
      gsap.from('.hero-stats', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.8, stagger: 0.2 });
      
      // Scroll animations for sections
      gsap.utils.toArray('.reveal-section').forEach(section => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Timeline cards stagger
      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        });
      });
      
      // Skills items pop
      gsap.utils.toArray('.skill-card').forEach((card, i) => {
        gsap.from(card, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 75%',
          },
          delay: i * 0.1
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="selection:bg-aura-gold/30 selection:text-white min-h-screen">
      {/* Navbar - Centered and Responsive on Mobile */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 glass-panel rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center gap-3 sm:gap-8 shadow-2xl shadow-aura-gold/5 w-[90vw] sm:w-auto max-w-full overflow-hidden">
        <a href="#about" className="font-mono text-[10px] sm:text-sm uppercase tracking-wider text-aura-fantome/70 hover:text-aura-gold transition-colors">À Propos</a>
        <a href="#experience" className="font-mono text-[10px] sm:text-sm uppercase tracking-wider text-aura-fantome/70 hover:text-aura-gold transition-colors">Expérience</a>
        <a href="#skills" className="font-mono text-[10px] sm:text-sm uppercase tracking-wider text-aura-fantome/70 hover:text-aura-gold transition-colors">Compétences</a>
        <a href="#contact" className="font-mono text-[10px] sm:text-sm uppercase tracking-wider text-aura-fantome/70 hover:text-aura-gold transition-colors">Contact</a>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-40 pb-24 space-y-40">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-aura-gold/15 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none animate-glow-pulse"></div>
          
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aura-gold/30 bg-aura-gold/10 text-aura-gold text-xs sm:text-sm font-mono mb-8">
            <Sparkles size={16} />
            <span>Open for new ventures</span>
          </div>
          
          <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-glow leading-tight">
            Amadou Fall
          </h1>
          
          <h2 className="hero-subtitle text-2xl sm:text-3xl md:text-5xl font-serif text-aura-fantome/80 mb-12">
            Entrepreneur, Créateur de Contenu <br className="hidden sm:block" /> & Développeur
          </h2>
          
          {/* Hero Stats - Stacked well on Mobile */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 sm:gap-8 w-full">
            <div className="hero-stats text-center sm:text-left w-full sm:w-auto">
              <p className="font-mono text-aura-gold text-2xl sm:text-lg">5+</p>
              <p className="text-sm text-aura-fantome/60 uppercase tracking-wider font-mono">Années Code</p>
            </div>
            <div className="hero-stats text-center sm:text-left border-t sm:border-t-0 sm:border-l border-aura-fantome/10 pt-4 sm:pt-0 pl-0 sm:pl-8 w-full sm:w-auto">
              <p className="font-mono text-aura-gold text-2xl sm:text-lg">3</p>
              <p className="text-sm text-aura-fantome/60 uppercase tracking-wider font-mono">Startups Lancées</p>
            </div>
            <div className="hero-stats text-center sm:text-left border-t sm:border-t-0 sm:border-l border-aura-fantome/10 pt-4 sm:pt-0 pl-0 sm:pl-8 w-full sm:w-auto">
              <p className="font-mono text-aura-gold text-2xl sm:text-lg">100k+</p>
              <p className="text-sm text-aura-fantome/60 uppercase tracking-wider font-mono">Communauté</p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="reveal-section grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="text-4xl sm:text-5xl font-serif italic mb-4">Vision &<br className="hidden md:block"/>Parcours</h3>
            <div className="w-16 h-1 bg-aura-gold rounded-full mx-auto md:mx-0"></div>
          </div>
          <div className="md:col-span-8 text-base md:text-lg text-aura-fantome/80 font-light leading-relaxed space-y-6 text-center md:text-left">
            <p>
              Mon aventure commence avec un Bac G en gestion, suivi d'études à l'ENCG au Maroc en 2015. 
              La vraie bascule s'opère en 2017 quand j'intègre l'école de code <span className="text-aura-gold font-mono bg-aura-gold/10 px-2 py-0.5 rounded">1337</span>. 
              C'est là que ma passion pour la tech se cristallise.
            </p>
            <p>
              De retour à Dakar en 2020, j'ai voulu créer un pont entre la tech et l'entrepreneuriat. 
              J'ai lancé ma chaîne YouTube en 2021 pour partager mes apprentissages, et depuis, 
              je bâti des produits qui ont du sens. 
            </p>
            <p>
              Aujourd'hui, je suis fier d'avoir fondé <strong className="text-white font-medium">Wazzap IA</strong>, <strong className="text-white font-medium">IziMentor</strong> et <strong className="text-white font-medium">Izimelo</strong>. 
              Mon but : utiliser le Vibe Coding et l'automatisation pour accélérer la croissance des business en Afrique.
            </p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="reveal-section py-10">
          <div className="max-w-3xl mx-auto space-y-12">
            <h3 className="text-3xl sm:text-4xl font-sans tracking-tight mb-8 text-center md:text-left">Expériences <span className="font-serif italic text-aura-fantome/60">Marquantes</span></h3>
            
            <div className="relative border-l border-aura-gold/30 pl-6 sm:pl-8 space-y-16 ml-4 sm:ml-0">
              
              <div className="timeline-item relative">
                <div className="absolute w-4 h-4 rounded-full bg-aura-gold -left-[33px] sm:-left-[41px] top-1 shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="text-xl sm:text-2xl font-semibold">Fondateur & CEO</h4>
                  <span className="font-mono text-aura-gold/80 text-sm mt-1 border-b border-aura-gold/20 pb-2 md:border-0 md:pb-0">2025 — Aujourd'hui</span>
                </div>
                <h5 className="text-lg text-aura-fantome/60 mb-4 font-serif italic">Wazzap IA, IziMentor, Izimelo</h5>
                <p className="text-aura-fantome/80 mb-4 leading-relaxed font-light text-sm sm:text-base">
                  Création et développement de plusieurs plateformes SaaS et plateformes communautaires. 
                  Wazzap IA permet de déployer des agents conversationnels sans code sur WhatsApp, 
                  tandis qu'IziMentor forme la nouvelle génération d'entrepreneurs digitaux.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-mono uppercase bg-aura-graphite px-3 py-1 rounded-full border border-aura-fantome/10">SaaS</span>
                  <span className="text-xs font-mono uppercase bg-aura-graphite px-3 py-1 rounded-full border border-aura-fantome/10">AI & Automation</span>
                </div>
              </div>

              <div className="timeline-item relative">
                <div className="absolute w-3 h-3 rounded-full bg-aura-gold/50 -left-[31px] sm:-left-[39px] top-1.5 border border-aura-gold"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="text-xl sm:text-2xl font-semibold">Développeur Freelance</h4>
                  <span className="font-mono text-aura-gold/80 text-sm mt-1 border-b border-aura-gold/20 pb-2 md:border-0 md:pb-0">2021 — 2024</span>
                </div>
                <h5 className="text-lg text-aura-fantome/60 mb-4 font-serif italic">Indépendant</h5>
                <p className="text-aura-fantome/80 mb-4 leading-relaxed font-light text-sm sm:text-base">
                  Développement d'applications sur-mesure pour des clients internationaux. 
                  Accompagnement de A à Z : de la conception UX/UI à la mise en production, 
                  en passant par l'architecture backend et le déploiement.
                </p>
              </div>

              <div className="timeline-item relative">
                <div className="absolute w-3 h-3 rounded-full bg-aura-gold/50 -left-[31px] sm:-left-[39px] top-1.5 border border-aura-gold"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h4 className="text-xl sm:text-2xl font-semibold">Développeur Mobile</h4>
                  <span className="font-mono text-aura-gold/80 text-sm mt-1 border-b border-aura-gold/20 pb-2 md:border-0 md:pb-0">2019 — 2021</span>
                </div>
                <h5 className="text-lg text-aura-fantome/60 font-serif italic mb-4">Multinationale</h5>
                <p className="text-aura-fantome/80 leading-relaxed font-light text-sm sm:text-base">
                  Conception et maintenance d'applications mobiles performantes. 
                  Intégration d'APIs complexes, optimisation des performances et travail 
                  en équipe Agile dans un environnement hautement exigeant.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="reveal-section skills-container">
          <div className="text-center mb-10 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-sans tracking-tight">Arsenal <span className="font-serif italic text-aura-gold text-glow">Créatif</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="skill-card p-6 glass-panel rounded-2xl group hover:border-aura-gold/50 transition-colors">
              <Code2 className="text-aura-gold w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h4 className="text-xl font-medium mb-2">Vibe Coding</h4>
              <p className="text-sm text-aura-fantome/60 font-light">Collaboration fluide avec des IA génératives pour prototyper et déliver du code complexe à la vitesse de la pensée.</p>
            </div>
            
            <div className="skill-card p-6 glass-panel rounded-2xl group hover:border-aura-gold/50 transition-colors">
              <Code2 className="text-aura-gold w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h4 className="text-xl font-medium mb-2">Développement Web</h4>
              <p className="text-sm text-aura-fantome/60 font-light">Maîtrise complète de la stack Javascript (React, Node) et des architectures modernes (APIs, Serverless, Base de données).</p>
            </div>
            
            <div className="skill-card p-6 glass-panel rounded-2xl group hover:border-aura-gold/50 transition-colors">
              <MonitorPlay className="text-aura-gold w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h4 className="text-xl font-medium mb-2">Création de Contenu</h4>
              <p className="text-sm text-aura-fantome/60 font-light">Production vidéo, storytelling, montage, et développement de stratégies d'acquisition organique sur YouTube, Insta, etc.</p>
            </div>

            <div className="skill-card p-6 glass-panel rounded-2xl group hover:border-aura-gold/50 transition-colors">
              <BookOpen className="text-aura-gold w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h4 className="text-xl font-medium mb-2">Auteur</h4>
              <p className="text-sm text-aura-fantome/60 font-light">Rédaction d'ouvrages impactants tel que <span className="italic">"50 jours pour réussir en Afrique"</span>. Transmission d'idées via l'écrit.</p>
            </div>

            <div className="skill-card p-6 glass-panel rounded-2xl group hover:border-aura-gold/50 transition-colors">
              <Presentation className="text-aura-gold w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <h4 className="text-xl font-medium mb-2">Formateur</h4>
              <p className="text-sm text-aura-fantome/60 font-light">Transmission de savoirs via la communauté IziMentor. Pédagogie orientée résultats et accompagnement d'entrepreneurs.</p>
            </div>
            
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="reveal-section text-center py-10 sm:py-20 relative">
          <div className="glass-panel p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem] border-aura-gold/20 relative overflow-hidden">
             {/* Glow bg */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-aura-gold/20 blur-[80px] sm:blur-[100px] rounded-full"></div>
            
             <h3 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 relative z-10">Créons L'Avenir</h3>
             <p className="text-base sm:text-lg text-aura-fantome/70 mb-10 max-w-lg mx-auto relative z-10 font-light">
               Vous cherchez à digitaliser votre activité, automatiser vos processus ou simplement discuter tech ?
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-10">
               <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-aura-fantome text-aura-vide px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform w-full sm:w-auto">
                 <Mail size={18} />
                 Me Contacter
               </button>
               <a href="#" className="inline-flex items-center justify-center gap-2 glass-panel text-aura-fantome px-6 py-3 rounded-full font-medium hover:border-aura-gold/50 hover:bg-aura-gold/10 transition-all w-full sm:w-auto">
                 Découvrir Wazzap IA
                 <ExternalLink size={16} />
               </a>
             </div>
             
             <div className="flex justify-center gap-8 mt-12 sm:mt-16 relative z-10">
               <a href="#" className="text-aura-fantome/50 hover:text-aura-gold transition-colors"><MonitorPlay size={24} /></a>
               <a href="#" className="text-aura-fantome/50 hover:text-aura-gold transition-colors"><Briefcase size={24} /></a>
               <a href="#" className="text-aura-fantome/50 hover:text-aura-gold transition-colors"><GitBranch size={24} /></a>
             </div>
          </div>
        </section>

      </main>

      <footer className="text-center py-8 text-aura-fantome/40 font-mono text-sm border-t border-aura-fantome/5">
        <p>Coded with <span className="text-aura-gold">vibe</span> and coffee. © 2026 Amadou Fall.</p>
      </footer>

      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aura-vide/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-md p-6 sm:p-8 rounded-2xl relative shadow-2xl shadow-aura-gold/10 border-aura-gold/30">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-aura-fantome/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-sans tracking-tight mb-2">Contactez-moi</h3>
            <p className="text-sm font-light text-aura-fantome/60 mb-6">Parlez-moi de votre projet. Je vous répondrai dans les plus brefs délais.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Formulaire soumis avec succès (Vérification locale)"); }}>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-aura-fantome/70 mb-1">Votre Nom ou Entreprise</label>
                <input required type="text" className="w-full bg-aura-graphite/50 border border-aura-fantome/10 rounded-lg px-4 py-3 text-aura-fantome text-sm focus:outline-none focus:border-aura-gold/50 focus:ring-1 focus:ring-aura-gold/50 transition-all" placeholder="Ex: Jean Dupont, IziCorp" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-aura-fantome/70 mb-1">Votre Mission</label>
                <textarea required rows="3" className="w-full bg-aura-graphite/50 border border-aura-fantome/10 rounded-lg px-4 py-3 text-aura-fantome text-sm focus:outline-none focus:border-aura-gold/50 focus:ring-1 focus:ring-aura-gold/50 transition-all" placeholder="Quel problème souhaitez-vous résoudre ?"></textarea>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-aura-fantome/70 mb-1">Votre Budget</label>
                <select required className="w-full bg-aura-graphite/50 border border-aura-fantome/10 rounded-lg px-4 py-3 text-aura-fantome text-sm focus:outline-none focus:border-aura-gold/50 focus:ring-1 focus:ring-aura-gold/50 transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Sélectionnez une estimation</option>
                  <option value="< 1000€">Moins de 1000 €</option>
                  <option value="1000 - 5000€">1000 € - 5000 €</option>
                  <option value="5000 - 10000€">5000 € - 10000 €</option>
                  <option value="> 10000€">Plus de 10000 €</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-aura-gold text-aura-vide font-medium py-3 rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all mt-4">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
