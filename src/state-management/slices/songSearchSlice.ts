import { StateCreator } from "zustand";
import { Song } from "../../models/Song";


type SongSearchState =
    | { state: 'idle' }
    | { state: 'searching' }
    | { state: 'finishedWithResults'; searchResults: Song[] }
    | { state: 'finishedNoResult' }
    | { state: 'error' }

const defaultSongSearchState: SongSearchState = { state: 'idle' };


export interface SongSearchSlice {
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    clearSearchQuery: () => void;
    songSearchState: SongSearchState;
    resetSongSearchState: () => void;
}

export const createSongSearchSlice: StateCreator<SongSearchSlice> = (set, get) => {
    const searchQuery = '';
    const songSearchState = defaultSongSearchState;

    const setSearchQuery = (newQuery: string) => {
        set({
            searchQuery: newQuery
        })
    };

    const clearSearchQuery = () => {
        set({ searchQuery: '' });
    };

    const resetSongSearchState = () => {
        set({
            songSearchState: defaultSongSearchState
        })
    }

    return {
        searchQuery,
        setSearchQuery,
        clearSearchQuery,
        resetSongSearchState,
        songSearchState
    }
};