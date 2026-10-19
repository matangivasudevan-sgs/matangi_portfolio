import { GraduationCap, HeartHandshake, Leaf, Users, CalendarDays } from 'lucide-react'
import { roles } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const typeIcons = {
  Academic: GraduationCap,
  Volunteer: HeartHandshake,
  Leadership: Users,
  Sustainability: Leaf,
}

export default function Roles() {
  return (
    <section id="roles" aria-labelledby="roles-heading" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Roles & Responsibilities"
          title="Leadership & Campus Roles"
          subtitle="Responsibilities carried through student leadership and campus service roles."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {roles.map((item, index) => {
            const Icon = typeIcons[item.type] ?? Users

            return (
              <Reveal key={item.role} delay={index * 100} className="h-full">
                <li className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-start gap-3.5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-text"
                    >
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-heading">{item.role}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-muted">{item.organization}</p>
                      {item.duration && (
                        <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted">
                          <CalendarDays size={12} aria-hidden="true" className="text-accent-text" />
                          {item.duration}
                        </p>
                      )}
                    </div>
                    <span className="ml-auto w-fit shrink-0 rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted ring-1 ring-line">
                      {item.type}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
