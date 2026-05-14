export interface SongTagType {
    tagId: number;
    tagName: string;
    tagDescription: string;
}

export const dummySongTag: SongTagType = {
    tagId: 0,
    tagName: "tag",
    tagDescription: "Nigerian songs."
}

export const dummySongTags: SongTagType[] = [
    {
        tagId: 0,
        tagName: "234",
        tagDescription: "Nigerian songs."
    },
    {
        tagId: 1,
        tagName: "top-shelf",
        tagDescription: "songs you rate highly or once rated highly."
    },
    {
        tagId: 2,
        tagName: "tag-2",
        tagDescription: "description 2"
    },
    {
        tagId: 3,
        tagName: "tag-3",
        tagDescription: "description 3"
    },
    {
        tagId: 4,
        tagName: "tag-4",
        tagDescription: "description 4"
    },
    {
        tagId: 5,
        tagName: "tag-5",
        tagDescription: "description 5"
    },
]