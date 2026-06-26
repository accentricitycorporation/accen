import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import WhatsAppBlock from '../components/WhatsAppBlock'
import CTABanner from '../components/CTABanner'

/* ─── Hero word-by-word animation ─── */
function AnimatedHeadline() {
  const line1 = ['Wee', 'build', 'the', 'systems', 'that']
  const line2 = ['scale', 'businesses']
  const line3 = ['online.']

  let wordIndex = 0
  const renderWord = (word, isBlue = false) => {
    const i = wordIndex++
    return (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 + i * 0.08 }}
        className={`inline-block mr-[0.3em] ${isBlue ? 'text-blue' : 'text-t1'}`}
      >
        {word}
      </motion.span>
    )
  }

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.08] tracking-tight text-center">
      <span className="block">
        {line1.map((w) => renderWord(w))}
      </span>
      <span className="block">
        {/* "that" already in line1 */}
        {line2.map((w) => renderWord(w, true))}
      </span>
      <span className="block text-t3">
        {line3.map((w) => renderWord(w))}
      </span>
    </h1>
  )
}

/* ─── Typewriter subline ─── */
function TypewriterSubline() {
  const text = 'We architect everything a modern business needs to grow online — predictably and at scale.'
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, 22)
    return () => clearInterval(interval)
  }, [started])

  return (
    <p className="text-t2 text-sm md:text-base lg:text-lg text-center max-w-xl mx-auto min-h-[3em]">
      {displayed.split('everything').map((part, i) =>
        i === 0 ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i}>
            <strong className="text-t1 font-semibold">everything</strong>
            {part.split('needs').map((p2, j) =>
              j === 0 ? (
                <span key={j}>{p2}</span>
              ) : (
                <span key={j}>
                  <strong className="text-t1 font-semibold">needs</strong>
                  {p2}
                </span>
              )
            )}
          </span>
        )
      )}
      <span className="animate-pulse">|</span>
    </p>
  )
}

/* ─── Count-up number ─── */
function CountUp({ target, suffix = '', prefix = '', duration = 1600 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  )
}

/* ─── Proof Ticker ─── */
const tickerItems = [
  'WEB DEVELOPMENT', 'MOBILE APPS', 'META ADS', 'AI AUTOMATION',
  'CRM SYSTEMS', 'LEAD GENERATION', 'GROWTH STRATEGY',
]

