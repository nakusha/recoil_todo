import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password is not equal" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "server offline" });
  };

  interface IForm {
    toDo: string;
    email: string;
    name: string;
    schedule: string;
    password: string;
    password1: string;
    extraError?: string;
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("toDo", {
            required: "Need Todo list",
            minLength: { value: 5, message: "Too Short" },
          })}
          placeholder="Write a to do"
        />
        <input
          {...register("email", {
            required: "Need email input",
            minLength: { value: 5, message: "Too Short" },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver mail",
            },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("name", {
            required: "Need Name",
            minLength: { value: 5, message: "Too Short" },
          })}
          placeholder="Write a to do"
        />
        <input
          {...register("schedule", {
            required: "Need schedule",
            minLength: { value: 5, message: "Too Short" },
            // validate: (value) =>
            //   value.includes("nico") ? "no nicos allow" : true,
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.schedule?.message}</span>
        <input
          {...register("password", {
            required: "Need schedule",
            minLength: { value: 5, message: "Too Short" },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Need schedule",
            minLength: { value: 5, message: "Too Short" },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;
