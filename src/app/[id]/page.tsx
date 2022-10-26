import { use } from "react";
import { getCharacter } from "rickmortyapi";

export default function Page({ params }: { params: { id: string } }) {
  const data = use(getCharacter(parseInt(params.id)));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div>{data.data.name}</div>
      <div>{data.data.species}</div>
      <div>{data.data.status}</div>
    </div>
  );
}
