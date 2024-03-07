import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
//kriyadb.psgtech.ac.in/api/convenor-auth/
    try {
      const response = await axios.post('https://kriyadb.psgtech.ac.in/api/convenor-auth/register', formData);
      console.log('User registered successfully:', response.data.user);
      // Add any additional logic for handling success here
    } catch (error) {
      console.error('Error registering user:', error.message);
      // Add any additional logic for handling errors here
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event ID:
          <input type="text" name="eventId" value={formData.eventId} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Is Team:
          <input type="checkbox" name="isTeam" checked={formData.isTeam} onChange={() => setFormData({ ...formData, isTeam: !formData.isTeam })} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
