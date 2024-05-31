import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";

const Input = ({ label, register }) => {
  return (
    <div className="field">
      <label className="label">{label.charAt(0).toUpperCase()+label.slice(1)}</label>
      <input {...register(label)} type="text" className="input" />
    </div>
  );
};

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
        <Input label='username' register={register}/> 

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
