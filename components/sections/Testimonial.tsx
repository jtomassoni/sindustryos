import { FiMessageSquare } from 'react-icons/fi'

export default function Testimonial() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-dark-900 via-secondary-900 to-dark-900 overflow-hidden">
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
          <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 md:p-10 shadow-2xl">
            <FiMessageSquare className="w-10 h-10 md:w-12 md:h-12 text-primary-500 mb-4 md:mb-6" />
            
            <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 leading-relaxed">
              "This platform has become a true partner to the business. It's built by people who 
              understand the industry, so they know our concerns and have never delivered anything less than amazing."
            </blockquote>
            
            <div className="flex items-center">
              <div>
                <p className="text-white font-semibold text-base md:text-lg">Victoria, Owner</p>
                <p className="text-gray-400 text-sm md:text-base">Monaghan's Bar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

