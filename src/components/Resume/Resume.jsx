import { useState, useCallback, useMemo } from 'react'
import { FaDownload, FaEye, FaFilePdf, FaSpinner, FaGraduationCap, FaBriefcase, FaCertificate, FaAward } from 'react-icons/fa'
import SEOHead from '../SEO/SEOHead'
import { SEO_CONFIGS } from '../SEO/seoConfigs'
import { motion, AnimatePresence } from 'framer-motion'

function Resume() {
  const [showPDF, setShowPDF] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  // Use useCallback to prevent unnecessary re-renders
  const handleViewPDF = useCallback(() => {
    setIsLoading(true)
    setPdfError(false)
    // Reduced loading time for better UX
    setTimeout(() => {
      setIsLoading(false)
      setShowPDF(true)
    }, 500)
  }, [])

  const handleDownloadPDF = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/documents/12214423_Snehasis_Koley.pdf'
    link.download = '12214423_Snehasis_Koley.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  // Memoize static data for performance - Updated with real resume content
  const experiences = useMemo(() => [
    {
      title: "Fullstack Developer",
      company: "Personal Projects",
      period: "April 2025 - Present",
      location: "Phagwara, Punjab, India",
      achievements: [
        "Built a Ai-powered interviewer platform integrating Google LLM for voice-based interviews and real-time collaboration using Next.js and TypeScript",
        "Developed a career path recommendation system using google LLM model to analyze user skills and suggest optimal career trajectories through current data",
        "Developed a modern, responsive portfolio website with 3D animations, advanced UI/UX, and performance optimization using React 19 and TailwindCSS 4",
        "Created multiple full-stack applications leveraging technologies such as Node.js, Express, MongoDB, PostgreSQL, WebSockets, and modern frontend frameworks",
        "Focused on clean architecture, reusable components, responsive design, and scalable backend implementation across all projects"

      ]
    },
    {
      title: "Ui/UX Developer",
      company: "Personal Projects",
      period: "Aug 2025 - Nov 2025",
      location: "Phagwara, Punjab, India",
      achievements: [
        "Designed Cryptos — a crypto trading platform concept inspired by Binance, including complete UI design, user research, wireframes, and high-fidelity prototypes",
        "Created intuitive and engaging user interfaces for various web applications using Figma",
        "Conducted user research and usability testing to refine designs and improve user experience",
      ]
    },
    {
      title: "Backend Developer (DevTalk)",
      company: "Freelanced Project",
      period: "June 2025 - July 2025",
      location: "Phagwara, Punjab, India",
      achievements: [
        "Built DevTalk — a real-time developer community platform featuring live chat, location sharing, and WebSocket-based communication",
        "Implemented RESTful APIs and WebSocket for real-time collaboration features",
        "Integrated MongoDB database with comprehensive data modeling",
      ]
    }
  ], []);

  // Education data - also memoized with real information
  const education = useMemo(() => [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Lovely Professional University",
      period: "August 2022 - Present",
      location: "Phagwara, Punjab, India",
      gpa: "8.3",
      details: "Final-year CS student with strong experience in full-stack web development. Passionate about backend engineering, database design, and building scalable, high-performance applications."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "O.P. Jindal School",
      period: "April 2020 - April 2022",
      location: "Patratu, Jharkhand, India",
      gpa: "9.1",
      details: "Completed Class 12 with a focus on Physics, Chemistry, Mathematics, and Information Technology, building a strong analytical and computational foundation."
    }
  ], []);

  // Certifications - memoized with real project-based accomplishments
  const certifications = useMemo(() => [
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      year: "Aug 2024 - Nov 2024",
      details: "Cloud Computing, Virtualization, Distributed Systems, Load Balancing, Containerization, Microservices Architecture, Cloud Security, Autoscaling, Resource Management, Infrastructure as a Service (IaaS), Platform as a Service (PaaS)"
    },
    {
      name: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      year: "Mar 2024 - May 2024",
      details: "Responsible AI,Natural Language Processing,Performance Tuning,Generative AI,Applied Machine Learning,Machine Learning,Large Language Modeling,Scalability,Reinforcement Learning"
    },
    {
      name: "Algorithms Specialization",
      issuer: "Stanford Online",
      year: "Jan 2024 - Jul 2024",
      details: "Algorithm Design and Analysis, Divide and Conquer, Greedy Algorithms, Dynamic Programming, Graph Algorithms, Shortest Paths, Minimum Spanning Trees, Data Structures, NP-Completeness, and Optimization Techniques"
    }
  ], []);

  // Awards & Scholarships - memoized with actual achievements
  const work = useMemo(() => [
    {
      title: "Outlier.ai",
      year: "Nov 2024 - Jan 2025",
      type: "Freelance AI Trainer",
      achievement: "Increased model accuracy by 15% through high-quality data annotation and fine-tuning",
      description: "Trained and evaluated AI models on diverse datasets to enhance performance, reliability, and real-world applicability"
    },
    {
      title: "DevTalk",
      year: "Jan 2024 - Jul 2024",
      type: "Freelance Project",
      achievement: "Built real-time communication features using WebSockets and scalable backend architecture",
      description: "Designed and developed DevTalk, a real-time chat platform for developers featuring live messaging, location sharing, and a modern, responsive UI."
    }

  ], []);



  return (
    <>
      <SEOHead {...SEO_CONFIGS.resume} />
      <section className="section-padding pt-28">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaFilePdf className="w-6 h-6 text-emerald-400" />
              <span className="text-lg font-semibold text-slate-300">
                Professional Resume
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="gradient-text">Resume</span>
            </motion.h1>

            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.p 
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Download my complete resume or view it online to learn more about 
              my professional experience, skills, and work experience.
            </motion.p>

          </div>

          {/* PDF Viewer */}
          <AnimatePresence>
            {showPDF && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-effect rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100">
                        Resume Preview
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">
                        12214423_Snehasis_Koley.pdf
                      </p>
                    </div>
                    <motion.button
                      onClick={() => setShowPDF(false)}
                      className="text-slate-400 hover:text-slate-200 text-2xl p-2 hover:bg-slate-700/50 rounded-lg transition-all duration-300"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      ×
                    </motion.button>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <iframe
                      src="/documents/12214423_Snehasis_Koley.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH"
                      className="w-full h-[600px] rounded-lg border border-slate-700/30"
                      title="Resume PDF"
                      loading="lazy"
                      onError={() => setPdfError(true)}
                      onLoad={() => setPdfError(false)}
                    />
                    
                    {/* Fallback for browsers that don't support PDF viewing */}
                    <div className={`text-center mt-4 p-4 bg-slate-700/30 rounded-lg ${pdfError ? 'bg-red-900/20 border border-red-500/30' : ''}`}>
                      <p className="text-slate-400 text-sm mb-3">
                        {pdfError ? 'PDF failed to load, but you can still access it!' : "Can't see the PDF? No problem!"}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <a
                          href="/documents/12214423_Snehasis_Koley.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaEye className="text-sm" />
                          View in Browser
                        </a>
                        <button
                          onClick={handleDownloadPDF}
                          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                        >
                          <FaDownload className="text-sm" />
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-6">
                <FaBriefcase className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-semibold text-slate-300">
                  Details
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Professional Journey
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-8 border border-slate-700/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-slate-400 text-sm mt-2 md:mt-0 text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-slate-300 flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education, Certifications & Awards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Education */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-4">
                  <FaGraduationCap className="w-5 h-5 text-emerald-400" />
                  <span className="text-lg font-semibold text-slate-300">
                    Education
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Academic Background
                </h2>
              </div>

              <div className="flex-1">
                {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-6 border border-slate-700/50"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-emerald-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center text-slate-400 text-sm mb-2">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-slate-300 font-semibold mb-3">
                    GPA: {edu.gpa}
                  </p>
                  {edu.details && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </motion.div>
              ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-4">
                  <FaCertificate className="w-5 h-5 text-yellow-400" />
                  <span className="text-lg font-semibold text-slate-300">
                    Certifications
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Professional Certifications
                </h2>
              </div>

              <div className="flex-1">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 border border-slate-700/50"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <FaAward className="text-yellow-400" />
                      <h3 className="font-bold text-slate-100">
                        {cert.name}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    {cert.details && (
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {cert.details}
                      </p>
                    )}
                  </motion.div>
                ))}
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="min-h-[600px] flex flex-col">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-slate-700/50 mb-4">
                  <FaAward className="w-5 h-5 text-amber-400" />
                  <span className="text-lg font-semibold text-slate-300">
                    Work Experience
                  </span>
                </div>
                <h2 className="text-2xl font-bold gradient-text">
                  Freelancing
                </h2>
              </div>

              <div className="space-y-4">
                {work.map((work, index) => (
                  <motion.div
                    key={index}
                    className="glass-effect rounded-xl p-6 border border-slate-700/50 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Award background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl"></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                            <FaAward className="text-white text-lg" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-100 text-lg">
                              {work.title}
                            </h3>
                            <p className="text-amber-400 text-sm font-medium">
                              {work.type}
                            </p>
                          </div>
                        </div>
                        <span className="text-slate-400 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full">
                          {work.year}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-emerald-400 text-sm font-medium">
                          <span className="text-slate-300">Achievement:</span> {work.achievement}
                        </p>
                      </div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center glass-effect rounded-3xl p-12 border border-slate-700/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaDownload className="text-white text-2xl" />
            </motion.div>

            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Ready to collaborate?
            </h3>

            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Download my full resume for detailed information about my experience, 
              projects, and technical skills. Let's build something amazing together!
            </p>

            <motion.button
              onClick={handleDownloadPDF}
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <FaDownload />
              Get My Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Resume
