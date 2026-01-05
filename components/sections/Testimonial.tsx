import { FiMessageSquare } from 'react-icons/fi'

export default function Testimonial() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-dark-900 via-secondary-900 to-dark-900 overflow-hidden">
      {/* Rich texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '50px 50px',
          color: '#faf9f7',
        }} />
      </div>
      
      {/* Warm accent glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-accent-900/10" />
      
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
        color: '#faf9f7',
      }} />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            <FiMessageSquare className="w-12 h-12 text-primary-500 mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              "JT has become a true partner to the business. He worked in the industry for years 
              so he understands my concerns and has never built anything less than amazing."
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <p className="text-white font-semibold text-lg">Victoria</p>
                <p className="text-gray-400">Monaghan's Bar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

