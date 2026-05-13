import { dummySongTag, SongTagType } from "./SongTagType";

export interface Song {
    id: string;
    title: string;
    artistStr: string;
    tags: SongTagType[];
}

export const dummySong: Song = {
    id: "0",
    title: "Cold War",
    artistStr: "Llona (feat. FAVE)",
    tags: [
        dummySongTag,
        dummySongTag,
        dummySongTag,
    ]
}


export const dummySongList: Song[] = [
    { 
        id: "0",
        title: "2002",
        artistStr: "Anne-Marie", 
        tags: [
            {
                tagName: "tag",
                tagDescription: "sumn",
            }
        ] 
    },
    { 
        id: "1",
        title: "Too Sad To Cry",
        artistStr: "Sasha Sloan", 
        tags: [
            {
                tagName: "sad",
                tagDescription: "sumn",
            }
        ] 
    },
    { 
        id: "2",
        title: "No Drama",
        artistStr: "Tinashe", 
        tags: [
            
        ] 
    },
    { 
        id: "3",
        title: "Can't Breathe",
        artistStr: "Llona", 
        tags: [
            
        ] 
    },
    { 
        id: "4",
        title: "Champion",
        artistStr: "Elina Stridh", 
        tags: [
            
        ] 
    },
    { 
        id: "5",
        title: "Worst Luck",
        artistStr: "6LACK", 
        tags: [
            
        ] 
    },
    { 
        id: "6",
        title: "Again",
        artistStr: "Sasha Sloan", 
        tags: [
            
        ] 
    },
    { 
        id: "7",
        title: "Deep Ends",
        artistStr: "Ollie", 
        tags: [
            
        ] 
    },
    { 
        id: "8",
        title: "Higher",
        artistStr: "Burna Boy", 
        tags: [
            
        ] 
    },
    { 
        id: "9",
        title: "Drunk in the Bathtub",
        artistStr: "Jessie Murph", 
        tags: [
            
        ] 
    },
    { 
        id: "10",
        title: "Masquerade",
        artistStr: "Elina Stridh", 
        tags: [
            
        ] 
    },
    { 
        id: "11",
        title: "Holy Ghost",
        artistStr: "Omah Lay", 
        tags: [
            
        ] 
    },
    { 
        id: "12",
        title: "Pray",
        artistStr: "Jessie Murph", 
        tags: [
            
        ] 
    },
    { 
        id: "13",
        title: "Monica Lewinsky",
        artistStr: "SAINt JHN", 
        tags: [
            
        ] 
    },
    { 
        id: "14",
        title: "Trophies",
        artistStr: "SAINt JHN", 
        tags: [
            
        ] 
    },
    { 
        id: "15",
        title: "Rara",
        artistStr: "Tml Vibez", 
        tags: [
            
        ] 
    },
    { 
        id: "16",
        title: "365 Days",
        artistStr: "Tml Vibez", 
        tags: [
            
        ] 
    },
    { 
        id: "17",
        title: "Diet Coke",
        artistStr: "Pusha T", 
        tags: [
            
        ] 
    },
    { 
        id: "18",
        title: "Ace Trumpets",
        artistStr: "Clipse", 
        tags: [
            
        ] 
    },
    { 
        id: "19",
        title: "Best Of Me",
        artistStr: "BNXN", 
        tags: [
            
        ] 
    },
]