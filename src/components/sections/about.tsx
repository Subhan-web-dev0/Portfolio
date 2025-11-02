"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { 
  Code, 
  Palette, 
  Zap, 
  Globe, 
  Database,
  FileCode,
  Atom
} from "lucide-react"

const skills = [
  { name: "React.js", icon: Atom, color: "text-blue-400" },
  { name: "Next.js", icon: FileCode, color: "text-gray-400" },
  { name: "TypeScript", icon: Code, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-400" },
  { name: "Performance", icon: Zap, color: "text-yellow-400" },
  { name: "Web Development", icon: Globe, color: "text-green-400" },
  { name: "State Management", icon: Database, color: "text-purple-400" },
]

/**
 * About Section Component
 * Displays professional summary and skills grid
 */
export function AboutSection() {
  const handleDownloadResume = () => {
    // TODO: Add resume download functionality
    window.open("/resume.pdf", "_blank")
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            A brief introduction to who I am and what I do
          </p>

          <Card className="glass border-primary/20 mb-12">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I&apos;m a passionate Front-End Developer specializing in creating
                modern, responsive web applications using cutting-edge
                technologies. With expertise in React.js, Next.js, and
                TypeScript, I bring ideas to life through clean, efficient code
                and intuitive user interfaces.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My approach combines technical excellence with creative
                problem-solving, ensuring that every project I work on delivers
                exceptional user experiences while maintaining high performance
                standards and scalability.
              </p>
            </CardContent>
          </Card>

          {/* Skills Grid */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Card className="glass border-primary/20 hover:border-primary/50 transition-all cursor-pointer h-full">
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                        <Icon className={`w-8 h-8 mb-3 ${skill.color}`} />
                        <p className="text-sm font-medium">{skill.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="neon"
              onClick={handleDownloadResume}
              className="group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

