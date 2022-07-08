import "./App.css";
import Header from "./components/Header.js";
import MembershipDetailCards from "./components/MembershipDetailCards.js";
import SignUpForm from "./components/SignupForm.js";
import About from "./components/About";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MembershipDetailCards />
      <SignUpForm /> <About /> <Awards />
      <Footer />
    </div>
  );
}

export default App;
