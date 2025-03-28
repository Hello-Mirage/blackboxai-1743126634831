import ReviewCard from '../components/ReviewCard'

export default function HomePage() {
  const featuredReviews = [
    {
      id: 1,
      title: 'Amazing Product',
      rating: 5,
      category: 'Electronics',
      summary: 'This product exceeded all my expectations!'
    },
    {
      id: 2,
      title: 'Great Service',
      rating: 4,
      category: 'Services',
      summary: 'Very professional and timely delivery'
    }
  ]

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Welcome to OmniRatings</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover honest reviews for products and services across all categories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  )
}