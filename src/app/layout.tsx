import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Subhan Khan | Front-End Developer",
    description:
        "Portfolio of Subhan Khan, a Front-End Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS. Building sleek, modern web experiences.",
    keywords: [
        "Front-End Developer",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Web Developer",
        "Portfolio",
    ],
    authors: [{ name: "Subhan Khan" }],
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
        shortcut: "/logo.png",
    },
    openGraph: {
        title: "Subhan Khan | Front-End Developer",
        description:
            "Portfolio of Subhan Khan, a Front-End Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS.",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Subhan Khan - Front-End Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Subhan Khan | Front-End Developer",
        description:
            "Portfolio of Subhan Khan, a Front-End Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS.",
        images: ["/logo.png"],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

