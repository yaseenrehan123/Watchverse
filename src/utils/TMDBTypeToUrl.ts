import type { TMDBFetchType } from "../types";

export function TMDBTypeToUrl(type: TMDBFetchType): string {
  return type.toLowerCase(); // 'MOVIE' => 'movie', etc.
}