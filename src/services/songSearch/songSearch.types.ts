export interface SongSearchItem {
    id: string;
    title: string;
    artistStr: string;
}

interface SongSearchSuccess {
    success: true;
    itemCount: number;
    searchResults: SongSearchItem[];
}

interface SongSearchFailure {
    success: false;
    debug: object;
}

export type SearchSongResponse  = SongSearchSuccess | SongSearchFailure;