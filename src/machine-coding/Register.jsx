import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    if (!formData.name.length) {
      alert('Name is required');
      return;
    }
    if (!formData.email.length) {
      alert('Email is required');
      return;
    }

    if (formData.password.length < 8) {
      alert('Passowrd minimum should be 8 chars');
      return;
    }

    console.log(formData);
  };

  return (
    <>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Enter Name"
          onChange={handleOnChange}
          value={formData.name}
        />
        <br />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={handleOnChange}
          value={formData.email}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={handleOnChange}
          value={formData.password}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Register;
