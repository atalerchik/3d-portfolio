import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Home } from "./pages/home/Home";
import { ThreeScene } from "./pages/viewer/Viewer";
import { Work } from "./pages/work/Work";
import Works from "./pages/works/Works";
import { AuthProvider } from "react-auth-kit";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="text-stone-100">
        <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/viewer/:id" element={<ThreeScene />} />
            <Route path="/work/:id" element={<Work />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </div>
    </Suspense>
  );
}

export default App;
