"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Front-End Developer",
    company: "Tech Company",
    location: "Remote",
    period: "2022 - Present",
    description: [
      "Developed and maintained responsive web applications using React.js and Next.js",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented modern UI/UX designs with Tailwind CSS and Framer Motion",
      "Optimized application performance and improved loading times by 40%",
    ],
  },
  {
    title: "Junior Front-End Developer",
    company: "Startup Inc",
    location: "San Francisco, CA",
    period: "2020 - 2022",
    description: [
      "Built reusable React components and maintained component library",
      "Worked on multiple client projects using TypeScript and modern JavaScript",
      "Participated in code reviews and contributed to team best practices",
      "Learned and applied new technologies and frameworks continuously",
    ],
  },
]

/**
 * Experience Section Component
 * Displays professional experience in timeline format
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-8 md:mb-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10" />

                <Card className="glass border-primary/20 md:ml-16 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl md:text-2xl mb-2">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

