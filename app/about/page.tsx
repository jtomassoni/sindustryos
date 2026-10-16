import type { Metadata } from 'next'
import { FiCode, FiCoffee, FiTarget, FiUsers } from 'react-icons/fi'
import TargetAudience from '@/components/sections/TargetAudience'

export const metadata: Metadata = {
  title: 'About: Hospitality Software for Independents',
  description:
    'SindustryOS partners with independent restaurants and bars to cut busywork — website CMS, private dining, and signage. Less copy-paste, not fewer jobs.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-900 pt-5 pb-6 md:pt-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              About SindustryOS
            </h1>
            <p className="mt-3 text-base leading-snug text-gray-300 md:text-lg">
              Small restaurants and bars should not need a stack of vendors just to keep specials,
              events, and the website honest. We build with owners — tools that cut copy-paste, not
              tools that promise to replace their people.
            </p>
          </div>
          <ul className="mt-4 grid max-w-5xl grid-cols-1 gap-2 sm:grid-cols-3">
            {[
              'If it’s hard to update, it’s broken.',
              'If guests can’t find it in seconds, it’s broken.',
              'If it doesn’t help a Friday night, it’s broken.',
            ].map((line) => (
              <li
                key={line}
                className="rounded-lg border border-dark-700 bg-dark-800 px-3 py-2 text-sm text-gray-200"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-dark-900 py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Story
            </h2>
            
            <div className="prose prose-invert max-w-none space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                SindustryOS started with a simple idea: small restaurants and bars should not need
                a stack of vendors just to keep specials, events, and the website honest. We build
                with owners — tools that cut copy-paste and pointless clicks, not tools that promise
                to replace their people.
              </p>

              <p>
                We are builders working with a few partners who know their cities. The goal is
                straightforward: deliver what we say we can deliver, learn the floor with the
                restaurant, and keep the busywork down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JT's Background */}
      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Built by Someone Who Gets It
            </h2>
            
            <div className="bg-dark-900 border border-dark-700 rounded-2xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl text-white font-semibold mb-4">
                  I didn't start in marketing. I started by fixing things that were broken.
                </p>
                
                <p>
                  For over a decade, I've worked in software and quality engineering, helping 
                  companies build systems that actually work in the real world under pressure, 
                  with real users, and zero tolerance for downtime. Along the way, I spent a lot 
                  of time around bars and restaurants, helping friends and owners solve problems 
                  that weren't tech problems on the surface… but always became tech problems eventually.
                </p>
                
                <p>
                  Menus that were outdated online. Specials that changed daily but never showed up 
                  anywhere. Websites built once, forgotten, and impossible to update. Tools that 
                  looked nice but didn't help anyone make money.
                </p>
                
                <p>
                  So I started building what restaurants actually need.
                </p>
                
                <p>
                  I design and manage websites specifically for bars and restaurants: simple, fast, 
                  and built to support day-to-day operations. Not bloated platforms. Not "set it and 
                  forget it" templates. Real tools that help you communicate with customers, promote 
                  specials, and stay current without needing a marketing degree or a full-time staff member.
                </p>
                
                <div className="border-l-4 border-primary-500 pl-6 my-8">
                  <p className="text-white font-semibold mb-2">My approach is practical:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>If it's hard to update, it's broken.</li>
                    <li>If customers can't find what they need in seconds, it's broken.</li>
                    <li>If it doesn't help drive foot traffic or reduce confusion for your staff, it's broken.</li>
                  </ul>
                </div>
                
                <p>
                  I work closely with owners to understand how their place actually runs: what changes 
                  daily, what matters on a Friday night, and what doesn't need to be overthought. 
                  From there, I build clean, reliable websites that grow with the business and don't 
                  get in the way.
                </p>
                
                <p className="text-white font-semibold">
                  No buzzwords. No upsells you don't need. Just solid, dependable web systems for 
                  restaurants that care about doing things right.
                </p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6 text-center">
                <FiCode className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Software Engineering</h3>
                <p className="text-gray-400">Over a decade of experience building systems that work</p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6 text-center">
                <FiCoffee className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Hospitality Industry</h3>
                <p className="text-gray-400">Lifetime of bartending jobs and working with restaurant owners</p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6 text-center">
                <FiUsers className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Experience</h3>
                <p className="text-gray-400">Worked for the largest companies in hospitality and travel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TargetAudience />

      {/* Mission & Vision */}
      <section className="py-8 md:py-10 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
                <FiTarget className="w-12 h-12 text-primary-500 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  Partner with independent restaurants and bars to build software that cuts
                  busywork — copy-paste, duplicate updates, and vendor wait time — so the floor can
                  stay focused on guests.
                </p>
              </div>

              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
                <FiUsers className="w-12 h-12 text-primary-500 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  A platform owners trust because we deliver: website, specials, events, private
                  dining catch, and signage that stay in sync — built with the business, not sold
                  over it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 md:py-10 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Partner, don’t displace</h3>
                <p className="text-gray-400">
                  We build with restaurants. We do not sell software as a way to cut hospitality jobs.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cut the busywork</h3>
                <p className="text-gray-400">
                  Less copy-paste between tools. Fewer clicks for the same update. Specials stay current.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Deliver what we promise</h3>
                <p className="text-gray-400">
                  Fed-up owners buy into ability to deliver — not a roadmap slide. We show the live work.
                </p>
              </div>

              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">No upsell theater</h3>
                <p className="text-gray-400">
                  What you need, when you need it. Transparent pricing. No pressure features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}



