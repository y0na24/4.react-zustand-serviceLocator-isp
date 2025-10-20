import { createCharactersStore } from "@/entites/character/store/store/createCharactersStore";
import { Container } from "./container";
import { CharactersService } from "@/entites/character/services/CharactersService";
import { CharacterApi } from "@/entites/character/repository/CharacterApi";
import { InMemoryCache } from "@/shared/storages/InMemoryCache";
import { FavoritesCharactersStorage } from "@/entites/character/repository/FavoriteCharactersStorage";
import { localStoragePersister } from "@/shared/storages/LocalStoragePersister";
import { CharacterModel } from "@/entites/character/model/CharacterModel";

const charactersService = new CharactersService(
  new CharacterApi(new InMemoryCache()),
  new FavoritesCharactersStorage(localStoragePersister),
  new CharacterModel(),
);

export const container = new Container({
  CHARACTERS_STORE: createCharactersStore({
    charactersService,
  }),
  USERS_STORE: {
    users: [{}],
  },
} as const);

type ServiceKey = ReturnType<typeof container.getKeys>[number];

function getLocator<T extends ServiceKey>(
  token: T,
): ReturnType<typeof container.get<T>> {
  return container.get(token);
}

export function createFeatureLocator<AllowedTokens extends ServiceKey>() {
  return function <T extends AllowedTokens>(token: T) {
    return getLocator(token);
  };
}
