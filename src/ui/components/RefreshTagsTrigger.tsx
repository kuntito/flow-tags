import useAppStore from "../../state-management/appStore"
import { SyncIcon } from "./appIcons/SyncIcon"
import { AppTooltip } from "./AppTooltip"


const RefreshTagsTrigger = () => {
    const refreshSongTagTypes = useAppStore(s => s.refreshSongTagTypes);
    return (
        <AppTooltip
            label={"refresh tag types"}
            placement="auto"
        >
            <SyncIcon
                color={"palette.telli"}
                cursor={"pointer"}
                opacity={0}
                _hover={{
                    opacity: 1
                }}
                _active={{
                    opacity: 0.5,
                }}
                onClick={refreshSongTagTypes}
            />
        </AppTooltip>
    )
}

export default RefreshTagsTrigger