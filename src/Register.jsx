import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">Username</label>
        <input type="text" className="input" />
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input type="text" className="input" />
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input type="password" className="input" />
      </div>
      <div>
        <button type="submit" className="button">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
