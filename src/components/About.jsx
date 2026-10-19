import { BookOpen, BarChart3, Workflow, GraduationCap } from 'lucide-react'
import { about } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const cardIcons = [BookOpen, BarChart3, Workflow, GraduationCap]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.cards.map((card, index) => {
              const Icon = cardIcons[index]
              return (
                <Reveal key={card.title} delay={index * 80}>
                  <div className="card card-hover h-full p-5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent"
                    >
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-navy">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{card.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
