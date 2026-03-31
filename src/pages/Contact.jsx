import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import WhatsAppBlock from '../components/WhatsAppBlock'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessType: '',
    revenue: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Contact Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-dark">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <ScrollReveal variant="fadeLeft">
              <p className="text-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Contact
              </p>
              <h1 className="text-t1 text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] mb-6">
                Let's build your
                <br />
                <span className="text-blue italic">growth system.</span>
              </h1>
              <p className="text-t2 text-sm md:text-base leading-relaxed mb-10">
                Book a free 30-minute call. We'll dig into your business, identify the gaps, and map out exactly what we'd build for you. No pitch. No pressure. Just clarity.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-dark3 border border-border-color flex items-center justify-center">
                    <Mail size={16} className="text-t3" />
                  </div>
                  <span className="text-t2 text-sm">contact@accentricity.co</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-dark3 border border-border-color flex items-center justify-center">
                    <Globe size={16} className="text-t3" />
                  </div>
                  <span className="text-t2 text-sm">accentricity.co</span>
                </div>
              </div>

              {/* What to expect */}
              <div>
                <p className="text-t1 text-sm font-bold tracking-[0.1em] uppercase mb-4">
                  What to Expect on the Call
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { bold: '30 minutes', text: ' — no more, no less. We respect your time.' },
                    { bold: 'A clear audit', text: ' of where your biggest growth gaps are right now.' },
                    { bold: 'A specific plan', text: " for what we'd build for your business." },
                    { bold: 'Honest feedback', text: " — if we're not the right fit, we'll tell you." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-blue mt-1 shrink-0">●</span>
                      <p className="text-t3 text-sm">
                        <strong className="text-t1 font-semibold">{item.bold}</strong>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal variant="fadeRight">
              <div className="bg-dark2 border border-border-color rounded-2xl p-6 md:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <span className="text-blue text-3xl">✓</span>
                    </div>
                    <h3 className="text-t1 text-xl font-bold mb-2">Thanks!</h3>
                    <p className="text-t2 text-sm">
                      We'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-t1 text-xl md:text-2xl font-bold mb-2">
                      Book a Free Call
                    </h2>
                    <p className="text-t3 text-sm mb-7">
                      Fill out the form and we'll be in touch within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-t3 text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            required
                            className="w-full bg-dark3 border border-border-color rounded-lg px-4 py-3 text-t1 text-sm focus:outline-none focus:border-blue transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-t3 text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Smith"
                            required
                            className="w-full bg-dark3 border border-border-color rounded-lg px-4 py-3 text-t1 text-sm focus:outline-none focus:border-blue transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-t3 text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@yourbusiness.com"
                          required
                          className="w-full bg-dark3 border border-border-color rounded-lg px-4 py-3 text-t1 text-sm focus:outline-none focus:border-blue transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-t3 text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-dark3 border border-border-color rounded-lg px-4 py-3 text-t1 text-sm focus:outline-none focus:border-blue transition-colors"
                        />
                      </div>

                      {/* Business Type */}
                      <div>
                        <label className="block text-t3 text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
                          Business Type
                        </label>
                        <input
                          type="text"
                          name="businessType"
                          value={form.businessType}
                          onChange={handleChange}
                          placeholder="e.g. Landscaping, HVAC, E-Commerce, SaaS"
                          className="w-full bg-dark3 border border-border-color rounded-lg px-4 py-3 text-t1 text-sm focus:outline-none focus:border-blue transition-colors"
                        />
                      </div>

                      {/* Revenue */}
                      <div>
                        <label className="block text-t3 text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
                          Monthly Revenue (Approx)
                        </label>
                        <input
                          type="text"
                          name="revenue"
                          value={form.revenue}
                          onChange={handleChange}
                          placeholder="e.g. $50k–$100k/month"
                          className="w-full bg-dark3 border border-border-color rounded-lg px-4 py-3 text-t1 text-sm focus:outline-none focus:border-blue transition-colors"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-t3 text-[10px] font-semibold tracking-[0.15em] uppercase mb-2">
                          What Are You Looking to Achieve?
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your business and what you're trying to grow or fix..."
                          rows={4}
                          className="w-full bg-dark3 border border-border-color rounded-lg px-4 py-3 text-t1 text-sm focus:outline-none focus:border-blue transition-colors resize-y"
                        />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        whileHover={{ y: -2, boxShadow: '0 4px 24px rgba(0,111,255,0.35)' }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-4 bg-blue text-white text-sm font-semibold rounded-lg transition-all duration-200"
                      >
                        Book a Free Call →
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WhatsApp */}
      <WhatsAppBlock />
    </motion.main>
  )
}
