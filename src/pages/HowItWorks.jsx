import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

const pipelineSteps = [
  { num: '01', label: 'Targeted Ad', sub: 'Reach the right people at the right moment.' },
  { num: '02', label: 'Lead Captured', sub: 'Instantly logged into your pipeline.' },
  { num: '03', label: 'AI Follow-Up', sub: 'Automated outreach within minutes.' },
  { num: '04', label: 'Qualified', sub: 'Job type, budget & schedule confirmed.' },
  { num: '05', label: 'Appointment Booked', sub: 'Calendar filled. You show up and close.' },
]

function PipelineFlow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [lineWidth, setLineWidth] = useState(0)
  const [activeSteps, setActiveSteps] = useState(0)

  useEffect(() => {
    if (!inView) return
    // Animate line
    const lineTimer = setTimeout(() => setLineWidth(100), 200)
    // Activate steps sequentially
    const timers = pipelineSteps.map((_, i) =>
      setTimeout(() => setActiveSteps(i + 1), 600 + i * 350)
    )
    return () => {
      clearTimeout(lineTimer)
      timers.forEach(clearTimeout)
    }
  }, [inView])

  return (
    <div ref={ref} className="relative">
      {/* Desktop pipeline */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Connector line */}
        <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-border-color">
          <div
            className="h-full bg-blue transition-all duration-[2s] ease-out"
            style={{ width: `${lineWidth}%` }}
          />
        </div>

        {pipelineSteps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center relative z-10 w-1/5">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                i < activeSteps
                  ? 'bg-blue text-white pulse-glow'
                  : 'bg-dark3 text-t3 border border-border-color'
              }`}
            >
              {step.num}
            </div>
            <p className="text-t1 text-sm font-semibold mt-4 mb-1">{step.label}</p>
            <p className="text-t4 text-xs leading-relaxed max-w-[140px]">{step.sub}</p>
          </div>
        ))}
      </div>

      {/* Mobile pipeline - vertical */}
      <div className="md:hidden flex flex-col gap-6">
        {pipelineSteps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                i < activeSteps
                  ? 'bg-blue text-white pulse-glow'
                  : 'bg-dark3 text-t3 border border-border-color'
              }`}
            >
              {step.num}
            </div>
            <div>
              <p className="text-t1 text-sm font-semibold">{step.label}</p>
              <p className="text-t4 text-xs">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StepDeepDive({ stepNum, eyebrow, title, titleBlue, description, items, itemsTitle, bg }) {
  return (
    <section className={`py-20 md:py-28 ${bg}`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <ScrollReveal variant="fadeLeft">
            <div className="relative">
              <span className="text-[120px] font-extrabold text-t1/[0.04] absolute -top-8 -left-2 select-none leading-none">
                {stepNum}
              </span>
              <div className="relative z-10">
                <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  {eyebrow}
                </p>
                <h2 className="text-t1 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1] mb-5">
                  {title}
                  <br />
                  <span className="text-blue italic">{titleBlue}</span>
                </h2>
                <p className="text-t2 text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — feature list */}
          <ScrollReveal variant="fadeRight">
            <div className="bg-dark3 border border-border-color rounded-xl p-6 md:p-8">
              <p className="text-blue text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                {itemsTitle}
              </p>
              <div className="flex flex-col gap-3.5">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-blue mt-0.5 shrink-0">◆</span>
                    <p className="text-t2 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default function HowItWorks() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-dark">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              How It Works
            </p>
            <h1 className="text-t1 text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.08] mb-6">
              The complete system.
              <br />
              <span className="text-blue italic">Every step automated.</span>
            </h1>
            <p className="text-t2 text-sm md:text-base max-w-lg leading-relaxed mb-8">
              Our core service is a fully automated pipeline that takes a cold lead and turns them into a booked appointment — without any manual work from you.
            </p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3 bg-blue text-white text-sm font-semibold rounded-full hover:shadow-[0_4px_24px_rgba(0,111,255,0.35)] transition-shadow duration-200"
              >
                Get This System →
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pipeline overview */}
      <section className="py-20 md:py-28 bg-dark2">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                The Pipeline
              </p>
              <h2 className="text-t1 text-3xl md:text-4xl font-extrabold leading-[1.1]">
                Five steps.
                <br />
                <span className="text-blue">One seamless system.</span>
              </h2>
            </div>
          </ScrollReveal>
          <PipelineFlow />
        </div>
      </section>

      {/* Step deep-dives */}
      <StepDeepDive
        bg="bg-dark"
        stepNum="01"
        eyebrow="Step 01 — Awareness"
        title="Targeted"
        titleBlue="Meta Ads"
        description="We build and run hyper-targeted Meta campaigns that reach your ideal customers in your exact service area — at the moment they're actively searching. Surgical, data-driven targeting that maximises every dollar of ad spend."
        itemsTitle="What's Included"
        items={[
          'In-depth audience research and targeting setup',
          'Ad creative and copy written and designed for you',
          'Ongoing campaign management and optimisation',
          'A/B testing to continuously improve performance',
          'Lead form design, integration and testing',
        ]}
      />

      <StepDeepDive
        bg="bg-dark2"
        stepNum="02"
        eyebrow="Step 02 — Capture"
        title="Instant"
        titleBlue="Lead Capture"
        description="Every lead that comes in is captured instantly — name, number, job type — and fed directly into your CRM pipeline. No manual entry. No missed leads. Zero friction from click to contact."
        itemsTitle="What's Included"
        items={[
          'CRM system setup and full configuration',
          'Automated pipeline stages and lead tracking',
          'Real-time lead notifications to your device',
          'Lead source attribution and tracking',
          'Full pipeline dashboard and reporting',
        ]}
      />

      <StepDeepDive
        bg="bg-dark"
        stepNum="03"
        eyebrow="Step 03 — Automation"
        title="AI-Powered"
        titleBlue="Follow-Up System"
        description="The moment a lead comes in, our automated follow-up system reaches out. Fast. Right message, right channel, right time. Evenings, weekends, holidays — it never stops working."
        itemsTitle="What's Included"
        items={[
          'Instant automated outreach on lead entry',
          'Multi-channel follow-up sequence built for you',
          'Lead qualification built directly into the flow',
          '24/7 operation — zero manual effort required',
          'Ongoing sequence optimisation',
        ]}
      />

      <StepDeepDive
        bg="bg-dark2"
        stepNum="04"
        eyebrow="Step 04 — Booking"
        title="Automatic"
        titleBlue="Appointment Booking"
        description="Qualified leads get booked directly into your calendar. No back and forth. No phone tag. The system handles it end to end and sends all confirmations automatically."
        itemsTitle="What's Included"
        items={[
          'Calendar integration and booking automation',
          'Confirmation messages sent automatically',
          'Pre-appointment reminder sequence',
          'No-show reduction system',
          'Post-appointment follow-up automation',
        ]}
      />

      <StepDeepDive
        bg="bg-dark"
        stepNum="05"
        eyebrow="Step 05 — Result"
        title="You Show Up"
        titleBlue="& Close."
        description="You arrive to a pre-qualified, pre-informed prospect who already said yes to the meeting. Your only job is to show up, do what you do best, and close the job. The system handled everything else."
        itemsTitle="The Outcome"
        items={[
          'More booked jobs with significantly less effort',
          'Zero leads slipping through the cracks',
          'System runs whether you\'re working or not',
          'Predictable, scalable pipeline you can build on',
          'Full visibility into every stage of the funnel',
        ]}
      />

      {/* CTA */}
      <CTABanner
        eyebrow="Ready to Install This?"
        headlineLine1="Get the full system"
        headlineLine2="built for you."
        subline="Book a free call. We'll show you exactly what we'd build for your business."
      />
    </motion.main>
  )
}
