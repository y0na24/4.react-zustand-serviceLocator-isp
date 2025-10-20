import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { useDi } from "../di";
import { EntityCard } from "@/shared/ui/EntityCard";


export function CatalogCard({ id }: { id: number }) {
  const { getActions, getCharacterById } = useDi();
  const { toggleFavorite } = getActions()

  return (
    <EntityCard
      id={id}
      useSelectById={getCharacterById}
      render={(character) => (
        <CharacterCard
          character={character}
          isFavorite={character.isFavorite}
          onToggleFavorite={toggleFavorite}
        />
      )}
    />
  );
}
