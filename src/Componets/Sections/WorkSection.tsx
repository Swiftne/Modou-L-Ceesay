import { projects } from '../../Data/projects'
import ArrowUpRight from '../UI/ArrowUpRight'

function WorkSection() {
  const toneClasses = {
    'project-sage': 'bg-[#9bb8a0] text-[#193c2b]',
    'project-coral': 'bg-[#ee765e] text-[#4a201b]',
    'project-blue': 'bg-[#a6bed2] text-[#183048]',
  } as const

  return (
    <section className="bg-ink px-[5vw] pb-28 pt-24 text-paper max-[720px]:px-[6vw] max-[720px]:pb-16 max-[720px]:pt-16" id="work">
      <div className="flex justify-between border-b border-paper/25 pb-5 font-mono text-[0.65rem] uppercase tracking-[0.02em]">
        <span>Selected work</span>
        <span>(03 — 06)</span>
      </div>
      <div>
        {projects.map((project) => (
          <article className="grid grid-cols-[38%_1fr] gap-[5vw] border-b border-paper/25 py-10 max-[720px]:grid-cols-1 max-[720px]:gap-6 max-[720px]:py-8" key={project.number}>
            <div className={`relative aspect-[1.35] overflow-hidden max-[720px]:aspect-[1.25] ${toneClasses[project.tone as keyof typeof toneClasses]}`}>
              {project.image ? (
                <img className="absolute inset-0 size-full object-cover" src={project.image} alt={`${project.title} project preview`} />
              ) : (
                <>
                  <span className="absolute left-[8%] top-[9%] z-[2] font-serif text-[clamp(2rem,4vw,4.5rem)] tracking-[-0.08em]">{project.title}</span>
                  <span className="absolute left-[26%] top-[22%] h-[80%] w-[32%] rotate-[-25deg] rounded-[50%] border border-current" />
                  <span className="absolute left-[49%] top-[39%] h-[26%] w-[26%] rounded-[50%] border border-current" />
                  <span className="absolute bottom-[8%] right-[10%] text-[3.5rem]">✳</span>
                </>
              )}
            </div>
            <div className="self-end">
              <div className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.02em]">{project.number}</span>
                <h2 className="text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.07em]">{project.title}</h2>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.02em]">{project.year}</span>
              </div>
              <div className="mt-8 grid grid-cols-[1fr_2fr_auto] items-start gap-5 border-t border-paper/25 pt-4 font-mono text-[0.68rem] uppercase leading-[1.45] max-[720px]:grid-cols-[1fr_auto]">
                <span>{project.type}</span>
                <p className="max-w-80 normal-case max-[720px]:col-span-full max-[720px]:row-start-2">{project.description}</p>
                <a className="text-[1.4rem] max-[720px]:col-start-2 max-[720px]:row-start-1" href={project.url ?? '#contact'} target={project.url ? '_blank' : undefined} rel={project.url ? 'noreferrer' : undefined} aria-label={project.url ? `Open ${project.title} project` : `Learn more about ${project.title}`}><ArrowUpRight /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkSection