import { Mail, Linkedin, Download, Send } from 'lucide-react'
import { contact, profile, RESUME_URL } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contact" title={contact.heading} subtitle={contact.text} />

        <Reveal delay={120}>
          <div className="card mt-12 p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="card card-hover group flex items-center gap-4 p-4"
                  aria-label={`Send an email to ${profile.email}`}
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-text"
                  >
                    <Mail size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-heading group-hover:text-accent-text">
                      {profile.email}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex items-center gap-4 p-4"
                  aria-label="Open Matangi V's LinkedIn profile in a new tab"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-text"
                  >
                    <Linkedin size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                      LinkedIn
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-heading group-hover:text-accent-text">
                      linkedin.com/in/matangi-v-672a7b2a3
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-line pt-8">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Send size={15} aria-hidden="true" />
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Matangi V's LinkedIn profile in a new tab"
                className="btn btn-outline"
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn Profile
              </a>
              <a
                href={RESUME_URL}
                download
                aria-label="Download Matangi V's resume as a PDF"
                className="btn btn-outline"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
