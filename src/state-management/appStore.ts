import { create } from "zustand";
import { SongSearchItem } from "../services/types/songSearch.types";


type SongSearchState =
    | { state: 'idle' }
    | { state: 'searching' }
    | { state: 'finishedWithResults'; searchResults: SongSearchItem[] }
    | { state: 'finishedNoResult' }
    | { state: 'error' }


interface appStore {
    songSearchState: SongSearchState;
}


const useAppStore = create<appStore>((set) => {
    const songSearchState: SongSearchState = {
        state: "idle"
    };

    return {
        songSearchState: songSearchState,
    }
})

export default useAppStore;