import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '../SEO/SEOHead'
import { SEO_CONFIGS } from '../SEO/seoConfigs'
import {
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiPostman,
  SiFramer,
  SiVercel,
  SiGithub,
  SiTypescript,
  SiFirebase,
  SiExpress,
  SiDjango,
  SiNextdotjs,
  SiPostgresql,
  SiJupyter,
  SiOpenai,
  SiGoogle,
} from 'react-icons/si'
import { FaDatabase, FaTools, FaCloud, FaRocket, FaCube, FaCode, FaBrain, FaNodeJs } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

function TechStack() {
  // Tech Stack data organized by categories
  const techCategories = useMemo(() => [
    {
      id: 1,
      title: "Backend Development",
      icon: FaCode,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      technologies: [
        { name: "NodeJs", icon: FaNodeJs, level: "Expert", color: "#339933" },
        { name: "ExpressJs", icon: SiExpress, level: "Advanced", color: "#FFFFFF" },
        { name: "Django", icon: SiDjango, level: "Advanced", color: "#3776AB" },
        { name: "TypeScript", icon: SiTypescript, level: "Advanced", color: "#3178C6" },
        { name: "WebSocket", icon: FaCode, level: "Intermediate", color: "#FF6B6B" }

      ]
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: FaRocket,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      technologies: [
        { name: "React.js", icon: SiReact, level: "Advanced", color: "#61DAFB" },
        { name: "TailwindCSS", icon: SiTailwindcss, level: "Advanced", color: "#06B6D4" },
        { name: "Next.js", icon: SiNextdotjs, level: "Advanced", color: "#000000" },
        { name: "Framer Motion", icon: SiFramer, level: "Intermediate", color: "#0055FF" },
        { name: "shadcn/ui", icon: FaCube, level: "Intermediate", color: "#000000" }

      ]
    },
    {
      id: 3,
      title: "Database Systems",
      icon: FaDatabase,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      technologies: [
        { name: "MySQL", icon: SiMysql, level: "Advanced", color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, level: "Advanced", color: "#003545" },
        { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediate", color: "#336791" },
        { name: "FireStore", icon: SiFirebase, level: "Intermediate", color: "#FFCA28" }
      ]
    },
    {
      id: 4,
      title: "Development Tools",
      icon: FaTools,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      technologies: [
        { name: "VS Code", icon: VscVscode, level: "Expert", color: "#007ACC" },
        { name: "Git", icon: SiGit, level: "Expert", color: "#F05032" },
        { name: "Jupyter Notebook", icon: SiJupyter, level: "Advanced", color: "#F37626" },
        { name: "Postman", icon: SiPostman, level: "Advanced", color: "#FF6C37" }
      ]
    },
    {
      id: 5,
      title: "Cloud & Deployment",
      icon: FaCloud,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      technologies: [
        { name: "Vercel", icon: SiVercel, level: "Advanced", color: "#000000" },
        { name: "GitHub", icon: SiGithub, level: "Advanced", color: "#181717" },
        { name: "Docker", icon: SiDocker, level: "Intermediate", color: "#2496ED" }

      ]
    },
    {
      id: 6,
      title: "AI & Automation",
      icon: FaBrain,
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
      technologies: [
        { name: "Gemini", icon: SiGoogle, level: "Expert", color: "#8E75B2" },
        { name: "ChatGPT", icon: SiOpenai, level: "Advanced", color: "#412991" },
        { name: "Claude AI", icon: FaBrain, level: "Intermediate", color: "#CC785C" }
      ]
    }
  ], [])

  // Project highlights using tech stack
  const projectHighlights = useMemo(() => [
    {
      id: 1,
      name: "HiRevo :- AI Interviewer Platform",
      description: "Full-stack AI interviewer platform with AI voice integration and real-time collaboration",
      techUsed: ["Next.js", "TypeScript", "Google LLM model", "Vapi", "Tailwind CSS", "FireStore", "Shadcn/ui",],
      highlight: "Real-time Ai-based interviews with voice interaction and collaborative features with authentication"
    },
    {
      id: 2,
      name: "PriyoPixcel - E-commerce Platform",
      description: "Serverless e-commerce app with real-time preview and automated order processing using Google Sheets as a database.",
      techUsed: ["React 19", "Google Sheets API", "Drive API", "OAuth", "Tailwind CSS"],
      highlight: "Zero-cost backend infrastructure with seamless Google ecosystem integration."
    },

    {
      id: 3,
      name: "Portfolio Website",
      description: "A modern, fully responsive portfolio showcasing projects with smooth 3D animations and interactive UI elements.",
      techUsed: ["React 19", "React Router", "Framer Motion", "Tailwind CSS"],
      highlight: "Optimized for high performance with lazy loading, enhanced SEO, and seamless navigation."
    }
  ], [])

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-emerald-400'
      case 'Advanced': return 'text-blue-400'
      case 'Intermediate': return 'text-yellow-400'
      case 'Proficient': return 'text-purple-400'
      default: return 'text-slate-400'
    }
  }

  return (
    <>
      <SEOHead {...SEO_CONFIGS.techStack} />
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
              <FaCode className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold text-slate-300">
                Technology Stack
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">Technologies</span> & Tools
            </motion.h1>

            <motion.p
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A complete showcase of the technologies and tools I rely on to develop robust, scalable applications.
              Covering everything from backend logic to cloud infrastructure.
            </motion.p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {techCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  className={`glass-effect rounded-2xl p-6 border ${category.borderColor} ${category.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => {
                      const TechIcon = tech.icon
                      return (
                        <motion.div
                          key={techIndex}
                          className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            x: 5,
                            backgroundColor: "rgba(51, 65, 85, 0.4)"
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <TechIcon
                              className="w-5 h-5"
                              style={{ color: tech.color }}
                            />
                            <span className="font-medium text-slate-200">
                              {tech.name}
                            </span>
                          </div>
                          <span className={`text-sm font-semibold ${getLevelColor(tech.level)}`}>
                            {tech.level}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Project Highlights */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold gradient-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Tech Stack in Action
              </motion.h2>
              <motion.p
                className="text-slate-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Real projects showcasing how I apply these technologies to solve problems
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectHighlights.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass-effect rounded-2xl p-6 border border-slate-700/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <h3 className="text-xl font-bold text-slate-100 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-emerald-400 font-medium text-sm mb-2">
                      Key Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-blue-400 font-medium text-sm">
                      💡 {project.highlight}
                    </p>
                  </div>
                </motion.div>
              ))}
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
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaRocket className="text-white text-2xl" />
            </motion.div>

            <h3 className="text-3xl font-bold text-slate-100 mb-4">
              Let's Build Something Exceptional
            </h3>

            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life with modern technology?
              Let’s collaborate and create powerful, innovative solutions together.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TechStack
