import { useState } from 'react'
import ReviewCard from '../components/ReviewCard'
import SearchBar from '../components/SearchBar'

const mockReviews = [
  {
    id: 1,
    title: 'Amazing Product',
    rating: 5,
    category: 'Electronics',
    summary: 'This product exceeded all my expectations!',
    date: '2023-05-15'
  },
  {
    id: 2,
    title: 'Great Service',
    rating: 4,
    category: 'Services',
    summary: 'Very professional and timely delivery',
    date: '2023-06-20'
  },
  {
    id: 3,
    title: 'Average Experience',
    rating: 3,
    category: 'Restaurants',
    summary: 'Food was okay but service could be better',
    date: '2023-07-10'
  }
]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredReviews = mockReviews.filter(review =>
    review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Browse Reviews</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}