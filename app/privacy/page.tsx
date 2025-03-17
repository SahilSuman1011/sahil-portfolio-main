import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function Privacy() {
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
        <article className="prose dark:prose-invert max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: Nov 2024</p>

          <h2>Hey, Welcome!</h2>
          <p>
            Thanks for stopping by! This Privacy Policy is just here to let you know how things work around here. My
            website is mainly about showcasing my work, and I&apos;m all about respecting your privacy.
          </p>

          <h2>What Information I Collect (Hint: Not Much)</h2>
          <p>
            Honestly, this is just a static portfolio site, so I don&apos;t actively collect any personal information.
            There&apos;s no account creation, no tracking cookies, and definitely no sneaky data gathering.
          </p>

          <h2>Contact Info</h2>
          <p>
            If you reach out via email or the contact form, the info you provide is entirely up to you. I&apos;ll only use it
            to reply and have a conversation with you—no funny business.
          </p>

          <h2>How I Use the Info</h2>
          <p>Here&apos;s what I might do with any information I collect:</p>
          <ul>
            <li>Make sure the site is running smoothly</li>
            <li>Improve the website based on feedback you might share</li>
            <li>Respond to your questions or feedback</li>
          </ul>

          <h2>Sharing Your Info (Spoiler: I Don&apos;t)</h2>
          <p>
            I don&apos;t sell, trade, or rent your personal info. If you shared something sensitive by accident, feel free to
            reach out, and I&apos;ll help you remove it.
          </p>

          <h2>Security (The Internet Isn&apos;t Perfect)</h2>
          <p>
            I&apos;ll do my best to keep any info you share safe, but let&apos;s be real—no system is foolproof. While I&apos;ll take
            reasonable steps to protect your info, I can&apos;t promise 100% security.
          </p>

          <h2>Policy Updates (No Surprises)</h2>
          <p>
            This policy is current as of Nov 2024. If I make any changes, I&apos;ll update it here, so you&apos;re always in the
            loop. Feel free to check back occasionally, but don&apos;t worry—I&apos;m not making any big changes without letting
            you know.
          </p>

          <h2>Got Questions?</h2>
          <p>
            If you have any questions, concerns, or just want to say hi, drop me an email at{" "}
            <Link href="mailto:sahilsuman1202@gmail.com">sahilsuman1202@gmail.com</Link> or use the contact form. I&apos;d
            love to hear from you!
          </p>
        </article>
      </main>

      <Footer />
    </div>
  )
}

