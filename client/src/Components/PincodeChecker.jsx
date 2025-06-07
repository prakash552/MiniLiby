import React, { useState } from 'react';
import './PincodeChecker.css';
import { FaTruck } from 'react-icons/fa';

const serviceablePincodes = ['110001', '110002', '201301', '400001', '560001'];

const PincodeChecker = () => {
  const [pincode, setPincode] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // true = available, false = not

  const checkPincode = () => {
    if (pincode.length !== 6 || isNaN(pincode)) {
      setMessage('Please enter a valid 6-digit pincode');
      setStatus(null);
      return;
    }

    if (serviceablePincodes.includes(pincode)) {
      setMessage('Yes, delivery is available in this area!');
      setStatus(true);
    } else {
      setMessage("Sorry, we don't deliver to this pincode yet.");
      setStatus(false);
    }
  };

  return (
  <div className="pincode-checker-container">
    <div className="pincode-checker">
		<h3><FaTruck size={50} color="#007bff" style={{ marginBottom: '0px' }} /></h3>
      <h3>Check Delivery Availability </h3>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <button onClick={checkPincode}>Check</button>
      </div>
      {message && (
        <p className={`message ${status === true ? 'success' : status === false ? 'error' : ''}`}>
          {message}
        </p>
      )}
    </div></div>
  );
};

export default PincodeChecker;
