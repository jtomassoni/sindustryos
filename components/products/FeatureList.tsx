import { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface Feature {
  title: string
  description: string
  icon?: IconType
}

interface FeatureListProps {
  features: Feature[]
  columns?: 1 | 2 | 3 | 4
}

export default function FeatureList({ features, columns = 2 }: FeatureListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div
            key={index}
            className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
          >
            {Icon && <Icon className="w-8 h-8 text-primary-500 mb-4" />}
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}


