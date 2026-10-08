import { useState } from 'react'

function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/10 bg-paper/80 px-[5vw] py-6 font-mono text-[0.68rem] tracking-[0.02em] shadow-[0_8px_24px_rgba(24,33,29,0.06)] backdrop-blur-xl max-[720px]:relative max-[720px]:px-[6vw] max-[720px]:py-5" aria-label="Main navigation">
      <a className="flex items-center gap-[0.65rem] font-sans text-[0.8rem] font-bold tracking-[-0.03em]" href="#top" aria-label="Modou L Ceesay home">
        <span className="flex size-8 items-center justify-center rounded-full bg-ink pr-[0.12em] font-mono text-[0.55rem] tracking-[-0.12em] text-paper">MLC</span>
        <span>Modou L Ceesay</span>
      </a>
      <button
        className="hidden size-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 max-[720px]:flex"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation-links"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="relative block size-5" aria-hidden="true">
          <span className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-ink transition-transform duration-200 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'}`} />
          <span className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-ink transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-ink transition-transform duration-200 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'}`} />
        </span>
      </button>
      <div
        id="site-navigation-links"
        className={`ml-32 flex items-center gap-8 max-[720px]:absolute max-[720px]:left-0 max-[720px]:right-0 max-[720px]:top-full max-[720px]:ml-0 max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-0 max-[720px]:border-b max-[720px]:border-ink/10 max-[720px]:bg-paper max-[720px]:px-[6vw] max-[720px]:shadow-[0_12px_24px_rgba(24,33,29,0.08)] ${isMenuOpen ? 'max-[720px]:flex' : 'max-[720px]:hidden'}`}
      >
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out min-[721px]:hover:after:origin-left min-[721px]:hover:after:scale-x-100 max-[720px]:border-t max-[720px]:border-ink/10 max-[720px]:py-4" href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out min-[721px]:hover:after:origin-left min-[721px]:hover:after:scale-x-100 max-[720px]:border-t max-[720px]:border-ink/10 max-[720px]:py-4" href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out min-[721px]:hover:after:origin-left min-[721px]:hover:after:scale-x-100 max-[720px]:border-t max-[720px]:border-ink/10 max-[720px]:py-4" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a className="relative inline-block after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:ease-out min-[721px]:hover:after:origin-left min-[721px]:hover:after:scale-x-100 max-[720px]:border-t max-[720px]:border-ink/10 max-[720px]:py-4" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
      <a className="flex items-center gap-2 max-[720px]:hidden" href="#contact">
        <span className="size-[0.45rem] rounded-full bg-[#75b852]" /> Available for any developer projects
      </a>
    </nav>
  )
}

export default SiteNav