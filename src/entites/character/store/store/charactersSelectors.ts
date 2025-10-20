import type { CharactersStoreState } from "./createCharactersStore";

export const selectCharacters = (s: CharactersStoreState) => s.characters;

export const selectFavoriteCharacters = (s: CharactersStoreState) =>
  s.characters.filter((c) => c.isFavorite);

export const selectIsLoading = (s: CharactersStoreState) =>
  s.isCharactersLoading;

export const selectIsError = (s: CharactersStoreState) => s.isCharactersError;

export const selectActions = (s: CharactersStoreState) => s.actions;

export const selectCharacterById = (id: number) => (s: CharactersStoreState) =>
  s.characters.find((c) => c.id === id)!;
