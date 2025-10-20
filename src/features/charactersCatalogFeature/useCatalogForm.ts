import { useDebounceValue } from "@/shared/lib/hooks/useDebounceValue";
import { useDidUpdate } from "@/shared/lib/hooks/useDidUpdate";
import { useState } from "react";
import { useDi } from "./di";

export const useCatalogForm = () => {
  const { getActions } = useDi();
  const { fetchCharacters } = getActions()

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounceValue(searchQuery.toLowerCase(), 400);

  useDidUpdate(() => {
    fetchCharacters(debouncedQuery);
  }, [debouncedQuery]);

  return { searchQuery, setSearchQuery };
};
