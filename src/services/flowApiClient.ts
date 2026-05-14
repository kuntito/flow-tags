import { envConfig } from "../config/envConfig";
import { AddTagToSongResponse } from "./addTagToSongs/addTagToSong.types";
import { FetchSongTagTypesResponse } from "./fetchSongTagTypes/fetchSongTags.types";
import { SongWithTagsSearchResponse } from "./songSearch/songSearch.types";

const BASE_URL = envConfig.VITE_FLOW_API_BASE_URL;

const flowApiClient = {
    searchSong: async (query: string): Promise<SongWithTagsSearchResponse> => {
        // URLs can't contain certain characters, i.e. space - " "

        // if a URL contains "chill vibes", 
        // it's expected to be encoded as "chill%20vibes"

        // without this, unintended things may happen.
        const encodedQuery = encodeURIComponent(query);
        const url = `${BASE_URL}/api/flow/search-w-tags?q=${encodedQuery}`;
        const res = await fetch(url);
        return res.json();
    },
    fetchSongTagTypes: async (): Promise<FetchSongTagTypesResponse> => {
        const url = `${BASE_URL}/api/flow/song-tag-types`;
        const res = await fetch(url);

        return res.json();
    },
    addTagToSong: async (
        tagId: number,
        songId: number,
    ): Promise<AddTagToSongResponse> => {
        const url = `${BASE_URL}/api/flow/song/${songId}/tag`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tagId: tagId })
        });
        return res.json();
    }
}

export default flowApiClient;