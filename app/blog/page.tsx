import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="max-w-3xl mx-auto py-6 px-4 flex justify-between items-center">
        <nav className="flex space-x-3 sm:space-x-6">
          <Link href="/" className="font-medium dark:text-white text-gray-900 text-sm sm:text-base">
            Home
          </Link>
          <Link href="/projects" className="font-medium dark:text-white text-gray-900 text-sm sm:text-base">
            Projects
          </Link>
          <Link href="/blog" className="font-medium dark:text-white text-gray-900 text-sm sm:text-base">
            Blog
          </Link>
          <Link href="/contact" className="font-medium dark:text-white text-gray-900 text-sm sm:text-base">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-900">Blog</h1>
        </div>

        <div className="space-y-8">
          <BlogCard
            title="Embarking on My Journey in Tech Blogging"
            subtitle="A Snapshot of My Journey So Far"
            excerpt="Through this blog, I want to share my journey, experiences, and learnings in tech, hoping to inspire and connect with like-minded individuals..."
            date="Jan 25, 2025"
            readTime="2 min read"
            href="https://sahilsuman11.hashnode.dev/embarking-on-my-journey-in-tech-blogging"
          />

          <BlogCard
            title="Art of Writing Proper AI Prompts"
            subtitle="Crafting Perfect AI Prompts: Tips and Techniques for Success"
            excerpt="With the rise of AI-powered tools like ChatGPT, everyone is trying to figure out how to write the perfect AI prompt. The truth is, AI prompt engineering is still a new field, and even experts are constantly experimenting to determine what works best. Getting high-quality results from AI is not just about what you ask—it is about how you phrase it.."
            date="March 15, 2025"
            readTime="4 min read"
            href="https://sahilsuman11.hashnode.dev/crafting-perfect-ai-prompts-tips-and-techniques-for-success"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

interface BlogCardProps {
  title: string
  subtitle: string
  excerpt: string
  date: string
  readTime: string
  href: string
}

function BlogCard({ title, subtitle, excerpt, date, readTime, href }: BlogCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-white dark:bg-black">
      <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{subtitle}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>Published: {date}</span>
          <span>{readTime}</span>
        </div>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-sm"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

