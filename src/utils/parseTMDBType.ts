import type { MediaType } from "../types";

export function parseTMDBType(urlType: string | undefined): MediaType | null {
  switch (urlType?.toLowerCase()) {
    case 'movie': return 'MOVIE';
    case 'tv': return 'TV';
    default: return null;
  }
}