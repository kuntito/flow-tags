import { Song } from "../models/Song";
import ItemList from "./AppItemList";
import SongToTagLI from "./SongToTagLI";

interface Props {
    songsToTag: Song[];
}

const SongsToTagList = ({songsToTag}: Props) => {
    return (
        <ItemList
            data={songsToTag}
            renderItem={(item, idx) => (
                <SongToTagLI 
                    key={idx}
                    song={item}
                />
            )}
            gap="16px"
            edgePadding={8}
        />
    )
}

export default SongsToTagList