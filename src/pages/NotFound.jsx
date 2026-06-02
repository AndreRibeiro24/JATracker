import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-6">Oops — page not found.</p>
      <Link to="/" className="text-blue-600 underline hover:text-blue-800">
        Go back home
      </Link>
    </div>
  )
}

export default NotFound
