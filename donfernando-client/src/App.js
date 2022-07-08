import "./App.css";
import SignUpForm from "./components/SignupForm.js";
import Header from "./components/Header.js";
import MembershipDetailCard from "./components/MembershipDetailCard.js";

function App() {
  return (
    <div>
      <Header />
      <MembershipDetailCard />
      <SignUpForm />{" "}
    </div>
  );
}

export default App;
