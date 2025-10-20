import { createStrictContext } from "@/shared/lib/helpers/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";

import type { Character } from "@/entites/character/model/types";

export type CharactersCatalogDeps = {
  getCharacters: () => Character[];
  getCharacterById: (id: number) => Character;
  getActions: () => {
    toggleFavorite: (id: number) => void;
    fetchCharacters: (value?: string) => Promise<void>;
  };
  getIsLoading: () => boolean;
  getIsError: () => boolean;
};

export const charactersCatalogInjector =
  createStrictContext<CharactersCatalogDeps>();
export const useDi = () => useStrictContext(charactersCatalogInjector);
