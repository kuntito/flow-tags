import { useToast } from "@chakra-ui/react";
import useAppStore from "../../../state-management/appStore"
import SongsToTagList from "../../components/SongsToTagList";
import OngoingSearchIndicator from "./components/OngoingSearchIndicator";

import SongSearchNoResultsIndicator from "./components/SongSearchNoResultsIndicator";
import appToastConfig from "../../../config/toastConfig";
import { useEffect } from "react";


const SongSearchFrame = () => {
    const songSearchState = useAppStore(s => s.songSearchState);
    const resetSongSearchState = useAppStore(s => s.resetSongSearchState);
    const toast = useToast();

    useEffect(() => {
        if (songSearchState.state === 'error') {
            toast({
                ...appToastConfig,
                description: "error occurred",
                status: "error",
            });
            resetSongSearchState();
        }
        
    }, [songSearchState.state])

    switch(songSearchState.state) {
        case 'idle':
            return null;
        case 'searching':
            return <OngoingSearchIndicator />
        case 'finishedNoResult':
            return <SongSearchNoResultsIndicator />
        case 'finishedWithResults':
            return <SongsToTagList songsToTag={songSearchState.searchResults} />
        case 'error':
            return null;
    }

}

export default SongSearchFrame