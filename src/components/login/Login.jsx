// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8 mt-20">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="font-bold text-lg mb-4">Login!</h3>
        <p className="mb-4">Please enter your credentials to log in.</p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4 mt-20">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              name="email"
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete='off'
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              name="password"
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete='off'
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <h2 className='p-5'>don't have an account please <span className='text-blue-500'>Register</span></h2>
            <Link to='/register'>
              <button className="btn btn-secondary" type="button">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;