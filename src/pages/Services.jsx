import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import CTABanner from '../components/CTABanner'

function FeatureItem({ title, description }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-border-color last:border-b-0">
      <span className="text-blue mt-0.5 shrink-0">◆</span>
      <div>
        <p className="text-t1 text-sm font-semibold mb-1">{title}</p>
        <p className="text-t3 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function ServiceSection({ eyebrow, title, titleBlue, description, cta, ctaTo, features, bg, isFeatured }) {
  return (
    <section className={`py-20 md:py-28 ${bg}`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <ScrollReveal variant="fadeLeft">
            <div>
              {isFeatured && (
                <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-blue bg-blue-dim px-3 py-1 rounded-full mb-3">
                  ⚡ Core Offer
                </span>
              )}
              <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                {eyebrow}
              </p>
              <h2 className="text-t1 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1] mb-5">
                {title}
                <br />
                <span className="text-blue italic">{titleBlue}</span>
              </h2>
              <p className="text-t2 text-sm md:text-base leading-relaxed mb-6">
                {description}
              </p>
              <Link
                to={ctaTo}
                className="text-blue text-xs font-bold tracking-[0.15em] uppercase inline-flex items-center gap-1.5 group"
              >
                {cta}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — features */}
          <ScrollReveal variant="fadeRight">
            <div className="bg-dark3 border border-border-color rounded-xl p-6 md:p-8">
              {features.map((f, i) => (
                <FeatureItem key={i} title={f.title} description={f.description} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
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
              Our Services
            </p>
            <h1 className="text-t1 text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.08] mb-6">
              Everything your business
              <br />
              needs to <span className="text-blue italic">scale online.</span>
            </h1>
            <p className="text-t2 text-sm md:text-base max-w-lg leading-relaxed mb-8">
              We don't offer isolated services. We build interconnected systems — each one amplifying the next. From your first digital touchpoint to a fully automated growth machine.
            </p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3 bg-blue text-white text-sm font-semibold rounded-full hover:shadow-[0_4px_24px_rgba(0,111,255,0.35)] transition-shadow duration-200"
              >
                Book a Free Call →
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Sections */}
      <ServiceSection
        isFeatured
        bg="bg-dark2"
        eyebrow="AI & Automation"
        title="AI Growth Systems &"
        titleBlue="Lead Automation"
        description="Our flagship service. A fully automated pipeline that turns a cold lead into a booked appointment — without you lifting a finger. Runs 24/7."
        cta="See Full Breakdown"
        ctaTo="/how-it-works"
        features={[
          { title: 'Targeted Meta Ads', description: 'Geo-targeted campaigns reaching your ideal customers at the moment they\'re searching.' },
          { title: 'Instant Lead Capture & CRM', description: 'Every lead logged automatically. No manual entry. Full pipeline visibility.' },
          { title: 'AI-Powered Follow-Up', description: 'Automated outreach the moment a lead comes in. Right message, right time, always.' },
          { title: 'Automatic Appointment Booking', description: 'Qualified leads booked directly into your calendar. Confirmations sent automatically.' },
          { title: 'Show-Rate Maximisation', description: 'Automated reminders that dramatically reduce no-shows and keep your calendar full.' },
        ]}
      />

      <ServiceSection
        bg="bg-dark"
        eyebrow="Digital Presence"
        title="Websites &"
        titleBlue="Web Applications"
        description="Premium, conversion-focused websites and custom web applications. Fast, mobile-first and designed to turn visitors into leads."
        cta="Get a Quote"
        ctaTo="/contact"
        features={[
          { title: 'Landing Pages & Marketing Sites', description: 'Built to convert. Every element designed to turn visitors into leads.' },
          { title: 'Custom Web Applications', description: 'Full-stack web apps for businesses that need more than a brochure website.' },
          { title: 'E-Commerce Stores', description: 'Custom e-commerce builds optimised for conversion and scale.' },
          { title: 'CMS & Dashboard Builds', description: 'Custom content management and internal dashboards built around your workflow.' },
        ]}
      />

      <ServiceSection
        bg="bg-dark2"
        eyebrow="Product Development"
        title="Mobile App"
        titleBlue="Development"
        description="iOS and Android applications for businesses ready to take their product or service into the hands of their customers. From concept to launch."
        cta="Discuss Your App"
        ctaTo="/contact"
        features={[
          { title: 'iOS & Android Development', description: 'Native and cross-platform apps built for performance and user experience.' },
          { title: 'MVP Builds', description: 'Get to market fast with a focused, testable MVP that can scale.' },
          { title: 'UI/UX Design', description: 'Interfaces that feel as good as they look. Designed for retention and engagement.' },
          { title: 'App Store Launch', description: 'End-to-end support from development through to App Store submission and launch.' },
        ]}
      />

      <ServiceSection
        bg="bg-dark"
        eyebrow="Paid Acquisition"
        title="Performance"
        titleBlue="Marketing & Ads"
        description="Meta and Google ad campaigns built around your exact target audience — with systems to capture, follow up and convert every lead generated."
        cta="Start Advertising"
        ctaTo="/contact"
        features={[
          { title: 'Meta Ads (Facebook & Instagram)', description: 'Audience research, creative, campaign management and optimisation.' },
          { title: 'Google Search & Display', description: 'Capture high-intent searches at the moment people are ready to buy.' },
          { title: 'Lead Form Optimisation', description: 'Every ad connected to a high-converting lead capture system.' },
          { title: 'Performance Reporting', description: 'Clear, transparent reporting on what\'s working and where every dollar is going.' },
        ]}
      />

      {/* CTA */}
      <CTABanner
        eyebrow="Not Sure Where to Start?"
        headlineLine1="Let's figure it out"
        headlineLine2="together."
        subline="Book a free call. No pitch. Just a clear plan for your business."
      />
    </motion.main>
  )
}
