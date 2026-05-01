import { Song } from "../../models/Song";
import { SongSearchItemAPI } from "./songSearch.types";

export const toSong = (
    item: SongSearchItemAPI
): Song => ({
    id: item.id,
    title: item.title,
    artistStr: item.artistStr,
})