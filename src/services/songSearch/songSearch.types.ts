export interface SongWithTagsItemAPI {
    id: number;
    title: string;
    artistStr: string;
    songTags: {
        tagId: number;
        tagName: string;
        tagDescription: string;
    }[];
}

interface SongWithTagsSearchSuccess {
    success: true;
    itemCount: number;
    searchResults: SongWithTagsItemAPI[];
}

interface SongWithTagsSearchFailure {
    success: false;
    debug: object;
}

export type SongWithTagsSearchResponse  = 
    | SongWithTagsSearchSuccess
    | SongWithTagsSearchFailure;