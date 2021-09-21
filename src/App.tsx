// Project files
import Intro from "./components/Intro";
import "./styles/style.scss";

export default function App() {
  // Properties
  const URL: string = "http://www.google.com";
  const TOTAL_USERS = 3;

  return (
    <div className="App">
      <h1>Hello world</h1>

      <Intro url={URL} totalUsers={TOTAL_USERS} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia
        explicabo laudantium. Deleniti, asperiores. Et iste, enim quas aliquid
        soluta aut dolorem cupiditate explicabo odio, corporis nam velit
        inventore ex?
      </p>
    </div>
  );
}
