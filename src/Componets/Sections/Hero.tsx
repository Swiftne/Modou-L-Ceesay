import ArrowUpRight from '../UI/ArrowUpRight'

function Hero() {
  return (
    <section className="min-h-[78vh] px-[5vw] pb-[2.2rem] pt-[9vh] max-[720px]:min-h-[80vh] max-[720px]:px-[6vw] max-[720px]:pb-8 max-[720px]:pt-[8vh]" id="top">
      <div className="reveal font-mono text-[0.65rem] uppercase tracking-[0.02em]"><span className="mr-[0.8rem] inline-block h-px w-[2.4rem] bg-ink align-middle" /> Independent architectural developer</div>
      <div className="mt-[8vh] grid grid-cols-[minmax(0,1fr)_minmax(14rem,22rem)] items-end gap-[5vw] max-[720px]:mt-24 max-[720px]:grid-cols-1 max-[720px]:gap-12">
        <h1 className="reveal reveal-delay-1 text-[clamp(4.1rem,10.5vw,10.5rem)] font-semibold leading-[0.86] tracking-[-0.08em] max-[720px]:text-[clamp(3.8rem,17vw,7rem)]">Digital work<br /><em className="font-serif font-semibold tracking-[-0.06em]">with a pulse.</em></h1>
        <div className="reveal reveal-delay-2 max-w-[19rem] border-l border-ink/20 pl-[1.4rem] max-[720px]:max-w-[22rem]">
          <p className="text-[0.95rem] leading-[1.55]">I make thoughtful identities and useful digital experiences for people building something worth remembering.</p>
          <a className="mt-8 inline-flex font-mono text-[0.66rem] uppercase transition-opacity duration-200 hover:opacity-55" href="#work">See selected work <ArrowUpRight /></a>
        </div>
      </div>
      <div className="reveal reveal-delay-3 mt-[15vh] flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.02em] max-[720px]:mt-32 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-[1.4rem]">
        <span>Based in The Gambia / working everywhere</span>
        <span className="flex items-center gap-[0.9rem]">Scroll to explore <span className="inline-block h-px w-12 bg-ink" /></span>
      </div>
    </section>
  )
}

export default Hero