"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FileText, Linkedin, Github, Twitter, BookOpen, Mail, ExternalLink, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState("Work")
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="max-w-4xl mx-auto py-6 px-4 flex justify-between items-center">
        <nav className="flex space-x-6">
          <Link href="/" className="font-medium dark:text-white">
            Home
          </Link>
          <Link href="/projects" className="font-medium dark:text-white">
            Projects
          </Link>
          <Link href="/blog" className="font-medium dark:text-white">
            Blog
          </Link>
          <Link href="/contact" className="font-medium dark:text-white">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">

        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold dark:text-white text-gray-900 font-Morandi">
              Hi Sahil here <span className="wave">👋</span>
            </h1>
            <p className="text-lg dark:text-gray-300 text-gray-700"> Full stack Software Developer from India 🇮🇳</p>
            <p className="max-w-xl font-semibold dark:text-gray-300 text-gray-700">
              I Build Scalable and Production ready Softwares. Find me on GitHub for code and LinkedIn for updates.
            </p>
            <div className="flex items-center gap-4">
              <p className="dark:text-gray-300 text-gray-700 font-semibold">
                Currently Learning <span className="font-bold">Generative AI</span> &{" "}
                <span className="font-bold">Agentic AI</span>{" "}
                <span className="rotate dark:text-gray-300 text-gray-700">❄️</span>
              </p>
              <Link
                href="https://www.linkedin.com/in/sahilsuman11/"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600/10 text-green-500 hover:bg-green-600/20 transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to work
              </Link>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Link
                href="https://drive.google.com/file/d/1qjcO-YYA0LqzHW54Ucn5n-p_yqb5IS5B/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-md hover:bg-gray-500 dark:text-white text-gray-900 transition-colors"
              >
                <FileText size={16} />
                Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/sahilsuman11/"
                className="p-2 hover:bg-gray-500 rounded-md dark:text-white text-gray-900"
                target="_blank"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com/SahilSuman1011"
                className="p-2 hover:bg-gray-500 rounded-md dark:text-white text-gray-900"
                target="_blank"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://x.com/SahilSuman1111"
                className="p-2 hover:bg-gray-500 rounded-md dark:text-white text-gray-900"
                target="_blank"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://hashnode.com/@SahilSuman11"
                className="p-2 hover:bg-gray-500 rounded-md dark:text-white text-gray-900"
                target="_blank"
              >
                <BookOpen size={20} />
              </Link>
              <Link
                href="mailto:sahilsuman1202@gmail.com"
                className="p-2 hover:bg-gray-500 rounded-md dark:text-white text-gray-900"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block  w-32 h-32 rounded-lg overflow-hidden dark:border-gray-800 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
            <div className="hidden md:block relative w-32 h-32 rounded-lg overflow-hidden dark:border-gray-800 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
              <Image
              src="/sahil img 2.jpg"
              alt="Sahil Suman"
              fill
              className="object-cover"
              />
            </div>
        </div>
        </div>
        

        <div className="mt-16">
          <div className="flex border-b border-gray-800 bg-gray-100 dark:bg-gray-900 rounded-t-md">
            <button
              className={`py-2 px-6 ${activeTab === "Work" ? "bg-white dark:bg-black text-gray-900 dark:text-white font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("Work")}
            >
              Work
            </button>
            <button
              className={`py-2 px-6 ${activeTab === "Education" ? "bg-white dark:bg-black text-gray-900 dark:text-white font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
          </div>

          <div className="py-6 bg-white dark:bg-black rounded-b-md border border-gray-200 dark:border-gray-800">
            {activeTab === "Work" ? (
              <div className="space-y-12">
                <WorkExperience
                  logo="/Screenshot 2025-03-15 173944.png"
                  company="Webstack Academy"
                  companyUrl="https://www.linkedin.com/company/webstackacademyit/"
                  role="Full stack Developer Intern"
                  period="Feb 2024 - Apr 2024"
                  responsibilities={[
                    "Led frontend development of a home-buying website using React.js, implementing user signup, search filters, property listings, and debugging.",
                    "Applied responsive design techniques with CSS, ensuring optimal usability across devices.",
                    "Integrated MongoDB for database efficiency and scalability, enhancing user data management.",
                  ]}
                  tag="Webstack Academy"
                />

                <WorkExperience
                  logo="/Screenshot 2025-03-15 174213.png"
                  company="Starplayers"
                  companyUrl="https://www.linkedin.com/company/starplayers/"
                  role="Graphic & UI/UX Design Intern"
                  period="Mar 2023 - May 2023"
                  responsibilities={[
                    "Worked with engineering and design teams to improve user interfaces using Figma and Canva.",
                    "Created social media campaigns and impactful product posts, increasing user engagement.",
                    "Designed user-friendly templates for mobile applications, optimizing performance across platforms.",
                  ]}
                  tag="Starplayers"
                />

                <WorkExperience
                  logo="/Screenshot 2025-03-15 175327.png"
                  company="Hacktoberfest"
                  companyUrl="https://www.linkedin.com/company/hacktoberfest/"
                  role="Open source Contributor"
                  period="Oct 2023 - Nov 2023"
                  responsibilities={[
                    "Contributed to HacktoberFest 2023 by writing Documentations for various Data Structures and Algorithms Topics in open-source repositories.",
                    "Improved the efficiency of Data structures solutions and helped enhance existing projects through code contributions.",
                    "Worked with global contributors, gaining experience in open-source collaboration and coding practices.",
                  ]}
                  tag="Hacktoberfest"
                />

                <WorkExperience
                  logo="/Screenshot 2025-03-15 175416.png"
                  company="Google Developer Student Club"
                  companyUrl="https://www.linkedin.com/company/google-developer-students-club-mait/"
                  role="Member"
                  period="Nov 2022 - Nov 2023"
                  responsibilities={[
                    "Participated in various workshops, hackathons, and events which helped students to learn and grow.",
                    "Created a community of 600+ students who are passionate about technology.",
                    "Collaborated with various organizations to conduct events and workshops.",
                  ]}
                  tag="Google Developer Student Club - MAIT"
                />
              </div>
            ) : (
              <div className="py-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/Screenshot 2025-03-16 121512.png"
                    alt="MAIT"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                  </div>
                  <div>
                  <h3 className="font-medium dark:text-white text-gray-900">
                    Maharaja Agrasen Institute of Technology
                  </h3>
                  <p className="text-gray-500">2021 - 2025</p>
                  <p className="mt-2 dark:text-gray-300 text-gray-700">Bachelor of Technology</p>
                  <p className="dark:text-gray-300 text-gray-700">Electrical and Electronics Engineering</p>
                  <p className="text-gray-500">New Delhi, India</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900">featured projects</h2>
            <Link
              href="/projects"
              className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              view more <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="StudyNotion - An EdTech Platform"
              description="Developed an educational platform with React and Tailwind CSS for content creation, viewing, and rating. Built a backend with Node.js and Express.js, reducing load time by 40% and improving performance. Integrated MongoDB for scalable data management and developed a RESTful API."
              techStack={["React", "Tailwind CSS", "Express", "Node.js", "MongoDB"]}
              liveLink="https://studynotion-frontend.vercel.app/"
              githubLink="https://github.com/SahilSuman1011/StudyNotion"
              image="/study.png"
            />

            <ProjectCard
              title="Promptopia- AI Prompt Sharing App"
              description="Created a full-stack AI prompt-sharing app with CRUD features and Google authentication via NextAuth. Designed a modern UI with Glassmorphism using TailwindCSS, improving user experience. Implemented tag-based filtering for better searchability and community engagement."
              techStack={["Next.js", "MongoDB", "NextAuth", "TailwindCSS"]}
              liveLink="https://promptopia-prompt-sharing-project.vercel.app/"
              githubLink="https://github.com/SahilSuman1011/Promptopia"
              image="/Promptopia.png"
            />
          </div>
        </div>

        {/* Recent Blog Posts Section */}
        <div className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900">recent posts</h2>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              view more <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard
              title="Embarking on My Journey in Tech Blogging"
              subtitle="A Snapshot of My Journey So Far"
              excerpt="Through this blog, I want to share my journey, experiences, and learnings in tech, hoping to inspire and connect with like-minded individuals..."
              date="Jan 25, 2025"
              readTime="2 min read"
              slug="Embarking on My Journey in Tech Blogging"
            />

            <BlogCard
              title="Art of Writing Proper AI Prompts"
              subtitle="Crafting Perfect AI Prompts: Tips and Techniques for Success"
              excerpt="With the rise of AI-powered tools like ChatGPT, everyone is trying to figure out how to write the perfect AI prompt. The truth is, AI prompt engineering is still a new field, and even experts are constantly experimenting to determine what works best. Getting high-quality results from AI is not just about what you ask—it is about how you phrase it.."
              date="March 15, 2025"
              readTime="4 min read"
              slug="Art of Writing Proper AI Prompts"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

interface WorkExperienceProps {
  logo: string
  company: string
  companyUrl: string
  role: string
  period: string
  responsibilities: string[]
  tag: string
}

function WorkExperience({ logo, company, companyUrl, role, period, responsibilities, tag }: WorkExperienceProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center">
          <Image
            src={logo || "/placeholder.svg"}
            alt={company}
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-gray-500 text-sm">{period}</p>
          <Link href={companyUrl} target="_blank" className="font-medium dark:text-white text-gray-900 hover:underline">
            {company}
          </Link>
          <p className="dark:text-gray-300 text-gray-700">{role}</p>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-sm dark:text-gray-300 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
            {tag}
          </span>
        </div>
      </div>
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

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  subtitle?: string
}

function BlogCard({ title, excerpt, date, readTime, slug, subtitle }: BlogCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{title}</h3>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 mb-2">{subtitle}</p>}
      <p className="text-gray-700 dark:text-gray-300 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Published: {date}</span>
          <span>{readTime}</span>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

