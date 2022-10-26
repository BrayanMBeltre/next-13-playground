import Link from "next/link";
import { use } from "react";
import { getCharacters } from "rickmortyapi";

type Props = {};

const CharacterList = (props: Props) => {
  const data = use(getCharacters());

  return (
    <div>
      <div>CharacterList</div>
      <ul>
        {data?.data?.results?.map((character) => (
          <li key={character.id}>
            <Link href={`/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
