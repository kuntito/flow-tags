import { Song } from "../../models/Song";
import { SongSearchItem } from "./songSearch.types";

export const toSong = (
    item: SongSearchItem
): Song => ({
    id: item.id,
    title: item.title,
    artistStr: item.artistStr,
})