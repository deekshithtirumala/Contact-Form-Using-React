import "./styles.css";
import "./components/login.css";
import LoginForm from "./components/loginform";
import RegisterForm from "./components/registration";
import Contactui from "./components/contactui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/contactscreen" element={<Contactui />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
