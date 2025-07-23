import type { MediaType } from "../types";

export function TMDBTypeToUrl(type: MediaType): string {
  return type.toLowerCase(); // 'MOVIE' => 'movie', etc.
}