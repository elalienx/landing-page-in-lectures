import { FC } from "react";

interface MyProps {
  url: string;
  totalUsers: number;
}

const Intro: FC<MyProps> = ({ url, totalUsers }) => {
  return (
    <div className="intro">
      <h2>Intro</h2>
      <h3>Total users: @{totalUsers}@</h3>
      <a href={url} target="_blank" rel="noreferer">
        Click me to open an external link
      </a>
    </div>
  );
};

export default Intro;
