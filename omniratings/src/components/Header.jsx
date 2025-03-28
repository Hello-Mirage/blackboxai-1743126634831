import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          OmniRatings
        </Link>
        <nav className="flex space-x-6">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/browse" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Browse
          </Link>
          <Link 
            to="/submit" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Submit Review
          </Link>
        </nav>
      </div>
    </header>
  )
}