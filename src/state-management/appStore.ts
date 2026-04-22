import { create } from "zustand";
import { createSongSearchSlice, SongSearchSlice } from "./slices/songSearchSlice";


type AppStore = SongSearchSlice;

const useAppStore = create<AppStore>()(
    (...args) => {
        const songSearchSlice = createSongSearchSlice(...args);

        return {
            ...songSearchSlice,
        }
    }
);

export default useAppStore;