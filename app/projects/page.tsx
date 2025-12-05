import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="max-w-4xl mx-auto py-6 px-4 flex justify-between items-center">
        <nav className="flex space-x-6">
          <Link href="/" className="font-medium dark:text-white text-gray-900">
            Home
          </Link>
          <Link href="/projects" className="font-medium dark:text-white text-gray-900">
            Projects
          </Link>
          <Link href="/blog" className="font-medium dark:text-white text-gray-900">
            Blog
          </Link>
          <Link href="/contact" className="font-medium dark:text-white text-gray-900">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold dark:text-white text-gray-900">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Toolie AI – AI Productivity Suite"
            description="A Scalable PERN-based AI tools platform with Clerk Auth & secure REST APIs. Improved UI load time by 25% using React.memo, lazy loading, and optimized SQL queries for faster response."
            techStack={["React", "Tailwind CSS", "Express", "Node.js", "PostgreSQL", "Gemini API"]}
            liveLink="https://toolie-ai.vercel.app/"
            githubLink="https://github.com/SahilSuman1011/Toolie-AI"
            image="/tool.png"
          />

          <ProjectCard
            title="Synapse AI — Agent-Fabric Automation Framework"
            description="A Modular AI Agent Framework enabling task orchestration across multiple AI agents using event-driven architecture. Implemented secure REST APIs, agent pipelines, and webhook-based communication for seamless cross-agent coordination."
            techStack={["Langchain", "LangGraph", "Python", "FastAPI", "Pydantic"]}
            liveLink="https://github.com/SahilSuman1011/Synapse-Agent-Fabric-Framework"
            githubLink="https://github.com/SahilSuman1011/Synapse-Agent-Fabric-Framework"
            image="/syn.png"
          />

          <ProjectCard
            title="Real-Time Order Management System"
            description="An Event-driven architecture using PostgreSQL NOTIFY/LISTEN + Socket.io for real-time updates. Containerized with Docker Compose for consistent staging/production deployments."
            techStack={["Node.js", "Express" , "HTML/CSS/JS", "Socket.io", "PostgreSQL"]}
            liveLink="https://github.com/SahilSuman1011/real-time-Order-Updates"
            githubLink="https://github.com/SahilSuman1011/real-time-Order-Updates"
            image="/RO.png"
          />

            <ProjectCard
            title="Promptopia - AI Prompt Sharing Platform"
            description="A Full-stack AI prompt-sharing Platform with CRUD features and Google authentication via NextAuth. Designed a modern UI with Glassmorphism using TailwindCSS, improving user experience. Implemented tag-based filtering for better searchability and community engagement."
            techStack={["Next.js", "MongoDB", "NextAuth", "TailwindCSS"]}
            liveLink="https://promptopia-prompt-sharing-project.vercel.app/"
            githubLink="https://github.com/SahilSuman1011/Promptopia"
            image="/Promptopia.png"
          />

          <ProjectCard
            title="Expentracker - Expense Tracker Platform"
            description="A Full-stack full-featured expense management system with Supabase auth, reusable React components, and optimized chart rendering."
            techStack={["Typescript", "React.js", "PostgreSQL", "Supabase"]}
            liveLink="https://expense-tracker-freee.netlify.app/"
            githubLink="https://github.com/SahilSuman1011/Expense-Tracker"
            image="/expen.png"
          />

          <ProjectCard
            title="StudyNotion - An EdTech Platform"
            description="Developed an educational platform with React and Tailwind CSS for content creation, viewing, and rating. Built a backend with Node.js and Express.js, reducing load time by 40% and improving performance. Integrated MongoDB for scalable data management and developed a RESTful API."
            techStack={["React", "Tailwind CSS", "Express", "Node.js", "MongoDB"]}
            liveLink="https://studynotion-frontend.vercel.app/"
            githubLink="https://github.com/SahilSuman1011/StudyNotion"
            image="/study.png"
          />

          <ProjectCard
            title="Cineseek - Movie Finder App"
            description="Built Movie Finder App with Extensive Search using Expo, TypeScript, and Tailwind CSS, this app fetches movies and creates a popularity algorithm using Appwrite. It provides users with a seamless browsing experience, ranking movies based on various engagement metrics."
            techStack={["React Native", "Typescript","Expo", "Tailwind CSS", "Appwrite"]}
            liveLink="https://drive.google.com/file/d/1TLOhY16S1RSPNzKuJdbic_8BOoo6k-AS/view?usp=drive_link"
            githubLink="https://github.com/SahilSuman1011/CineSeek"
            image="/cine.png"
          />

          <ProjectCard
            title="LMS - Lead Management System"
            description="Created a streamlined frontend application for sales teams to manage leads, track calls, and update student statuses with an intuitive interface that supports the complete lead conversion workflow."
            techStack={["react.js", "JWT", "shadcn", "TailwindCSS"]}
            liveLink="https://lms-project-done.vercel.app/"
            githubLink="https://github.com/SahilSuman1011/LMSdemo"
            image="/lms.png"
          />

          <ProjectCard
            title="AutoComm - Community Engagement Platform"
            description="Built a community platform using Kestra workflows for reporting issues, polls, and real-time updates. Developed a dashboard to track engagement metrics, enhancing accountability. Automated issue routing, notifications, and polling analysis for efficiency."
            techStack={["Next.js", "MongoDB", "Kestra", "Clerk"]}
            liveLink="https://kestra-autocomm.vercel.app/"
            githubLink="https://github.com/SahilSuman1011/kestra-hackfrost-24"
            image="/kestra.png"
          />

          <ProjectCard
            title="Polygon Mapper App"
            description="An Interactive mapping application using React 18, OpenLayers, and Tailwind CSS, enabling users to create, edit, and delete polygons with an intuitive UI."
            techStack={["React.js", "OpenLayers", "React Router", "TailwindCSS"]}
            liveLink="https://polygon-mapper-main.vercel.app/"
            githubLink="https://github.com/SahilSuman1011/Polygon-mapper-main"
            image="/polygon.png"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  liveLink: string
  githubLink: string
  image: string
}

function ProjectCard({ title, description, techStack, liveLink, githubLink, image }: ProjectCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px]">
      <div className="bg-white dark:bg-black rounded-lg overflow-hidden h-full">
        <div className="relative h-48 w-full bg-gray-200">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Link
              href={liveLink}
              target="_blank"
              className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
            <Link
              href={githubLink}
              target="_blank"
              className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:underline"
            >
              <Github size={16} />
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

