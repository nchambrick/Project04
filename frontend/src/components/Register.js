import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, confirmPassword, agree } = formData;

    if (!username || !password || !confirmPassword) {
      return alert('Please fill out all fields.');
    }

    if (password !== confirmPassword) {
      return alert('Passwords do not match.');
    }

    if (!agree) {
      return alert('You must agree to the terms and conditions.');
    }

    try {
      await axios.post('http://localhost:3001/api/auth/register', {
        username,
        password
      });
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Username may already be taken.');
    }
  };

  return (
    <div className="text-center" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Repeat Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-check text-start mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            id="agree"
          />
          <label className="form-check-label" htmlFor="agree">
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>

        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
