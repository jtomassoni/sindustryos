import type { Metadata } from 'next'
import { FiCode, FiCoffee, FiTarget, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'About Us - SindustryOS',
  description: 'Learn about SindustryOS, our mission to create front-to-back solutions for small businesses using AI, and JT\'s background in software engineering and the hospitality industry.',
  keywords: ['about sindustryos', 'restaurant software company', 'hospitality technology'],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About SindustryOS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Building solutions for small businesses that actually work
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Story
            </h2>
            
            <div className="prose prose-invert max-w-none space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                SindustryOS started with a simple idea: small businesses shouldn't need to juggle 
                multiple vendors and platforms to run their operations. We're building a total 
                front-to-back solution that empowers small teams to do big tasks using AI tooling.
              </p>
              
              <p>
                We're a team of builders working with partners to bring this solution to market. 
                Our goal is simple: make restaurant and bar management accessible, affordable, 
                and powerful enough to compete with enterprise solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JT's Background */}
      <section className="py-20 bg-dark-800">
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
                  companies build systems that actually work in the real world—under pressure, 
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
                  I design and manage websites specifically for bars and restaurants—simple, fast, 
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
                  I work closely with owners to understand how their place actually runs—what changes 
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

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
                <FiTarget className="w-12 h-12 text-primary-500 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To create a front-to-back solution top to bottom for small businesses using AI 
                  tooling to empower small teams to do big tasks. Making restaurant management 
                  accessible, affordable, and powerful.
                </p>
              </div>
              
              <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
                <FiUsers className="w-12 h-12 text-primary-500 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  AI-powered solutions that help small restaurants and bars compete with enterprise 
                  tools. One platform that replaces multiple vendors, reduces overhead, and helps 
                  businesses thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Practical Solutions</h3>
                <p className="text-gray-400">
                  We build tools that solve real problems, not features that look good in demos.
                </p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Industry Understanding</h3>
                <p className="text-gray-400">
                  We've worked in the industry and understand the day-to-day challenges you face.
                </p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">No Upsells</h3>
                <p className="text-gray-400">
                  We offer what you need, when you need it. No pressure to buy features you don't want.
                </p>
              </div>
              
              <div className="bg-dark-900 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Affordable Pricing</h3>
                <p className="text-gray-400">
                  Small businesses shouldn't pay enterprise prices. We keep costs reasonable and transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


