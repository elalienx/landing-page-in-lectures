// NPM packages
import { FC } from "react";

// Project files
import data from "../data/candidates.json";
import iCandidate from "../types/iCandidate";
import ItemCandidate from "./ItemCandidate";

const Candidates: FC = () => {
  // Properties
  const randomCandidates = getRandomCandidates(data, 3);

  // We try to make it pure
  function getRandomCandidates(array: iCandidate[], ammount: number) {
    const clonedArray = [...array];
    const randomCandidates = clonedArray.sort(() => 0.5 - Math.random());
    const selectedCandidates = randomCandidates.slice(0, ammount);

    return selectedCandidates;
  }

  // Component
  const CandidateItems = randomCandidates.map((item, index) => (
    <ItemCandidate key={index} item={item} />
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

      <ul>{CandidateItems}</ul>
    </section>
  );
};

export default Candidates;
