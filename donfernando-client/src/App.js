import "./App.css";
import SignUpForm from "./components/SignupForm.js";
import Header from "./components/Header.js";
import MembershipDetailCards from "./components/MembershipDetailCards.js";

function App() {
  return (
    <div>
      <Header />
      <MembershipDetailCards />
      <SignUpForm />{" "}
    </div>
  );
}

export default App;
