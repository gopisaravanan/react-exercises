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
      alert('Email is required');
      return;
    }
    if (formData.password.length < 8) {
      alert('Minimum password chars should be 8');
      return;
    }
    alert('Login successfull');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <input
          placeholder="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
