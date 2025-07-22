import type { TMDBFetchType } from "../types";

export function parseTMDBType(urlType: string | undefined): TMDBFetchType | null {
  switch (urlType?.toLowerCase()) {
    case 'movie': return 'MOVIE';
    case 'tv': return 'TV';
    default: return null;
  }
}