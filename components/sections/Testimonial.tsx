import { FiMessageSquare } from 'react-icons/fi'

export default function Testimonial() {
  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 107, 26, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-900 border border-dark-700 rounded-2xl p-8 md:p-12">
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

