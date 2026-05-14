export interface SongTagTypeAPI {
    tagId: number;
    tagName: string;
    tagDescription: string;
}

interface FetchSongTagsSuccess {
    success: true;
    tagCount: number;
    songTagTypes: SongTagTypeAPI[];
}

interface FetchSongTagsFailure {
    success: false;
    debug: object;
}

export type FetchSongTagTypesResponse = FetchSongTagsSuccess | FetchSongTagsFailure;