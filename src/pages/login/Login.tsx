import axios from "axios";
import { useState } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export function Login() {
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(`${backendUrl}/api/login`, {
      email: login,
      password,
    });

    console.log(response);
  }

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-lg font-bold">Login</h1>
      <LoginForm handleSubmit={handleSubmit} setLogin={setLogin} setPassword={setPassword} />
    </div>
  );
}
