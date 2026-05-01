import { envConfig } from "../config/envConfig";
import { FetchSongTagTypesResponse } from "./fetchSongTagTypes/fetchSongTags.types";
import { SearchSongResponse } from "./songSearch/songSearch.types";

const BASE_URL = envConfig.VITE_FLOW_API_BASE_URL;

const flowApiClient = {
    searchSong: async (query: string): Promise<SearchSongResponse> => {
        // URLs can't contain certain characters, i.e. space - " "

        // if a URL contains "chill vibes", 
        // it's expected to be encoded as "chill%20vibes"

        // without this, unintended things may happen.
        const encodedQuery = encodeURIComponent(query);
        const url = `${BASE_URL}/api/flow/search?q=${encodedQuery}`;
        const res = await fetch(url);
        return res.json();
    },
    fetchSongTagTypes: async (): Promise<FetchSongTagTypesResponse> => {
        const url = `${BASE_URL}/api/flow/song-tag-types`;
        const res = await fetch(url);

        return res.json();
    }
}

export default flowApiClient;