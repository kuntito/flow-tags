import { Song } from "../../models/Song";
import { SongWithTagsItemAPI } from "./songSearch.types";


export const toSong = (
    item: SongWithTagsItemAPI
): Song => ({
    id: item.id,
    title: item.title,
    artistStr: item.artistStr,
    tags: item.songTags.map(swt => ({
        tagId: swt.tagId,
        tagName: swt.tagName,
        tagDescription: swt.tagDescription
    }))
})