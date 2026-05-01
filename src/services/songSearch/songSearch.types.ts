export interface SongSearchItemAPI {
    id: string;
    title: string;
    artistStr: string;
}

interface SongSearchSuccess {
    success: true;
    itemCount: number;
    searchResults: SongSearchItemAPI[];
}

interface SongSearchFailure {
    success: false;
    debug: object;
}

export type SearchSongResponse  = SongSearchSuccess | SongSearchFailure;