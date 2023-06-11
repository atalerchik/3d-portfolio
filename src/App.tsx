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
    <Suspense
      fallback={
        <div className="loading flex justify-center items-center h-screen w-screen bg-stone-900 text-stone-100">
          <svg
            className="animate-spin h-16 w-16"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2)">
              <path
                d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.61234 12C2.61234 17.1847 6.81534 21.3877 12 21.3877C17.1847 21.3877 21.3877 17.1847 21.3877 12C21.3877 6.81534 17.1847 2.61234 12 2.61234C6.81534 2.61234 2.61234 6.81534 2.61234 12Z"
                fill="#8A8CF5"
              />
              <path
                d="M22.8723 17.0786C22.0702 18.7958 20.8728 20.2985 19.3782 21.4637C17.8836 22.629 16.1342 23.4237 14.2733 23.7827C12.4124 24.1417 10.493 24.0549 8.6721 23.5293C6.85124 23.0037 5.18076 22.0543 3.79744 20.7589L5.58309 18.8521C6.66527 19.8656 7.9721 20.6083 9.39657 21.0194C10.821 21.4306 12.3226 21.4985 13.7784 21.2177C15.2342 20.9368 16.6027 20.3151 17.772 19.4035C18.9413 18.4919 19.878 17.3164 20.5055 15.9731L22.8723 17.0786Z"
                fill="#E2E2FC"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      }
    >
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
