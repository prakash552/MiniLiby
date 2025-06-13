import '../../styles/user/Profile.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
   const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/auth');
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <FaUserCircle size={90} className="profile-icon" />
        <h2 className="profile-name">{user.name}</h2>

        <div className="profile-info">
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Phone:</strong> {user.phone || 'Not Provided'}</div>
          <div><strong>Member Since:</strong> {user.createdAt ? user.createdAt.slice(0, 10) : 'N/A'}</div>
        </div>

        <div className="profile-actions">
          <button className="edit-btn" onClick={() => alert('Edit profile coming soon!')}>
            ✏️ Edit Profile
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
