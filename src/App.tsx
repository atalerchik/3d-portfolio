import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="text-stone-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
