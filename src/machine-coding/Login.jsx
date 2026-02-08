import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.length) {
      alert('Email is required');
      return;
    }
    if (!formData.password.length) {
      alert('Password is required');
      return;
    }
    if (formData.password.length < 8) {
      alert('Password length should be 8 chars');
      return;
    }
    alert('Login Successful');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={formData.email}
          type="email"
        />
        <br />
        <br />
        <input
          name="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
          value={formData.password}
          type="password"
        />
        <br />
        <br />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
};

export default Login;
