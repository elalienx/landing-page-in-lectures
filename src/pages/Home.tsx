// NPM Package
import { FC } from "react";

// Interface
interface iProps {
  totalUsers: number;
}

const Home: FC<iProps> = ({ totalUsers }) => {
  return (
    <div className="intro">
      <h2>Intro</h2>
      <h3>Total users: @{totalUsers}@</h3>
      <a href="/candidates">View all candidates</a>
    </div>
  );
};

export default Home;
