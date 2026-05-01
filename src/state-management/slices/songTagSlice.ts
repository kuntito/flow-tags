import { StateCreator } from "zustand";
import { SongTagType } from "../../models/SongTagType";
import flowApiClient from "../../services/flowApiClient";
import { toSongTagType } from "../../services/fetchSongTagTypes/fetchSongTags.helpers";

type FetchSongTagState = 
    | { state: 'idle' }
    | { state: 'fetching'}
    | { state: 'noTagsFound'}
    | { state: 'tagsFetchedSuccess', songTagTypes: SongTagType[] }
    | { state: 'error' };

const defaultFetchSongTagState: FetchSongTagState = { state: 'idle' };

export interface SongTagSlice {
    fetchSongTagTypes: () => Promise<void>;
    fetchSongTagState: FetchSongTagState;
    refreshSongTagTypes: () => Promise<void>;
}

export const createSongTagSlice: StateCreator<SongTagSlice> = (set, get) => {
    const fetchSongTagState = defaultFetchSongTagState;

    const fetchFromApi = async () => {
        set({
            fetchSongTagState: { state: 'fetching' }
        });

        try {

            const res = await flowApiClient.fetchSongTagTypes();
            
            if (res.success) {
                const newState: FetchSongTagState = res.tagCount === 0
                    ? { state: 'noTagsFound' }
                    : { 
                        state: 'tagsFetchedSuccess',
                        songTagTypes: res.songTagTypes.map(toSongTagType)
                    };

                set({
                    fetchSongTagState: newState
                });
            } else {
                set({
                    fetchSongTagState: { state: 'error' }
                });
            }
        } catch (e) {
            set({
                fetchSongTagState: {
                    state: 'error'
                }
            })            
        }
    };

    const fetchSongTagTypes = async () => {
        const currentState = get().fetchSongTagState;

        // TODO might need to cache this in browser storage
        if (currentState.state === 'tagsFetchedSuccess') {
            return;
        }

        await fetchFromApi();
    }
    
    const refreshSongTagTypes = async () => {
        await fetchFromApi();
    }

    return {
        fetchSongTagTypes,
        fetchSongTagState,
        refreshSongTagTypes,
    };
}