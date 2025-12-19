import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  X, 
  CheckCircle2,
  ArrowUpRight,
  Store,
  Truck,
  BarChart3,
  Globe,
  Zap,
  Users,
  ShieldCheck,
  Building2,
  ExternalLink,
  Layers,
  Search,
  Smartphone,
  ClipboardCheck,
  ShoppingBag,
  Palette
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ARK Assured - Premium Investor Interface
 * Refined Journey Flows: B2B + B2C
 */

// --- Motion Helpers ---

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right'; scale?: number }> = ({ children, delay = 0, direction = 'up', scale = 1 }) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: scale, ...directions[direction] }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Premium off-white mixture for improved aesthetic
const PremiumHeading = "text-[#f5f5f7]";

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode; label?: string; light?: boolean }> = ({ id, className = '', children, label, light }) => (
  <section id={id} className={`py-32 px-6 md:px-12 lg:px-24 ${light ? 'bg-[#fcfcfc] text-[#061226]' : 'bg-[#061226] text-white'} ${className} relative overflow-hidden`}>
    <div className="max-w-7xl mx-auto relative z-10">
      {label && (
        <FadeIn direction="right">
          <div className="mb-20 flex items-center gap-12">
            <div className="h-[2px] w-48 bg-gradient-to-r from-[#D4AF37] via-[#FBF5B7] to-transparent opacity-100 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
            <span className={`text-2xl md:text-3xl font-black uppercase tracking-[0.5em] whitespace-nowrap text-metallic-gold drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)]`}>
              {label}
            </span>
          </div>
        </FadeIn>
      )}
      {children}
    </div>
  </section>
);

