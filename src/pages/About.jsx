import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

const values = [
  {
    num: '01',
    title: 'Results over everything',
    desc: "We don't hide behind impressions, clicks or reach. If your business isn't growing, nothing we're doing matters.",
  },
  {
    num: '02',
    title: 'Systems, not services',
    desc: 'We build infrastructure that compounds. Not one-off campaigns. Not short-term fixes. Permanent, scalable systems.',
  },
  {
    num: '03',
    title: 'Radical transparency',
    desc: "You'll always know what's running, why it's running and what it's producing. No black boxes. No surprises.",
  },
  {
    num: '04',
    title: 'Speed of execution',
    desc: "Most clients are live within 7 days of signing. Time is the one thing you can't get back. We treat it accordingly.",
  },
]

const approach = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We understand your business and identify the biggest gaps. No assumptions. No cookie-cutter frameworks.',
  },
  {
    num: '02',
    title: 'Blueprint',
    desc: "We map out exactly what we'll build and what outcome to expect. You approve everything before we start.",
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We build fast. Most clients are fully live within 7 days. No endless back-and-forth. No project creep.',
  },
  {
    num: '04',
    title: 'Scale',
    desc: 'Once the system is live and producing results, we optimise and scale. Every month better than the last.',
  },
]

export default function About() {
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
              About Accentricity
            </p>
            <h1 className="text-t1 text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.08] mb-6">
              No Fluff.
              <br />
              Fully <span className="text-blue italic">results-oriented.</span>
            </h1>
            <p className="text-t2 text-sm md:text-base max-w-2xl leading-relaxed mb-8">
              We started Accentricity because we watched good businesses fail — not because of bad products, but because of broken systems. We're here to fix that.
            </p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3 bg-blue text-white text-sm font-semibold rounded-full hover:shadow-[0_4px_24px_rgba(0,111,255,0.35)] transition-shadow duration-200"
              >
                Work With Us →
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-dark2">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — manifesto */}
            <ScrollReveal variant="fadeLeft">
              <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Who We Are
              </p>
              <div className="text-t2 text-sm md:text-base leading-relaxed space-y-5">
                <p>
                  We're not a traditional marketing agency. We don't send monthly reports, manage your Instagram or run generic ad campaigns and hand you a spreadsheet at the end of the month.
                </p>
                <p>
                  <strong className="text-t1 font-semibold">We build infrastructure.</strong> Digital systems that work harder than any employee, run around the clock and compound in value over time.
                </p>
                <p>
                  Every business we work with gets a system built specifically for them — their audience, their service area, their growth goals. No templates. No copy-paste strategies.
                </p>
                <p>
                  We measure our success by one metric: <strong className="text-t1 font-semibold">your revenue.</strong> If your calendar isn't fuller after working with us, we haven't done our job.
                </p>
              </div>
            </ScrollReveal>

            {/* Right — value cards */}
            <ScrollReveal variant="fadeRight">
              <div className="flex flex-col gap-4">
                {values.map((v) => (
                  <div
                    key={v.num}
                    className="bg-dark3 border border-border-color rounded-xl p-5 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-blue text-sm font-bold bg-blue-dim w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                        {v.num}
                      </span>
                      <div>
                        <p className="text-t1 text-sm font-semibold mb-1">{v.title}</p>
                        <p className="text-t3 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — quote */}
            <ScrollReveal variant="fadeLeft">
              <h2 className="text-t1 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.15]">
                "The best businesses don't just have great products. They have{' '}
                <span className="text-blue">great systems</span> behind them."
              </h2>
            </ScrollReveal>

            {/* Right — supporting text */}
            <ScrollReveal variant="fadeRight">
              <div className="text-t2 text-sm md:text-base leading-relaxed space-y-5">
                <p>
                  That's the belief that drives everything we do at Accentricity. We've seen businesses with incredible products fail to grow — not because of the quality of their work, but because the system running behind them was broken.
                </p>
                <p>
                  Missed leads. Slow follow-up. No online presence. Manual processes that should be automated. Each one a leak. Together, they're the difference between a business that plateaus and one that scales.
                </p>
                <p>
                  We come in, identify the gaps, and build the systems that close them. That's the job.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-dark2">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="text-t1 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-12">
              Our approach.
              <br />
              <span className="text-blue italic">Simple by design.</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approach.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-dark3 border border-border-color rounded-xl p-6 h-full">
                  <span className="text-[56px] font-extrabold text-t1/[0.06] leading-none block mb-3">
                    {step.num}
                  </span>
                  <p className="text-t1 text-base font-bold mb-2">{step.title}</p>
                  <p className="text-t3 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        eyebrow="Let's Build Something Together"
        headlineLine1="We're selective."
        headlineLine2="Are you a fit?"
        subline="Book a free call. If we're not the right fit, we'll tell you honestly."
      />
    </motion.main>
  )
}
