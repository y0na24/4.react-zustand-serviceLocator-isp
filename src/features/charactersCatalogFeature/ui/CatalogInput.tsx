import { Input } from "@/shared/ui/input";
import { useCatalogForm } from "../useCatalogForm";

export function CatalogInput() {
  const { searchQuery, setSearchQuery } = useCatalogForm();

  return (
    <Input
      placeholder="Find character by name..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
