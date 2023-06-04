import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";

export function SignUp() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.post(`${backendUrl}/user/registration`, {
      email: login,
      password,
    });

    if (response.status === 200) {
      navigate("/login");
    }
  }

  return (
    <div className="flex flex-col-reverse gap-5 justify-between items-center md:flex-row py-3 w-5/6 my-0 mx-auto">
      <SignUpForm handleSubmit={handleSubmit} setLogin={setLogin} setPassword={setPassword} />
    </div>
  );
}
