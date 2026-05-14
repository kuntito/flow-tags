import { Song } from "../../models/Song";
import ItemList from "./AppItemList";
import SongLI from "./SongLI";

interface Props {
    songsToTag: Song[];
}

const SongList = ({songsToTag}: Props) => {
    return (
        <ItemList
            data={songsToTag}
            renderItem={(item, idx) => (
                <SongLI 
                    key={idx}
                    song={item}
                />
            )}
            gap="16px"
            px={{
                base: "24px"
            }}
            edgePadding={8}
        />
    )
}

export default SongList