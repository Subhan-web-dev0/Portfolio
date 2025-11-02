"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react"

/**
 * Contact Section Component
 * Features animated contact form with EmailJS integration for sending emails
 */
export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    /**
     * Handles form submission and sends email via EmailJS
     * Requires environment variables: NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus({ type: null, message: "" })

        try {
            // Validate environment variables
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                )
            }

            // Initialize EmailJS (only needs to be done once, but safe to call multiple times)
            emailjs.init(publicKey)

            // Send email via EmailJS
            const response = await emailjs.send(serviceId, templateId, {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: "Subhan Khan",
            })

            if (response.status === 200) {
                setStatus({
                    type: "success",
                    message: "Thank you for your message! I'll get back to you soon.",
                })
                setFormData({ name: "", email: "", message: "" })

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setStatus({ type: null, message: "" })
                }, 5000)
            }
        } catch (error) {
            console.error("EmailJS Error:", error)
            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to send message. Please try again later or contact me directly via email.",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Get In Touch</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        Have a project in mind? Let's work together to bring your ideas to
                        life.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <Card className="glass border-primary/20">
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <motion.a
                                    href="mailto:subhankhan@example.com"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>subhankhan@example.com</span>
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com/in/subhankhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span>LinkedIn Profile</span>
                                </motion.a>
                            </CardContent>
                        </Card>

                        <Card className="glass border-primary/20">
                            <CardContent className="p-6">
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or
                                    opportunities to be part of your visions. Feel free to reach
                                    out through the form or directly via email.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card className="glass border-primary/20">
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="glass"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="glass"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="glass resize-none"
                                        />
                                    </div>
                                    {/* Status Message */}
                                    <AnimatePresence>
                                        {status.type && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className={`p-4 rounded-md flex items-center gap-2 ${status.type === "success"
                                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                                    }`}
                                            >
                                                {status.type === "success" ? (
                                                    <CheckCircle className="w-5 h-5" />
                                                ) : (
                                                    <XCircle className="w-5 h-5" />
                                                )}
                                                <p className="text-sm">{status.message}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            variant="neon"
                                            size="lg"
                                            className="w-full group"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

