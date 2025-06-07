import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          📚 BookNest
        </div>
      </div>

      <ul className="navbar-center">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/BooksPage" className={({ isActive }) => isActive ? 'active' : ''}>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/authors" className={({ isActive }) => isActive ? 'active' : ''}>
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active cart-btn' : 'cart-btn'}>
          🛒 Cart
        </NavLink>
        <NavLink to="/auth" className={({ isActive }) => isActive ? 'active user-icon' : 'user-icon'}>
          <FaUserCircle size={34} />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
