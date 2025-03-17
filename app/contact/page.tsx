import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import { Phone, Send } from "lucide-react"

export default function Contact() {
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
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold dark:text-white mb-4">Work with me</h1>
            <p className="text-lg dark:text-gray-300">
              I&apos;m currently available for <span className="font-medium">freelance work</span>. I&apos;m also open to{" "}
              <span className="font-medium">full-time opportunities</span>.
            </p>
            <p className="text-lg dark:text-gray-300 mt-2">
              You can reach out to me at{" "}
              <Link href="mailto:sahilsuman1202@gmail.com" className="text-blue-500 hover:underline">
                sahilsuman1202@gmail.com
              </Link>{" "}
              or by using the form below.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" id="privacy" className="rounded" />
              <label htmlFor="privacy">
                By submitting this form, I agree to the{" "}
                <Link href="/privacy" className="text-blue-500 hover:underline">
                  privacy policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-white text-black dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="pt-8">
            <p className="text-lg dark:text-white mb-4">
              If you are interested in working with me, please schedule a meeting with me using the calendar below or you can connect with me 
              through Whatsapp as well.
            </p>
            <Link
            href="https://cal.com/sahil-suman"
            className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
              Book a Call
            </Link>
          </div>

          <div className="pt-8">
            <Link
              href="https://wa.me/918368413415"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Phone size={20} />
              Message on WhatsApp
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

