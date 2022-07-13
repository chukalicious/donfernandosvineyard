import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home";
import MembershipDetailCards from "./components/MembershipDetailCards.js";
import SignUpForm from "./components/SignupForm.js";
import About from "./components/About";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Fragment>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/membershipDetails"
            element={<MembershipDetailCards />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
        </Fragment>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