const LogoSeal = ({ size = 60, className = "" }) => (
  <motion.div 
    whileHover={{ rotate: 10, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 200 }}
    className={`relative flex items-center justify-center ${className}`} 
    style={{ width: size, height: size }}
  >
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute inset-0 bg-[#D4AF37] blur-3xl rounded-full pointer-events-none"
    />
    <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37] relative z-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
      <path d="M50 2 L65 8 L80 20 L92 35 L98 50 L92 65 L80 80 L65 92 L50 98 L35 92 L20 80 L8 65 L2 50 L8 35 L20 20 L35 8 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
      <path d="M50 8 L62 20 L78 20 L80 38 L92 50 L80 62 L78 80 L62 80 L50 92 L38 80 L22 80 L20 62 L8 50 L20 38 L22 20 L38 20 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M50 30 L70 75 M50 30 L30 75 M38 58 L62 58 M50 30 L50 75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  </motion.div>
);

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { onClose(); setSubmitted(false); }, 3500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 100, scale: 0.9 }} 
            className="bg-[#0b1e3b] w-full max-w-2xl p-12 md:p-24 shadow-2xl relative z-[130] border border-white/5 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <button onClick={onClose} className="absolute top-8 right-8 text-neutral-500 hover:text-white transition-colors"><X size={28} /></button>
            {submitted ? (
              <div className="text-center py-20">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                  <CheckCircle2 size={80} className="mx-auto mb-10 text-[#D4AF37]" />
                </motion.div>
                <h3 className="serif text-4xl mb-6 text-white tracking-tight">Access Provisioned</h3>
                <p className="text-neutral-400 font-light max-w-sm mx-auto leading-relaxed">Your credentials are being verified. Expect an encrypted data room link shortly.</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <LogoSeal size={42} />
                  <div className="h-px w-16 bg-[#D4AF37]/40" />
                  <span className="text-[11px] uppercase tracking-[0.6em] text-[#D4AF37] font-black">Private Placement</span>
                </div>
                <h3 className="serif text-5xl mb-8 text-white leading-[1.05]">Request <br/>Institutional Access.</h3>
                <form className="space-y-12" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-10">
                    <input required type="email" className="w-full bg-transparent border-b border-white/10 py-5 focus:border-[#D4AF37] outline-none transition-colors text-lg font-light text-white" placeholder="Institutional Email" />
                    <input required type="text" className="w-full bg-transparent border-b border-white/10 py-5 focus:border-[#D4AF37] outline-none transition-colors text-lg font-light text-white" placeholder="Firm / Family Office" />
                  </div>
                  <button type="submit" className="w-full bg-[#D4AF37] text-[#061226] py-8 text-[13px] uppercase tracking-[0.6em] font-black hover:scale-[1.01] transition-transform shadow-2xl">
                    Verify Identity & Enter
                  </button>
                  <p className="text-[9px] text-neutral-600 uppercase text-center tracking-[0.4em] font-black">Restricted Data • Proprietary Memo</p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workflowTab, setWorkflowTab] = useState<'b2b' | 'b2c'>('b2b');
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const openPortal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleGlide = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const b2bWorkflow = [
    { title: "Onboarding", role: "Trade Pro", desc: "Professionals register via the ARK Partner Stack for verified authentication.", icon: <Smartphone size={24}/> },
    { title: "Lead Intake", role: "Intelligence", desc: "Automated routing of high-intent renovation leads directly to the dashboard.", icon: <Users size={24}/> },
    { title: "Technical Audit", role: "Consultation", desc: "Stakeholder engagement to map requirements and material specifications.", icon: <ClipboardCheck size={24}/> },
    { title: "Asset Validation", role: "Experience", desc: "Physical validation of finishings and materials at our Regional Hubs.", icon: <Store size={24}/> },
    { title: "Procurement", role: "Marketplace", desc: "Bulk ordering at factory-direct pricing with embedded B2B financing.", icon: <BarChart3 size={24}/> },
    { title: "Deployment", role: "Fulfillment", desc: "Successful project delivery backed by ARK logistics and trust seal.", icon: <CheckCircle2 size={24}/> }
  ];

  const b2cWorkflow = [
    { title: "Discovery", role: "Homeowner", desc: "Initial engagement via digital storefront for specialized interior needs.", icon: <Search size={24}/> },
    { title: "Pro Match", role: "Verification", desc: "Homeowner connected with curated, ARK-Certified trade professionals.", icon: <Users size={24}/> },
    { title: "Doorstep Sampling", role: "Sampling", desc: "High-fidelity material samples delivered to site for tactile validation.", icon: <Palette size={24}/> },
    { title: "OTRC Generation", role: "Economics", desc: "One-Time Referral Code applied for transparent institutional pricing.", icon: <Zap size={24}/> },
    { title: "Order Placement", role: "Transaction", desc: "Materials delivered with painter commission and homeowner discounts applied.", icon: <ShoppingBag size={24}/> },
    { title: "Realization", role: "Completion", desc: "Seamless project finalization through the integrated ARK ecosystem.", icon: <Truck size={24}/> }
  ];

  return (
    <div className="bg-[#061226] selection:bg-[#D4AF37] selection:text-[#061226]">
      {/* Dynamic Cursor Spotlight */}
      <motion.div 
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-[#D4AF37] blur-[180px] rounded-full pointer-events-none z-[1] opacity-[0.03]"
        animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
        transition={{ type: 'spring', damping: 50, stiffness: 200, restDelta: 0.001 }}
      />

      {/* Progress Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#BF953F] via-[#FBF5B7] to-[#AA771C] z-[110] origin-left shadow-[0_0_15px_rgba(212,175,55,0.4)]" style={{ scaleX: scaleProgress }} />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-700 ${scrolled ? 'glass-header py-4' : 'bg-transparent py-8'}`}
      >
        <div className="flex items-center gap-5 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <LogoSeal size={42} />
          <span className="serif text-2xl tracking-[0.1em] text-white uppercase font-light leading-none">ARK <span className="text-metallic-gold font-bold">ASSURED</span></span>
        </div>
        <div className="hidden md:flex items-center gap-16">
          {['Thesis', 'Workflow', 'Market', 'Economics'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={(e) => handleGlide(e, link.toLowerCase())}
              className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 hover:text-[#D4AF37] transition-all hover:tracking-[0.6em] font-black"
            >
              {link}
            </a>
          ))}
          <button 
            onClick={openPortal} 
            className="group relative border border-[#D4AF37]/30 px-10 py-3 overflow-hidden hover:border-[#D4AF37] transition-colors"
          >
            <span className="relative z-10 text-[9px] uppercase tracking-[0.6em] text-[#D4AF37] font-black">Portal</span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
        <button onClick={openPortal} className="md:hidden text-[#D4AF37]"><Users size={22} /></button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 bg-ark-gradient pt-24 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center mix-blend-overlay grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#061226] via-[#061226]/40 to-transparent opacity-95" />
        
        <div className="max-w-7xl z-10 relative">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex items-center gap-10 mb-20">
              <LogoSeal size={100} />
              <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0" />
              <div className="flex flex-col">
                <span className="text-[12px] uppercase tracking-[1em] font-black text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">Institutional Grade</span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-600 mt-2 font-black">Full-Stack Supply Chain Control</span>
              </div>
            </div>
          </FadeIn>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <h1 className={`serif text-[4.8rem] md:text-[8.8rem] leading-[0.75] tracking-tighter mb-16 ${PremiumHeading} max-w-7xl`}>
              Eliminating Layers. <br/>
              <span className="text-metallic-gold italic font-light">Guaranteeing Trust.</span>
            </h1>
          </motion.div>
          
          <FadeIn delay={0.8}>
            <p className="text-neutral-400 text-2xl md:text-4xl font-light max-w-4xl mb-20 leading-relaxed">
              ARK Assured is rebuilding India’s <span className="text-white font-medium">$160B</span> building materials market through a unified physical + digital ecosystem.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
              <button 
                onClick={openPortal} 
                className="group relative bg-[#D4AF37] text-[#061226] px-20 py-9 text-[13px] uppercase tracking-[0.6em] font-black shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#BF953F] translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-8">
                  Request Data Room Access <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => <div key={i} className="w-11 h-11 rounded-full border-[3px] border-[#061226] bg-neutral-800 shadow-xl" />)}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-white font-black">Top-Tier VC Allocations</span>
                </div>
                <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-500 font-black ml-1">Closed Group • Round Open</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-16 left-12 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-6">
            <span className="text-[8px] uppercase tracking-[1em] text-[#D4AF37] [writing-mode:vertical-lr] font-black">Exploration</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Thesis Section */}
      <Section id="thesis" label="01. The Thesis">
        <div className="grid lg:grid-cols-2 gap-40 items-start">
          <div className="sticky top-40">
            <FadeIn>
              <h2 className={`serif text-[3.6rem] md:text-[6.4rem] leading-[0.8] mb-14 ${PremiumHeading}`}>An Opaque <br/><span className="text-metallic-gold italic font-light">Legacy Chain.</span></h2>
              <p className="text-neutral-400 text-3xl font-light leading-relaxed mb-20">
                ~85% of India's $160B building materials market is unorganized. Traditional distribution layers drain value while providing zero transparency.
              </p>
              <button onClick={openPortal} className="flex items-center gap-8 text-[#D4AF37] group font-black text-[11px] uppercase tracking-[0.6em] hover:tracking-[0.7em] transition-all">
                The Inefficiency Case <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
              </button>
            </FadeIn>
          </div>
          
          <div className="space-y-16">
            {[
              { title: "Predatory Inflation", desc: "4-5 layers of middleman distributors inflate final pricing by ~35% without adding tangible value.", icon: <Layers size={36}/> },
              { title: "The Counterfeit Gap", desc: "No central seal for material authenticity. Sub-par substitution is rampant in semi-organized retail.", icon: <ShieldCheck size={36}/> },
              { title: "Infrastructure Deficit", desc: "Trade professionals lack institutional B2B credit and digitized logistics, keeping them under-leveraged.", icon: <Building2 size={36}/> }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.2 * i} direction="left">
                <div className="p-16 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group rounded-sm shadow-2xl">
                  <div className="text-[#D4AF37] mb-12 opacity-30 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                    {item.icon}
                  </div>
                  <h4 className="serif text-4xl text-white mb-8 leading-tight">{item.title}</h4>
                  <p className="text-neutral-500 text-base font-light leading-relaxed uppercase tracking-widest">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Workflow Section */}
      <Section id="workflow" label="02. Unified Workflow" className="bg-[#040d1a]">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn>
            <h2 className={`serif text-[4.8rem] md:text-[8.8rem] mb-12 leading-[0.75] ${PremiumHeading}`}>Project <span className="text-metallic-gold italic font-light">Journeys.</span></h2>
            <p className="text-neutral-600 text-sm font-black uppercase tracking-[1em] mb-16">Automated Lifecycle Management for all Stakeholders</p>
            
            <div className="flex justify-center gap-8 mb-16">
              {[
                { id: 'b2b', label: 'Trade Professional (B2B)' },
                { id: 'b2c', label: 'Homeowner (B2C)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setWorkflowTab(tab.id as 'b2b' | 'b2c')}
                  className={`px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-black border-2 transition-all duration-500 ${workflowTab === tab.id ? 'bg-[#D4AF37] text-[#061226] border-[#D4AF37]' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={workflowTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5"
            >
              {(workflowTab === 'b2b' ? b2bWorkflow : b2cWorkflow).map((step, i) => (
                <div key={i} className="p-16 h-full flex flex-col items-start relative group hover:bg-white/[0.03] transition-colors border-r border-b border-white/5 last:border-r-0">
                  <div className="text-[#D4AF37]/5 serif text-[12rem] absolute -top-12 -right-4 font-black pointer-events-none group-hover:text-[#D4AF37]/10 transition-colors">0{i+1}</div>
                  <div className="w-16 h-16 rounded-sm border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-12 relative z-10 group-hover:bg-[#D4AF37] group-hover:text-[#061226] transition-all duration-700">
                    {step.icon}
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] mb-4 block">{step.role}</span>
                    <h4 className="serif text-3xl mb-8 leading-tight text-white">{step.title}</h4>
                    <p className="text-neutral-400 text-[11px] font-light leading-relaxed uppercase tracking-[0.15em]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <FadeIn delay={0.4}>
            <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 p-16 border border-white/5 bg-white/[0.01]">
               <div className="flex items-center gap-8">
                  <LogoSeal size={50} />
                  <div>
                    <h5 className="serif text-2xl text-white">Full Stack Control</h5>
                    <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-black">Unified Logistics • Direct Sourcing • OTRC Network</p>
                  </div>
               </div>
               <button onClick={openPortal} className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-4 hover:tracking-[0.5em] transition-all">
                  Access Platform Demo <ChevronRight size={16}/>
               </button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Market Scale Section */}
      <Section id="market" label="03. Market Wave">
        <div className="grid lg:grid-cols-2 gap-40 items-center">
          <div>
            <FadeIn>
              <h2 className={`serif text-7xl md:text-9xl leading-[0.8] mb-16 ${PremiumHeading}`}>The <span className="text-metallic-gold italic font-light">$6.5B</span> <br/>Beachhead.</h2>
              <div className="flex flex-col gap-16 mb-24">
                <div className="border-l-[4px] border-[#D4AF37] pl-12 group transition-all hover:pl-16">
                  <div className="serif text-8xl text-[#D4AF37] mb-4">$160B</div>
                  <p className="text-[12px] text-neutral-500 uppercase tracking-[0.6em] font-black">India Interior Materials TAM</p>
                </div>
                <div className="border-l-[4px] border-white/10 pl-12 group transition-all hover:pl-16">
                  <div className="serif text-8xl text-white mb-4">₹100Cr+</div>
                  <p className="text-[12px] text-neutral-500 uppercase tracking-[0.6em] font-black">Targeted Year 2 GMV</p>
                </div>
              </div>
              <p className="text-neutral-400 text-2xl font-light leading-relaxed mb-20">
                Starting with Hyderabad—India's fastest growing tech and residential hub—before scaling nationwide.
              </p>
              <button onClick={openPortal} className="bg-white/5 border border-white/10 px-16 py-8 text-[11px] uppercase tracking-[0.6em] font-black hover:bg-[#D4AF37] hover:text-[#061226] transition-all duration-700 shadow-2xl">
                View Expansion Roadmap <ArrowRight className="inline-block ml-6" size={20}/>
              </button>
            </FadeIn>
          </div>
          
          <FadeIn direction="left" delay={0.3}>
            <div className="bg-[#050e1d] border border-white/5 p-20 md:p-32 relative overflow-hidden rounded-sm shadow-inner group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[180px] rounded-full" />
              <h4 className="serif text-4xl text-[#D4AF37] mb-20 italic font-light">Scale Projections</h4>
              <div className="space-y-16">
                {[
                  { label: "Hyderabad Cluster", detail: "Phase I Deployment", p: 100 },
                  { label: "Tier 2 Satellite Expansion", detail: "Phase II Deployment", p: 40 },
                  { label: "National Tier 1 Hubs", detail: "Strategic Scaling", p: 15 }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-8">
                      <span className="serif text-3xl text-white group-hover:text-[#D4AF37] transition-colors">{item.label}</span>
                      <span className="text-[12px] uppercase tracking-[0.4em] text-neutral-500 font-black">{item.detail}</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.p}%` }}
                        transition={{ duration: 1.8, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#AA771C] to-[#FBF5B7]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Economics Section - Updated Premium Heading Color Mixture */}
      <Section id="economics" label="04. Unit Economics" light>
        <div className="grid lg:grid-cols-2 gap-40 items-start">
          <FadeIn>
            <h2 className="serif text-7xl md:text-9xl leading-[0.8] mb-20 text-[#2a2d33]">Systemic <br/><span className="text-metallic-gold italic font-light">Efficiency.</span></h2>
            <div className="space-y-16">
              <div className="p-20 border border-neutral-100 bg-white shadow-[0_60px_100px_-20px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.01] duration-500">
                <h4 className="serif text-4xl mb-12 text-[#061226]">Trade (B2B) Economics</h4>
                <div className="space-y-10">
                  {[
                    { l: "Product Margin Capture", v: "28-32%" },
                    { l: "BNPL Transaction Fee", v: "1.5-3%" },
                    { l: "Logistics Optimization", v: "Premium" }
                  ].map(x => (
                    <div key={x.l} className="flex justify-between items-center border-b border-neutral-100 pb-6">
                      <span className="text-[12px] font-black uppercase tracking-[0.4em] text-neutral-400">{x.l}</span>
                      <span className="serif text-3xl text-[#D4AF37] font-bold">{x.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-20 border border-neutral-100 bg-white shadow-[0_60px_100px_-20px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.01] duration-500">
                <h4 className="serif text-4xl mb-12 text-[#061226]">Retail (B2C) Economics</h4>
                <div className="space-y-10">
                  {[
                    { l: "Gross Direct Margin", v: "38-42%" },
                    { l: "Platform Lead Fee", v: "Net-Zero" },
                    { l: "Asset Productivity", v: "Optimized" }
                  ].map(x => (
                    <div key={x.l} className="flex justify-between items-center border-b border-neutral-100 pb-6">
                      <span className="text-[12px] font-black uppercase tracking-[0.4em] text-neutral-400">{x.l}</span>
                      <span className="serif text-3xl text-[#D4AF37] font-bold">{x.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          
          <div className="sticky top-40">
            <FadeIn direction="left" delay={0.4}>
              <div className="bg-[#061226] p-24 text-white rounded-sm shadow-2xl relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[200px] rounded-full" />
                <h3 className="serif text-5xl mb-16 italic font-light text-metallic-gold">Proprietary Moat</h3>
                <p className="text-neutral-400 text-2xl font-light leading-relaxed mb-20">
                  By owning the full-stack logistics and procurement touchpoints, we capture the 15-20% leakage lost to fragmented traders.
                </p>
                <button 
                  onClick={openPortal} 
                  className="w-full bg-[#D4AF37] text-[#061226] py-9 text-[13px] uppercase tracking-[0.6em] font-black hover:scale-[1.02] transition-transform duration-500 shadow-2xl"
                >
                  Download Performance Models
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Allocation Section */}
      <Section label="05. Live Capital Placement" className="bg-[#050e1d]">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block px-14 py-4 border border-[#D4AF37]/40 rounded-full mb-24 bg-[#D4AF37]/5">
              <span className="text-[13px] font-black text-[#D4AF37] uppercase tracking-[1em]">Seed Allocation: Closing</span>
            </div>
            <h2 className={`serif text-8xl md:text-[13rem] mb-32 leading-[0.75] ${PremiumHeading}`}>The Foundation of <br/><span className="text-metallic-gold italic font-light">Systemic Scale.</span></h2>
            
            <div className="grid md:grid-cols-2 gap-20 text-left mb-40">
              <motion.div whileHover={{ y: -15 }} className="p-20 bg-white/[0.01] border border-white/5 transition-all shadow-2xl">
                <h4 className="serif text-4xl mb-10 text-metallic-gold font-light">Capital Requirement</h4>
                <div className="serif text-9xl mb-12 leading-none text-white drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">₹2 Cr</div>
                <p className="text-neutral-500 text-[12px] font-black uppercase tracking-[0.5em] leading-relaxed">
                  Raising ₹2 Cr for 10% equity (₹20 Cr Post-Money) to finalize Phase I infrastructure.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -15 }} className="p-20 bg-white/[0.01] border border-white/5 transition-all shadow-2xl">
                <h4 className="serif text-4xl mb-16 italic font-light text-white">Use of Proceeds</h4>
                <div className="space-y-12">
                  {[
                    { l: "Physical Stores (EC)", p: "40%" },
                    { l: "Proprietary Tech Stack", p: "25%" },
                    { l: "Market Acquisition", p: "20%" },
                    { l: "Strategic Hires", p: "15%" }
                  ].map(a => (
                    <div key={a.l} className="group flex justify-between items-center text-[12px] uppercase font-black tracking-[0.6em]">
                      <span className="text-neutral-500 group-hover:text-white transition-colors">{a.l}</span>
                      <span className="text-metallic-gold">{a.p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <button 
              onClick={openPortal} 
              className="group relative bg-white/5 border border-[#D4AF37] px-24 py-11 text-[15px] uppercase tracking-[0.8em] font-black text-[#D4AF37] shadow-2xl overflow-hidden hover:bg-[#D4AF37] hover:text-[#061226] transition-all duration-700"
            >
              <span className="relative z-10 flex items-center gap-12">
                Download Institutional Memorandum <ExternalLink size={28}/>
              </span>
            </button>
          </FadeIn>
        </div>
      </Section>

      {/* Closure Vision */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.div 
          style={{ scale: useTransform(scrollYProgress, [0.85, 1], [1, 1.3]) }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')] bg-cover bg-center grayscale opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061226] via-transparent to-[#061226]" />
        
        <div className="relative z-10 max-w-7xl px-6">
          <FadeIn>
            <div className="flex justify-center mb-24"><LogoSeal size={200} /></div>
            <h2 className={`serif text-8xl md:text-[15rem] mb-32 leading-[0.7] ${PremiumHeading} tracking-tighter`}>The Future is <span className="text-metallic-gold italic font-light">Assured.</span></h2>
            <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
              <button 
                onClick={openPortal} 
                className="group border-2 border-[#D4AF37] px-28 py-11 text-[14px] uppercase tracking-[1em] font-black text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061226] transition-all duration-700"
              >
                Join the Founding Circle
              </button>
              <div className="h-px w-32 bg-white/20 hidden md:block" />
              <p className="text-neutral-600 text-[12px] uppercase tracking-[0.8em] font-black italic">Infrastructure for the Global South</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040d1a] py-48 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-10 mb-16">
              <LogoSeal size={70} />
              <div className="flex flex-col">
                <span className="serif text-4xl tracking-widest text-white uppercase font-light">ARK <span className="text-metallic-gold font-black">ASSURED</span></span>
                <span className="text-[10px] tracking-[1.2em] text-neutral-600 uppercase font-black">Systemic Integrity</span>
              </div>
            </div>
            <p className="text-neutral-500 text-[12px] font-black leading-relaxed uppercase tracking-[0.6em] opacity-60 mb-24 max-w-md">
              The proprietary seal of trust for building materials and interior solutions. Eliminating fragmentation through integrated logistics and direct brand access.
            </p>
            <div className="flex gap-20 items-center">
              <button onClick={openPortal} className="text-white/40 hover:text-[#D4AF37] transition-colors"><Globe size={32}/></button>
              <div className="h-px w-24 bg-white/10" />
              <a href="mailto:invest@arkassured.com" className="text-white/40 hover:text-[#D4AF37] transition-colors font-black text-[13px] uppercase tracking-[0.8em]">Investor Relations</a>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-24">
            <div>
              <span className="text-[12px] uppercase tracking-[0.8em] text-neutral-700 block mb-16 font-black">Thesis</span>
              <ul className="space-y-12 text-[12px] font-black tracking-[0.5em] text-neutral-500 uppercase">
                <li><a href="#thesis" onClick={(e) => handleGlide(e, 'thesis')} className="hover:text-[#D4AF37] transition-colors">The Problem</a></li>
                <li><a href="#workflow" onClick={(e) => handleGlide(e, 'workflow')} className="hover:text-[#D4AF37] transition-colors">Ecosystem</a></li>
                <li><a href="#market" onClick={(e) => handleGlide(e, 'market')} className="hover:text-[#D4AF37] transition-colors">Market SOM</a></li>
                <li><a href="#economics" onClick={(e) => handleGlide(e, 'economics')} className="hover:text-[#D4AF37] transition-colors">Economics</a></li>
              </ul>
            </div>
            <div>
              <span className="text-[12px] uppercase tracking-[0.8em] text-neutral-700 block mb-16 font-black">Operations</span>
              <ul className="space-y-12 text-[12px] font-black tracking-[0.5em] text-neutral-500 uppercase opacity-40">
                <li><span>Hyderabad</span></li>
                <li><span>Kukatpally</span></li>
                <li><span>Shamshabad</span></li>
                <li><span>Nizamabad</span></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-[12px] uppercase tracking-[0.8em] text-neutral-700 block mb-16 font-black">Registry</span>
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-800 font-bold leading-loose">
                Confidential Document <br/>
                Proprietary Protocol <br/>
                Hyderabad, TS, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-48 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-16">
          <span className="text-neutral-800 text-[11px] font-black uppercase tracking-[1em]">© 2024 ARK Assured. Private Placement Memorandum.</span>
          <div className="flex gap-24">
            {['Compliance', 'Governance', 'Legal'].map(link => (
              <span key={link} onClick={openPortal} className="text-neutral-800 text-[11px] font-black uppercase tracking-[0.8em] cursor-pointer hover:text-[#D4AF37] transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* Institutional Portal Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}