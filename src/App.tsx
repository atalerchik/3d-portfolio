import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Home } from "./pages/home/Home";
import Works from "./pages/works/Works";

function App() {
  return (
    <div className="text-stone-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
