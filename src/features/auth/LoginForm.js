import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(email, password);
      toast.success('Success login!');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label className="block">
        <span className="block text-sm font-medium text-black ">Email</span>

        <input
          type="text"
          className="w-full px-1 py-1 rounded-md border border-slate-400"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <div>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            className="w-full px-1 py-1 rounded-md border border-slate-400"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <button
          className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
