// Project files
import Intro from "./components/Intro";
import Candidates from "./components/Candidates";
import "./styles/style.scss";

export default function App() {
  // Properties
  const URL: string = "http://www.google.com";
  const TOTAL_USERS = 3;

  return (
    <div className="App">
      <h1>Hello world</h1>

      <Intro url={URL} totalUsers={TOTAL_USERS} />
      <Candidates />
    </div>
  );
}
