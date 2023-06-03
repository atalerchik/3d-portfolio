import axios from "axios";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(`${backendUrl}/login`, {
      email: login,
      password,
    });

    if (response.status === 200) {
      console.log(response);
      signIn({
        token: response.data.id,
        expiresIn: 10000000,
        tokenType: "Bearer",
        authState: {
          email: login,
          password,
        },
      });
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-lg font-bold">Login</h1>
      <LoginForm handleSubmit={handleSubmit} setLogin={setLogin} setPassword={setPassword} />
    </div>
  );
}
