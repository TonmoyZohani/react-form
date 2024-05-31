import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "Zohani",
      email: "zohani@flyfar.tech",
      password: "12345678",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">Username</label>
        <input {...register("username")} type="text" className="input" />
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input {...register("email")} type="text" className="input" />
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input {...register("password")} type="password" className="input" />
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
