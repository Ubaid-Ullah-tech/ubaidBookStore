import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== cpassword) {
            alert('Passwords do not match!');
            return;
        }

        const formData = {
            username,
            email,
            password
        };

        localStorage.setItem('user', JSON.stringify(formData));

        // Navigate to the login page after successful registration
        navigate('/login');
    };

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <>
        <div className='max-w-screen-2xl container md:px-20 px-9 mt-20' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Register</h3>
            <p className="py-4">Create an account by filling in the information below.</p>
            
            {/* Form for registration */}
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  autoComplete='off'
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete='off'
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete='off'
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  required
                  autoComplete='off'
                />
              </div>
              <div className="flex items-center justify-between">
                <button 
                  className="btn btn-primary" 
                  type="submit">
                  Register
                </button>
              </div>
            </form>

            <div className="modal-action mt-4">
              <button className="btn" onClick={handleSignIn}>Sign In</button>
            </div>
          </div>
        </div>
        </>
    );
};

export default Register;
