import { CharacterListOptimized } from "@/entites/character/ui/CharacterListOptimized";
import { useDi } from "../di";
import { CatalogCard } from "./CatalogCard";

export function CatalogList() {
  const { getCharacters } = useDi();

  const characters = getCharacters();

  return (
    <CharacterListOptimized>
      {characters.map((char) => (
        <CatalogCard key={char.id} id={char.id} />
      ))}
    </CharacterListOptimized>
  );
}
