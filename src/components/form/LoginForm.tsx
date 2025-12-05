"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(data: LoginFormData) {
    setError("");

    const res = await fetch(
      http://localhost:3001/users?email=${data.email}&password=${data.password}
    );

    const users = await res.json();

    if (users.length === 0) {
      setError("Email ou senha inválidos");
      return;
    }

    const user = users[0];

    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      {error && (
        <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-md text-sm text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          className="border border-gray-300 rounded-md p-3"
          placeholder="Digite seu email"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Senha</label>
        <input
          {...register("password")}
          type="password"
          className="border border-gray-300 rounded-md p-3"
          placeholder="Digite sua senha"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition"
      >
        Login
      </button>
    </form>
  );
}
