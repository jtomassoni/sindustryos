'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-dark-700 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="text-white font-semibold pr-4">{item.question}</span>
            {openIndex === index ? (
              <FiChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
            ) : (
              <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-300 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

