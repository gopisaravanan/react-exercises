import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert('Email is Required');
    }
    if (!formData.password) {
      alert('Password is Required');
    }
    if (formData.password.length < 8) {
      alert('Password should be minimum 8 chars');
    }
  };

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="email"
          type="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
