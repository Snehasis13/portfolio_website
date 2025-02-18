import { useEffect, useRef, useState } from "react";
import TypeWriter from "./TypeWriter";
import BlackHoleBackground from "./BlackHoleBackground";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiCplusplus,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";

// Lazy load heavy dependencies only when needed
let HeroModel = null;
let gsap = null;
let ScrollTrigger = null;

// Dynamic imports for better mobile performance
const loadHeavyDependencies = async () => {
  try {
    const [heroModelModule, gsapModule] = await Promise.all([
      import("./HeroModel"),
      import("gsap")
    ]);

    HeroModel = heroModelModule.default;
    gsap = gsapModule.default;

    const scrollTriggerModule = await import("gsap/ScrollTrigger");
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  } catch (error) {
    console.warn('Failed to load heavy dependencies:', error);
  }
};

function Home() {
  const contentRef = useRef(null);
  const techStackRef = useRef(null);
  const [show3D, setShow3D] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Performance check to decide whether to show 3D model and heavy animations
  useEffect(() => {
    const checkPerformance = () => {
      const mobile = window.innerWidth < 768;
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isHighPerformance = !connection || connection.effectiveType === '4g';
      const hasGoodHardware = window.devicePixelRatio <= 2;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setIsMobile(mobile);
      setShow3D(isHighPerformance && hasGoodHardware && !mobile && !prefersReducedMotion);
      setAnimationsEnabled(!mobile && !prefersReducedMotion);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  // Load heavy dependencies only when needed
  useEffect(() => {
    if (animationsEnabled && !gsap) {
      loadHeavyDependencies();
    }
  }, [animationsEnabled]);

  useEffect(() => {
    // Only run animations if enabled and dependencies loaded
    if (!animationsEnabled || !gsap) return;

    // Wait a bit for gsap to be fully loaded
    const timer = setTimeout(() => {
      if (!gsap) return;

      // Staggered entrance animation for hero section
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-element",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      // Floating animation for tech stack tags removed as per user request

      // Clean up animations on component unmount
      return () => {
        tl.kill();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [animationsEnabled]);

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      <BlackHoleBackground />

      <div
        className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        ref={contentRef}
      >
        {/* Left column - Text content */}
        <div className="space-y-8">
          <div className="hero-element">
            <p className="text-slate-300 font-medium text-lg mb-2">Hello, I'm</p>
            <h1 className="font-bold mb-6">
              <span className={`text-4xl sm:text-5xl md:text-7xl gradient-text drop-shadow-2xl relative block ${isMobile ? 'leading-relaxed' : 'leading-normal whitespace-nowrap'} ${!isMobile ? 'animate-pulse-slow' : ''} py-2 font-extrabold`}>
                <span className="inline-block gradient-text">Snehasis Koley</span>                {!isMobile && <span className="absolute -inset-2 bg-white/3 blur-2xl rounded-2xl -z-10"></span>}
              </span>
            </h1>
          </div>

          <div className="hero-element text-2xl md:text-4xl font-semibold text-slate-200 mb-8 h-16">
            <TypeWriter
              texts={[
                "Full Stack developer",
                "Software Developer",
                "Backend Engineer",
                "Frontend Engineer",
              ]}
              delay={isMobile ? 100 : 80}
              deleteDelay={isMobile ? 50 : 30}
            />
          </div>

          <p className="hero-element text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
            Final-year <span className="text-emerald-400 font-semibold">Software Engineering</span> student at LPU with hands-on experience in
            <span className="text-blue-400 font-semibold"> C++, React.js, and Node.js</span>. Passionate about backend development,
            database design, and building <span className="text-violet-400 font-semibold">scalable, high-performance applications</span>.
            Actively seeking opportunities to apply my skills and contribute to impactful real-world projects.
          </p>


          <div className="hero-element flex flex-wrap gap-6">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              className="btn-primary flex items-center gap-3"
            >
              View Projects <FaArrowRight className="text-lg" />
            </button>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Snehasis13"
                target="_blank"
                rel="noreferrer"
                className={`glass-effect text-slate-300 hover:text-blue-400 transition-all p-4 rounded-xl ${!isMobile ? 'hover:-translate-y-1 transform duration-300 hover:shadow-lg hover:shadow-blue-500/20' : ''}`}
                aria-label="GitHub"
              >
                <FaGithub className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com/in/Snehasis13"
                target="_blank"
                rel="noreferrer"
                className={`glass-effect text-slate-300 hover:text-blue-400 transition-all p-4 rounded-xl ${!isMobile ? 'hover:-translate-y-1 transform duration-300 hover:shadow-lg hover:shadow-blue-500/20' : ''}`}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Tech stack tags */}
          <div className="hero-element mt-16" ref={techStackRef}>
            <p className="text-slate-400 mb-6 text-lg font-medium">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-4">
              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-red-400 text-sm rounded-xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-red-500/10' : ''}`}>
                <SiCplusplus className="text-lg" /> C++
              </span>

              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-green-400 text-sm rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-green-500/10' : ''}`}>
                <SiNextdotjs className="text-lg" /> Next.js
              </span>

              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-green-500 text-sm rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-green-500/10' : ''}`}>
                <SiNodedotjs className="text-lg" /> Node.js
              </span>

              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-blue-400 text-sm rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-blue-500/10' : ''}`}>
                <SiReact className="text-lg" /> React
              </span>

              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-blue-500 text-sm rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-blue-500/10' : ''}`}>
                <SiTypescript className="text-lg" /> TypeScript
              </span>

              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-cyan-400 text-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-cyan-500/10' : ''}`}>
                <SiTailwindcss className="text-lg" /> TailwindCSS
              </span>
              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-cyan-400 text-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-cyan-500/10' : ''}`}>
                <SiMongodb className="text-lg" /> MongoDB
              </span>
              <span className={`tech-tag flex items-center gap-2 px-4 py-3 glass-effect text-cyan-400 text-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 ${!isMobile ? 'hover:shadow-lg hover:shadow-cyan-500/10' : ''}`}>
                <SiPostgresql className="text-lg" /> PostgreSQL

              </span>
            </div>
          </div>
        </div>

        {/* Right column - Empty to allow Black Hole visibility */}
        <div className="hero-element hidden lg:block relative h-[500px]">
          {/* The Black Hole background handles the visual here */}
        </div>
      </div>
    </section>
  );
}

export default Home;

// Review this logic
// Added for better accessibility
// Optimization: Memoized calculation
/* Fixed bug related to state update */
// Review this logic
// updated styles
// Optimization: Memoized calculation