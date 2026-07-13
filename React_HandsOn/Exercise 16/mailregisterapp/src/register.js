import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 5 ? 'Name should have at least 5 characters' : '';
      case 'email':
        return !value.includes('@') || !value.includes('.') ? 'Email should have @ and .' : '';
      case 'password':
        return value.length < 8 ? 'Password should have at least 8 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      password: validateField('password', form.password)
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      alert('Registration successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
