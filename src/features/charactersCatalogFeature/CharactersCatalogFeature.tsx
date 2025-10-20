import { Spinner } from "@/shared/ui/spinner";
import { useDi } from "./di";

import { CatalogInput } from "./ui/CatalogInput";
import { CatalogList } from "./ui/CatalogList";

export function CharactersCatalogFeature() {
  const { getIsLoading, getIsError } = useDi();

  const isCharactersLoading = getIsLoading();
  const isCharactersError = getIsError();

  return (
    <div className="p-4 mb-4">
      <CatalogInput />

      {isCharactersLoading && (
        <Spinner className="flex justify-center mx-auto mt-5" />
      )}

      {!isCharactersError ? (
        <CatalogList />
      ) : (
        <div className="text-sm text-muted-foreground mt-4">
          Таких персонажей нет
        </div>
      )}
    </div>
  );
}
