"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Workflow Builder",
    description:
      "An intuitive workflow builder application built with React Flow, enabling users to create and manage complex workflows with drag-and-drop functionality.",
    tech: ["React", "React Flow", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    title: "Weekly Calendar Component",
    description:
      "A fully responsive and customizable weekly calendar component with event management, built with React and styled with Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
  },
  {
    title: "Email Campaign Wizard",
    description:
      "A comprehensive email campaign management system with template builder, A/B testing, and analytics dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800",
  },
  {
    title: "Lead Management System",
    description:
      "A complete CRM solution for managing leads, contacts, and sales pipelines with real-time updates and analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "E-sign Template Builder",
    description:
      "A powerful document template builder for electronic signatures with drag-and-drop form fields and document preview.",
    tech: ["Next.js", "React DnD", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
]

/**
 * Projects Section Component
 * Displays project cards with 3D hover animations
 */
export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="glass border-primary/20 hover:border-primary/50 transition-all h-full group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-foreground/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-foreground/60">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="neon"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

