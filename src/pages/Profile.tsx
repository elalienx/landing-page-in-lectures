// NPM package
import { FC } from "react";
import { useParams, useHistory } from "react-router-dom";

// Interfaces
interface iUseParams {
  url: string;
}

const Profile: FC = () => {
  const { url }: iUseParams = useParams();
  const history = useHistory();

  return (
    <div id="profile">
      <h1>Name: @{url}@</h1>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
};

export default Profile;
