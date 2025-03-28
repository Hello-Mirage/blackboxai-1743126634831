import { StarIcon } from '@heroicons/react/24/solid'

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{review.title}</h3>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {review.category}
        </span>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-600">{review.summary}</p>
      <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
        Read full review →
      </button>
    </div>
  )
}