import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate('/task');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 rounded-xl border-emerald-600 p-10">
        <h2 className="text-2xl text-center mb-4 text-white">Login</h2>
        <form onSubmit={submitHandler} className="flex flex-col items-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-lg outline-none bg-transparent placeholder-gray-400 w-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-3 border-2 border-emerald-600 rounded-full py-3 px-5 text-lg outline-none bg-transparent placeholder-gray-400 w-full"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            type="submit"
            className="mt-5 bg-emerald-600 rounded-full py-3 px-5 text-lg text-white w-full"
          >
            Log in
          </button>
          <p className="mt-3 text-white-900">Don't have an account?</p>
          <button
            onClick={() => navigate('/signup')}
            className="mt-2 bg-transparent border-2 border-emerald-600 text-emerald-600 rounded-full py-3 px-5 text-lg w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
