function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/10 bg-paper/80 px-[5vw] py-6 font-mono text-[0.68rem] tracking-[0.02em] shadow-[0_8px_24px_rgba(24,33,29,0.06)] backdrop-blur-xl max-[720px]:px-[6vw] max-[720px]:py-5" aria-label="Main navigation">
      <a className="flex items-center gap-[0.65rem] font-sans text-[0.8rem] font-bold tracking-[-0.03em]" href="#top" aria-label="Modou L Ceesay home">
        <span className="flex size-8 items-center justify-center rounded-full bg-ink pr-[0.12em] font-mono text-[0.55rem] tracking-[-0.12em] text-paper">MLC</span>
        <span>Modou L Ceesay</span>
      </a>
      <div className="ml-32 flex items-center gap-8 max-[720px]:ml-0 max-[720px]:gap-4">
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100" href="#work">Work</a>
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100" href="#skills">Skills</a>
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100" href="#about">About</a>
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100" href="#contact">Contact</a>
      </div>
      <a className="flex items-center gap-2 max-[720px]:hidden" href="#contact">
        <span className="size-[0.45rem] rounded-full bg-[#75b852]" /> Available for any developer projects
      </a>
    </nav>
  )
}

export default SiteNav