function ProofTicker() {
  return (
    <div className="relative overflow-hidden border-t border-b border-border-color py-4 md:py-5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />
      <div className="ticker-track flex items-center whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span
            key={i}
            className="text-t3 text-xs font-semibold tracking-[0.2em] uppercase mx-8 md:mx-12"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Service Card ─── */
function ServiceCard({ eyebrow, title, description, to, isFeatured }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, borderColor: 'rgba(0,111,255,0.25)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-xl border border-border-color bg-dark2 p-6 md:p-7 group ${
        isFeatured ? 'border-t-2 border-t-blue' : ''
      }`}
    >
      {/* Mouse follow glow */}
      <div
        className="absolute w-48 h-48 rounded-full bg-blue/5 blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ left: mousePos.x - 96, top: mousePos.y - 96 }}
      />

      {/* Top border hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="relative z-10">
        {isFeatured && (
          <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-blue bg-blue-dim px-3 py-1 rounded-full mb-3">
            ⚡ Core Offer
          </span>
        )}
        <p className="text-blue text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
          {eyebrow}
        </p>
        <h3 className="text-t1 text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-t3 text-sm leading-relaxed mb-4">{description}</p>
        <Link
          to={to}
          className="text-blue text-xs font-bold tracking-[0.15em] uppercase inline-flex items-center gap-1.5 group/link"
        >
          {isFeatured ? 'See How It Works' : 'Learn More'}
          <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  )
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ quote, boldPart, name, role, avatar }) {
  return (
    <div className="bg-dark2 border border-border-color rounded-xl p-6 md:p-7">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-blue text-sm">★</span>
        ))}
      </div>
      <p className="text-t2 text-sm leading-relaxed mb-5">
        "{quote.split(boldPart)[0]}
        <strong className="text-t1 font-semibold">{boldPart}</strong>
        {quote.split(boldPart)[1]}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-dark3 border border-border-color flex items-center justify-center text-t3 text-xs font-bold">
          {avatar}
        </div>
        <div>
          <p className="text-t1 text-sm font-semibold">{name}</p>
          <p className="text-t4 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-dark">
          <div className="absolute inset-0 hero-grid" />
          <div className="hero-glow-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue/20 rounded-full blur-[120px]" />
          <div className="hero-glow-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-20 text-center py-20 md:py-28">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-border bg-blue-dim text-blue text-xs font-semibold tracking-[0.15em] uppercase">
              ⚡ AI-Powered Growth Systems
            </span>
          </motion.div>

          {/* Headline */}
          <AnimatedHeadline />

          {/* Typewriter subline */}
          <div className="mt-6 mb-8">
            <TypewriterSubline />
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-blue text-white text-sm font-semibold rounded-full hover:shadow-[0_4px_24px_rgba(0,111,255,0.35)] transition-shadow duration-200"
              >
                Book a Free Call →
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/how-it-works"
                className="inline-flex items-center px-8 py-3.5 border border-[#333] text-t2 text-sm font-semibold rounded-full hover:border-t3 hover:text-t1 transition-all duration-200"
              >
                See How It Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex items-center justify-center gap-8 md:gap-16"
          >
            {[
              { value: '8+', label: 'Service capabilities' },
              { value: '24/7', label: 'Systems run without you.' },
              { value: '100%', label: 'Results-oriented, always.' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-t1 text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-t4 text-[10px] md:text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROOF TICKER ─── */}
      <ProofTicker />

      {/* ─── PROBLEM SECTION ─── */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <ScrollReveal variant="fadeLeft">
              <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                The Problem We Solve
              </p>
              <h2 className="text-t1 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-6">
                Most businesses have potential.
                <br />
                Few have the{' '}
                <span className="text-blue">systems</span> to unlock it.
              </h2>
              <p className="text-t2 text-sm md:text-base leading-relaxed mb-4">
                A great product means nothing if the digital infrastructure around it is broken — slow follow-up, missed leads, no online presence, inefficient processes.
              </p>
              <p className="text-t2 text-sm md:text-base leading-relaxed mb-8">
                We come in, audit everything, and build the systems that turn that potential into predictable, scalable revenue.
              </p>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center px-7 py-3 bg-blue text-white text-sm font-semibold rounded-full hover:shadow-[0_4px_24px_rgba(0,111,255,0.35)] transition-shadow duration-200"
                >
                  See What We Build
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Right — stat cards */}
            <ScrollReveal variant="fadeRight">
              <div className="flex flex-col gap-4">
                {[
                  { value: '82%', desc: 'of businesses have no automated follow-up system' },
                  { value: '4hrs', desc: 'average response time for inbound leads' },
                  { value: '67%', desc: 'of websites fail to convert visitors into leads' },
                  { value: '$10k+', desc: 'average monthly revenue lost to system gaps' },
                ].map((stat) => (
                  <motion.div
                    key={stat.value}
                    whileHover={{ x: 6, borderLeftColor: '#006FFF' }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-5 p-5 rounded-lg bg-dark2 border border-border-color border-l-2 border-l-transparent group"
                  >
                    <span className="text-blue text-2xl md:text-3xl font-extrabold shrink-0 w-20 text-right">
                      {stat.value}
                    </span>
                    <span className="text-t2 text-sm">{stat.desc}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILD ─── */}
      <section className="py-20 md:py-28 bg-dark2">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-t1 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-12">
              Full-stack growth.
              <br />
              <span className="text-blue">Every layer.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScrollReveal delay={0}>
              <ServiceCard
                isFeatured
                eyebrow="Core Offer"
                title="AI Growth Systems"
                description="A fully automated pipeline from targeted ad to booked appointment. Runs 24/7 without you."
                to="/how-it-works"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ServiceCard
                eyebrow="Digital Presence"
                title="Websites & Web Applications"
                description="Premium, conversion-focused websites and custom web apps built to perform — not just look good."
                to="/services"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ServiceCard
                eyebrow="Acquisition"
                title="Paid Ads & Performance Marketing"
                description="Meta and Google campaigns built around your target audience, with systems to capture and convert every lead."
                to="/services"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <ServiceCard
                eyebrow="Infrastructure"
                title="CRM & Business Automation"
                description="Full CRM setup, pipeline automation and workflow systems that remove manual work from your operations."
                to="/services"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <ServiceCard
                eyebrow="Product"
                title="Mobile App Development"
                description="iOS and Android apps built for businesses ready to take their product or service to the next level."
                to="/services"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <ServiceCard
                eyebrow="Strategy"
                title="Growth Strategy & Consulting"
                description="We map out your full digital growth roadmap — identifying gaps, prioritising systems, and building the plan."
                to="/services"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20 text-center">
          <ScrollReveal>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Results We Drive
            </p>
            <h2 className="text-t1 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-16">
              Numbers that
              <br />
              <span className="text-blue">actually matter.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: 78, suffix: '%', label: 'of customers hire the first business that responds to them' },
              { value: 1, prefix: '<', suffix: 'min', label: 'average follow-up time with our automation systems installed' },
              { value: 3, suffix: '×', label: 'average increase in lead-to-appointment conversion rate' },
              { value: 7, suffix: 'days', label: 'average time from signing to full system being live' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div>
                  <p className="text-blue text-4xl md:text-5xl lg:text-[56px] font-extrabold italic">
                    <CountUp target={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix} />
                  </p>
                  <p className="text-t3 text-xs md:text-sm mt-3 leading-relaxed">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 bg-dark2">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              What Clients Say
            </p>
            <h2 className="text-t1 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-12">
              The proof is in
              <br />
              <span className="text-blue">the results.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScrollReveal delay={0}>
              <TestimonialCard
                quote="Before Accentricity we were losing leads every weekend. Now our system follows up instantly — we woke up Monday to 6 booked appointments we didn't even know about."
                boldPart="we woke up Monday to 6 booked appointments"
                name="Marcus B."
                role="Owner — Greenline Landscaping, Texas"
                avatar="MB"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <TestimonialCard
                quote="Our lead-to-appointment rate went from 20% to over 60% in the first month. The system does everything — I haven't manually followed up with a lead in weeks."
                boldPart="The system does everything"
                name="James T."
                role="Owner — TriPlex Cool Zone, Florida"
                avatar="JT"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TestimonialCard
                quote="Same ad budget, triple the booked jobs. Accentricity rebuilt everything — the website, the ads, the follow-up. It paid for itself in week one."
                boldPart="triple the booked jobs."
                name="Derek K."
                role="Owner — Solar Outdoor Services, Georgia"
                avatar="DK"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── WHATSAPP ─── */}
      <WhatsAppBlock />

      {/* ─── CTA BANNER ─── */}
      <CTABanner
        eyebrow="LET'S BUILD SOMETHING"
        headlineLine1="Ready to scale"
        headlineLine2="your business?"
        subline="Book a free call. We'll map out exactly what your business needs."
        showSecondary
        secondaryLabel="See Our Services"
        secondaryTo="/services"
      />
    </motion.main>
  )
}
