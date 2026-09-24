import ArrowUpRight from '../UI/ArrowUpRight'

function AboutSection() {
  return (
    <section className="px-[5vw] pb-32 pt-28 max-[720px]:px-[6vw] max-[720px]:pb-20 max-[720px]:pt-20" id="about">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.02em]">A little context</span>
      <div className="mt-20 grid grid-cols-[1.1fr_0.7fr] gap-[8vw] max-[720px]:mt-12 max-[720px]:grid-cols-1 max-[720px]:gap-12">
        <h2 className="text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.08em]">Good work starts with<br /><em className="font-serif font-semibold tracking-[-0.06em]">good questions.</em></h2>
        <div className="border-l border-ink/20 pl-6">
          <p className="text-[0.95rem] leading-[1.55]">My name is Modou L Ceesay, a developer who likes turning complicated ideas into clear, characterful experiences.</p>
          <p className="mt-4 text-[0.95rem] leading-[1.55]">I currently study the art of web development and critical structural architecture with the help of AI Agents at Jasseh Code Camp(JCC).</p>
          <p className="mt-4 text-[0.95rem] leading-[1.55]">My practice moves between brand, interface, and the details that make something feel unmistakably itself.</p>
          <a className="mt-8 inline-flex font-mono text-[0.66rem] uppercase transition-opacity duration-200 hover:opacity-55" href="#contact">More about me <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection