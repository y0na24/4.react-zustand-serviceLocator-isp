import type { CharactersStoreState } from "./createCharactersStore";
import { createStrictContext } from "@/shared/lib/helpers/createStrictContext";
import type { StoreApi } from "zustand";
import { useContext } from "react";
import { useStore } from "zustand";

export type CharactersContextValue = StoreApi<CharactersStoreState>;

export const CharactersStoreCtx = createStrictContext<CharactersContextValue>();

export const useCharactersStore = <Selected>(
  selector: (value: CharactersStoreState) => Selected,
) => {
  const store = useContext(CharactersStoreCtx);

  if (!store) {
    throw new Error("Нету доступа до characters store");
  }

  return useStore(store, selector);
};
