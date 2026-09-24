import ArrowUpRight from '../UI/ArrowUpRight'

function ContactSection() {
  return (
    <footer className="grid grid-cols-[1.1fr_0.9fr] gap-[8vw] bg-acid px-[5vw] pb-8 pt-24 max-[720px]:grid-cols-1 max-[720px]:gap-24 max-[720px]:px-[6vw] max-[720px]:pb-6 max-[720px]:pt-16" id="contact">
      <div>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.02em]">Have a good one?</span>
        <h2 className="mt-16 text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.08em] max-[720px]:mt-12">Let&apos;s make<br /><em className="font-serif font-semibold tracking-[-0.06em]">something real.</em></h2>
      </div>
      <div className="self-end">
        <a className="inline-flex border-b border-ink pb-[0.7rem] font-serif text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-[-0.05em] transition-opacity duration-200 hover:opacity-55" href="mailto:ceesaymodoulamin201@gmail.com">ceesaymodoulamin201@gmail.com <ArrowUpRight /></a>
        <div className="mt-32 flex items-end justify-between gap-6 font-mono text-[0.65rem] uppercase tracking-[0.02em] max-[720px]:mt-20 max-[720px]:gap-[0.7rem]">
          <div className="flex flex-wrap gap-x-6 gap-y-4" aria-label="Social links">
            <a className="inline-flex transition-opacity duration-200 hover:opacity-55" href="https://www.instagram.com/kingslayerpog/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a>
            <a className="inline-flex transition-opacity duration-200 hover:opacity-55" href="https://www.linkedin.com/in/modou-l-ceesay-mav" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
            <a className="inline-flex transition-opacity duration-200 hover:opacity-55" href="https://www.facebook.com/profile.php?id=100089493054347" target="_blank" rel="noreferrer">Facebook <ArrowUpRight /></a>
          </div>
          <span>© 2026 Modou L Ceesay</span>
        </div>
      </div>
    </footer>
  )
}

export default ContactSection