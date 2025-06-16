import '../user/Navbar.css'; // Importing CSS for Navbar
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

function Navbar() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

const handleLogout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  alert('You have been logged out!');
  navigate('/auth');
};


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">📚 MiniLib</div>
      </div>

      <ul className="navbar-center">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/BooksPage" className={({ isActive }) => isActive ? 'active' : ''}>Books</NavLink></li>
        <li><NavLink to="/authors" className={({ isActive }) => isActive ? 'active' : ''}>Authors</NavLink></li>
       <li><NavLink to="/wish" className={({ isActive }) => isActive ? 'active' : ''}>Wishlist</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>

      <div className="navbar-right">
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active cart-btn' : 'cart-btn'}>
          🛒 Cart
        </NavLink>

        {user ? (
          <div className="user-dropdown" ref={dropdownRef}>
            <div className="user-icon" onClick={toggleDropdown}>
              <FaUserCircle size={28} style={{ marginRight: '6px' }} />
              {user.name.split(' ')[0]} 
            </div>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
              </ul>
            )}
          </div>
        ) : (
          <NavLink to="/auth" className={({ isActive }) => isActive ? 'active user-icon' : 'user-icon'}>
            <FaUserCircle size={34} />
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
