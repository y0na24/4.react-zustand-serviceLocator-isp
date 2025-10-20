import { create } from "zustand";
import type { Character } from "../../model/types";

export type CharactersStoreState = {
  characters: Character[];

  isCharactersLoading: boolean;
  isCharactersError: boolean;

  actions: {
    clearFavorites: () => void;
    toggleFavorite: (id: number) => void;
    fetchCharacters: (value?: string) => Promise<void>;
  };
};

type Deps = {
  charactersService: {
    getCharacters(name?: string): Promise<Character[]>;
    getFavoriteCharacters(characters: Character[]): Character[];
    toggleFavorite(characters: Character[], id: number): Promise<Character[]>;
    clearFavorites(characters: Character[]): Promise<Character[]>;
  };
};

export const createCharactersStore = ({ charactersService }: Deps) => {
  const useStore = create<CharactersStoreState>((set, get) => ({
    characters: [],

    isCharactersLoading: false,
    isCharactersError: false,

    actions: {
      clearFavorites: async () => {
        const characters = await charactersService.clearFavorites(
          get().characters,
        );
        set({ characters });
      },
      toggleFavorite: async (id) => {
        const characters = await charactersService.toggleFavorite(
          get().characters,
          id,
        );

        set({ characters });
      },
      fetchCharacters: async (value) => {
        set({ isCharactersLoading: true });
        try {
          const characters = await charactersService.getCharacters(value);
          set({
            characters,
            isCharactersLoading: false,
            isCharactersError: false,
          });
        } catch {
          set({ isCharactersError: true });
        } finally {
          set({ isCharactersLoading: false });
        }
      },
    },
  }));

  useStore.getState().actions.fetchCharacters();

  return useStore;
};
