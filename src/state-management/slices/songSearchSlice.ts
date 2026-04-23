import { StateCreator } from "zustand";
import { Song } from "../../models/Song";
import flowApiClient from "../../services/flowApiClient";


type SongSearchState =
    | { state: 'idle' }
    | { state: 'searching' }
    | { state: 'finishedWithResults'; searchResults: Song[] }
    | { state: 'finishedNoResult' }
    | { state: 'error' }

const defaultSongSearchState: SongSearchState = { state: 'idle' };


export interface SongSearchSlice {
    searchSongs: (query: string) => Promise<void>;
    songSearchState: SongSearchState;
    resetSongSearchState: () => void;
}

export const createSongSearchSlice: StateCreator<SongSearchSlice> = (set, get) => {
    const songSearchState = defaultSongSearchState;

    const searchSongs = async (query: string) => {
        set({ songSearchState: { state: 'searching'} });

        try {
            const res = await flowApiClient.searchSong(query);
            
            if (res.success) {
                const newSongSearchState: SongSearchState = res.itemCount === 0
                    ? { state: 'finishedNoResult' }
                    : { state: 'finishedWithResults', searchResults: res.searchResults};
                set({
                    songSearchState: newSongSearchState
                })
            } else {
                set({ 
                    songSearchState: { state: 'error'}
                });
            }
        } catch(e) {
            console.log(`${(e as Error).message}`);
            
            set({ 
                songSearchState: { state: 'error'}
            });
        }
    }

    const resetSongSearchState = () => {
        set({
            songSearchState: defaultSongSearchState
        })
    }

    return {
        searchSongs,
        resetSongSearchState,
        songSearchState
    }
};