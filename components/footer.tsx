import Link from "next/link"
import { Github, Linkedin,Twitter, Mail, BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black py-6">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="text-gray-400 text-sm">
          © 2025 sahilsuman.tech |{" "}
          <Link href="/privacy" className="hover:text-white">
            privacy?
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/sahilsuman11/"
            className="text-gray-400 hover:text-white"
            target="_blank"
          >
            <Linkedin size={20} />
          </Link>
          <Link href="https://github.com/SahilSuman1011" className="text-gray-400 hover:text-white" target="_blank">
            <Github size={20} />
          </Link>
          <Link href="https://x.com/SahilSuman1111" className="text-gray-400 hover:text-white" target="_blank">
            <Twitter size={20} />
          </Link>
          <Link href="https://hashnode.com/@SahilSuman11" className="text-gray-400 hover:text-white" target="_blank">
            <BookOpen size={20} />
          </Link>
          <Link href="mailto:sahilsuman1202@gmail.com" className="text-gray-400 hover:text-white">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

