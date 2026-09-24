const tools = [
  { name: 'React', detail: 'Interfaces', mark: '⚛', tone: 'bg-[#d9eff2] text-[#17636b]' },
  { name: 'TypeScript', detail: 'Typed systems', mark: 'TS', tone: 'bg-[#b8d4ef] text-[#1e4f83]' },
  { name: 'Tailwind', detail: 'UI language', mark: 'TW', tone: 'bg-[#b9eee5] text-[#146b65]' },
  { name: 'Vite', detail: 'Build tools', mark: 'V', tone: 'bg-[#f1d3f5] text-[#7b337f]' },
  { name: 'HTML', detail: 'Structure', mark: '5', tone: 'bg-[#f5c5a4] text-[#8a3c1c]' },
  { name: 'JavaScript', detail: 'Interaction', mark: 'JS', tone: 'bg-[#f3e08c] text-[#725a0d]' },
  { name: 'Python', detail: 'Automation', mark: 'Py', tone: 'bg-[#c6dcae] text-[#3c642b]' },
] as const

function SkillsSection() {
  return (
    <section className="border-b border-ink/15 px-[5vw] py-24 max-[720px]:px-[6vw] max-[720px]:py-16" id="skills">
      <div className="flex items-end justify-between gap-8 border-b border-ink/20 pb-5 max-[720px]:items-start max-[720px]:flex-col max-[720px]:gap-4">
        <div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.02em]">Tools I work with</span>
          <h2 className="mt-8 max-w-3xl text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.08em]">A practical stack<br /><em className="font-serif font-semibold tracking-[-0.06em]">for curious work.</em></h2>
        </div>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.02em]">(07 tools)</span>
      </div>
      <div className="grid grid-cols-4 gap-3 pt-8 max-[900px]:grid-cols-3 max-[720px]:grid-cols-2">
        {tools.map((tool) => (
          <div className={`group flex min-h-36 flex-col justify-between p-5 transition-transform duration-300 hover:-translate-y-1 max-[720px]:min-h-32 max-[720px]:p-4 ${tool.tone}`} key={tool.name}>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.02em]">{tool.detail}</span>
            <div className="flex items-end justify-between gap-3">
              <h3 className="text-[clamp(1.35rem,2.4vw,2.5rem)] font-semibold leading-none tracking-[-0.07em]">{tool.name}</h3>
              <span className="font-serif text-2xl italic leading-none opacity-70" aria-hidden="true">{tool.mark}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
