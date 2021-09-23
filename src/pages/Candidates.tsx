// NPM packages
import { FC } from "react";

// Project files
import data from "data/candidates.json";
import iCandidate from "types/iCandidate";
import Item from "components/ItemCandidate";

// Interface
interface iProps {
  totalUsers: number;
}

const Candidates: FC<iProps> = ({ totalUsers }) => {
  // Properties
  const candidates = getRandomCandidates(data, totalUsers);

  function getRandomCandidates(array: iCandidate[], ammount: number) {
    const clonedArray = [...array];
    const shuffledArray = clonedArray.sort(() => 0.5 - Math.random());
    const selectedCandidates = shuffledArray.slice(0, ammount);

    return selectedCandidates;
  }

  // Component
  const Items = candidates.map((item, index) => (
    <Item key={index} item={item} />
  ));

  return (
    <section className="candidates">
      <h2>Candidates</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum
        sint doloribus natus error accusamus deleniti, illum suscipit veritatis
        neque, atque officiis et hic quasi dolore modi consequuntur tenetur
        magni.
      </p>

      <ul>{Items}</ul>
    </section>
  );
};

export default Candidates;
