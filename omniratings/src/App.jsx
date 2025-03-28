import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import SubmitPage from './pages/SubmitPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/submit" element={<SubmitPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App