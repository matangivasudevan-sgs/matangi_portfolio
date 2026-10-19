import { Landmark, Workflow, LineChart, Users } from 'lucide-react'
import { skillGroups } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const categoryIcons = [Landmark, Workflow, LineChart, Users]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills"
          subtitle="A practical toolkit spanning finance, SAP business processes, analytics, and professional management skills."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = categoryIcons[index]
            return (
              <Reveal key={group.category} delay={index * 80}>
                <article className="card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-solid text-white"
                    >
                      <Icon size={17} />
                    </span>
                    <h3 className="text-base font-semibold text-heading">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <span className="chip">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
