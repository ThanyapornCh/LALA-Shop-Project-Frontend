import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useLoading from '../../hooks/useLoading';
import Input from '../../components/Input';
import validateRegister from '../../validators/validate-register';
import * as authApi from '../../apis/auth-api';

const initialInput = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        await authApi.register(input);
        stopLoading();
        setInput(initialInput);
        onClose();
        toast.success('Success register!,Please login to continue.');
      }
    } catch (err) {
      console.log(input);
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col space-y-2">
        <label className="block ">
          <span className="text-sm font-medium text-slate-700">Firstname</span>
          <Input
            placeholder="First name"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
            error={error.firstName}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Surname</span>
          <Input
            placeholder="Last name"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
            error={error.lastName}
          />
        </label>

        <label className="block" htmlFor="email">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <Input
            placeholder="Email address"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            error={error.email}
          />
        </label>
        <label className="block" htmlFor="password">
          <span className="text-sm font-medium text-slate-700"> Password</span>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            error={error.password}
          />
        </label>

        <label className="block" htmlFor="confirmpassword">
          <span className="text-sm font-medium text-slate-700">
            Confirm Password
          </span>
          <Input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            error={error.confirmPassword}
          />
        </label>
      </div>

      <br />
      <button
        className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
              hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}
