import type { CharactersDTO } from "@/shared/dto/characterDto";
import type { Character } from "./types";

export class CharacterModel {
  constructor() {}

  public toggleCharacter(characters: Character[], id: Character["id"]) {
    return characters.map((c) =>
      c.id === id ? { ...c, isFavorite: !c.isFavorite } : c,
    );
  }

  public clearCharacters(characters: Character[]) {
    return characters.map((c) => ({
      ...c,
      isFavorite: false,
    }));
  }

  public getFavoriteCharacters(characters: Character[]) {
    return characters.filter((c) => c.isFavorite);
  }

  public toggleCharacterById(characters: Character[], id: number) {
    const idx = this.getCharacterIndexById(characters, id);
    const target = characters[idx];

    characters[idx] = { ...target, isFavorite: !target.isFavorite };

    return characters;
  }

  private getCharacterIndexById(characters: Character[], id: Character["id"]) {
    return characters.findIndex((c) => c.id === id);
  }

  public static mapDtoToCharacter = (
    charactersDto: CharactersDTO,
  ): Character[] => {
    return charactersDto.results.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.image,
      status: result.status,
      species: result.species,
      isFavorite: false,
    }));
  };
}
