import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-6">
      <span className="font-bold text-lg">MyApp</span>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
        }
      >
        Home
      </NavLink>
    </nav>
  )
}

export default Navbar
