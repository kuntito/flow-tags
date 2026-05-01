import { create } from "zustand";
import { createSongSearchSlice, SongSearchSlice } from "./slices/songSearchSlice";
import { createSongTagSlice, SongTagSlice } from "./slices/songTagSlice";


type AppStore = SongSearchSlice & SongTagSlice;

const useAppStore = create<AppStore>()(
    (...args) => {
        const songSearchSlice = createSongSearchSlice(...args);
        const songTagSlice = createSongTagSlice(...args);

        return {
            ...songSearchSlice,
            ...songTagSlice,
        }
    }
);

export default useAppStore;