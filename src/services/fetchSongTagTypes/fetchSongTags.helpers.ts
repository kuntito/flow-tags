import { SongTagType } from "../../models/SongTagType";
import { SongTagTypeAPI } from "./fetchSongTags.types";

export const toSongTagType = (
    apiItem: SongTagTypeAPI,
): SongTagType => ({
    tagName: apiItem.tagName,
    tagDescription: apiItem.tagDescription,
});