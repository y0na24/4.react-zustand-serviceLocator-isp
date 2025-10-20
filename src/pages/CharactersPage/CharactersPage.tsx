import { CharactersCatalogFeature } from "@/features/charactersCatalogFeature/CharactersCatalogFeature";
import {
  charactersCatalogInjector,
  type CharactersCatalogDeps,
} from "@/features/charactersCatalogFeature/di";
import { getFeatureLocator } from "./useFeatureLocator";
import {
  selectActions,
  selectCharacterById,
  selectCharacters,
  selectIsError,
  selectIsLoading,
} from "@/entites/character/store/store/charactersSelectors";

const useCharactersStore = getFeatureLocator("CHARACTERS_STORE");

export function CharactersPage() {
  const deps: CharactersCatalogDeps = {
    getCharacters: () => useCharactersStore(selectCharacters),
    getCharacterById: (id: number) =>
      useCharactersStore(selectCharacterById(id)),
    getActions: () => useCharactersStore(selectActions),
    getIsError: () => useCharactersStore(selectIsError),
    getIsLoading: () => useCharactersStore(selectIsLoading),
  };

  return (
    <charactersCatalogInjector.Provider value={deps}>
      <CharactersCatalogFeature />
    </charactersCatalogInjector.Provider>
  );
}
