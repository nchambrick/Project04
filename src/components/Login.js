import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert('Please enter both fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', formData);
      alert('Login successful!');
      // Save token to localStorage (optional)
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="text-center" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 className="mb-4" data-aos="fade-down">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
