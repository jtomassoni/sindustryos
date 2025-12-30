'use client'

import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'

interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
}

export default function Toast({ 
  message, 
  type = 'info', 
  duration = 5000,
  onClose 
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300)
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])
  
  if (!isVisible) return null
  
  const typeStyles = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-primary-600 text-white',
  }
  
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 ${typeStyles[type]} px-6 py-4 rounded-xl shadow-lg flex items-center gap-4 min-w-[300px] max-w-md animate-slide-up`}
      role="alert"
    >
      <p className="flex-1">{message}</p>
      <button
        onClick={() => {
          setIsVisible(false)
          setTimeout(() => onClose?.(), 300)
        }}
        className="hover:opacity-80 transition-opacity"
        aria-label="Close notification"
      >
        <FiX className="w-5 h-5" />
      </button>
    </div>
  )
}

