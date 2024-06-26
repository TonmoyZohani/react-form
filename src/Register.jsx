import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const validationSchema = yup
  .object({
    username: yup.string().required("Missing username"),
    email: yup.string().required("Missing email").email("Invalid email format"),
    password: yup
      .string()
      .required("Missing password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    phone: yup
      .string()
      .required("Missing phone number")
      .matches(
        /^\+?[1-9]\d{1,14}$/,
        "Phone number must be a valid E.164 format"
      ),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
    axios
      .post("https://api.realworld.io/api/users", { user: data })
      .then((response) => {
        console.log("succ", response);
      })
      .catch((err) => {
        console.log("err", err);
        if (err.response.data.errors.email) {
          setError("email", {
            type: "server",
            message: err.response.data.errors.email[0],
          });
        }
        if (err.response.data.errors.username) {
          setError("username", {
            type: "server",
            message: err.response.data.errors.username[0],
          });
        }
        if (err.response.data.errors.password) {
          setError("password", {
            type: "server",
            message: err.response.data.errors.password[0],
          });
        }
        if (err.response.data.errors.phone) {
          setError("phone", {
            type: "server",
            message: err.response.data.errors.phone[0],
          });
        }
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">Username</label>
        <input {...register("username")} type="text" className="input" />
        {errors.username && (
          <span className="error">{errors.username.message}</span>
        )}
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input {...register("email")} type="text" className="input" />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input {...register("password")} type="password" className="input" />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <input {...register("phone")} type="text" className="input" />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
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
