import { create } from "zustand";
import { Song } from "../models/Song";


type SongSearchState =
    | { state: 'idle' }
    | { state: 'searching' }
    | { state: 'finishedWithResults'; searchResults: Song[] }
    | { state: 'finishedNoResult' }
    | { state: 'error' }


interface appStore {
    songSearchState: SongSearchState;
    resetSongSearchState: () => void;
}


const useAppStore = create<appStore>((set) => {
    const songSearchState: SongSearchState = {
        state: "idle",
    };

    const resetSongSearchState = () => {
        set({
            songSearchState: { state: 'idle'}
        });
    }

    return {
        songSearchState: songSearchState,
        resetSongSearchState: resetSongSearchState,
    }
})

export default useAppStore;