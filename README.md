# Subhan Khan - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Subhan Khan, a Front-End Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Minimalistic dark theme with neon/glassmorphism accents
- 🎭 **3D Interactive Elements**: React Three Fiber powered 3D background in hero section
- ✨ **Smooth Animations**: Framer Motion for fluid transitions and scroll-based animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🚀 **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- ♿ **Accessible**: Semantic HTML and ARIA labels for accessibility
- 🔍 **SEO Friendly**: Comprehensive metadata and Open Graph tags

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Three.js
- **UI Components**: Shadcn/UI (Radix UI primitives)
- **Icons**: Lucide React
- **Email Service**: EmailJS for contact form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up EmailJS for the contact form:
   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with the following variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (Subhan Khan)
   - Get your Service ID, Template ID, and Public Key from the EmailJS dashboard
   - Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── ui/             # Shadcn/UI components
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   ├── navigation.tsx  # Navigation component
│   │   ├── footer.tsx      # Footer component
│   │   └── background-3d.tsx # 3D background component
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Update Personal Information

1. **About Section**: Edit `src/components/sections/about.tsx`
2. **Projects**: Update the `projects` array in `src/components/sections/projects.tsx`
3. **Experience**: Modify the `experiences` array in `src/components/sections/experience.tsx`
4. **Contact**: Update email and social links in `src/components/sections/contact.tsx`
5. **Meta Tags**: Update metadata in `src/app/layout.tsx`

### Styling

The color scheme and styling can be customized in:
- `src/app/globals.css` - CSS variables and global styles
- `tailwind.config.ts` - Tailwind theme configuration

### Adding a Resume

Place your resume PDF in the `public` folder as `resume.pdf` for the download button to work.

### EmailJS Configuration

The contact form uses EmailJS to send emails. Make sure you have:
1. Created a `.env.local` file with your EmailJS credentials
2. Set up an email service in your EmailJS account
3. Created an email template with the required variables (`from_name`, `from_email`, `message`, `to_name`)

For detailed setup instructions, visit the [EmailJS Documentation](https://www.emailjs.com/docs/).

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your EmailJS environment variables in Vercel's project settings:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Deploy with default settings

The project is also deployable on other platforms like Netlify, AWS, or any Node.js hosting service. Make sure to add the EmailJS environment variables to your hosting platform's environment settings.

## Performance Optimization

- Images are optimized using Next.js Image component
- 3D assets are lazy-loaded
- Code splitting is handled automatically by Next.js
- CSS is automatically minified in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or inquiries, please reach out through the contact form on the website or via email.

---

Built with ❤️ by Subhan Khan

