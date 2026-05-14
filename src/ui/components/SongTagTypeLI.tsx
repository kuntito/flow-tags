import { HStack, Text, Tooltip, useToast } from "@chakra-ui/react"
import { TagIcon } from "./appIcons/TagIcon"
import { SongTagType } from "../../models/SongTagType"
import { AppTooltip } from "./AppTooltip";
import useAppStore from "../../state-management/appStore";
import appToastConfig from "../../config/toastConfig";

interface Props {
    songId: number;
    songTitle: string;
    songTagType: SongTagType;
    itemPaddingX: number;
    hideDropdownMenu: () => void;
    onSongTagAdded: (songTag: SongTagType) => void;
}

const SongTagTypeLI = ({ 
    songId,
    songTitle,
    songTagType,
    itemPaddingX,
    hideDropdownMenu,
    onSongTagAdded,
}: Props) => {
    const toast = useToast();

    const addTagToSong = useAppStore(s => s.addTagToSong);

    const handleAddTagToSong = async () => {
        hideDropdownMenu()

        const isTagAdded = await addTagToSong(
            songTagType.tagId,
            songId
        )
        if (isTagAdded) {
            showTagAddedToast();
            onSongTagAdded(songTagType);
        }
    }
    
    const showTagAddedToast = () => {
        const tagAddedMessage = `'${songTitle}' added to #${songTagType.tagName}`;
        toast({
            ...appToastConfig,
            description: tagAddedMessage,
            status: "success",
        });
    }

    return (
        <HStack
            w={"100%"}
            py={"3px"}
            px={`${itemPaddingX}px`}
            gap={"10px"}
            cursor={"pointer"}
            onClick={handleAddTagToSong}
            sx={{
                '&:hover': {
                    bg: 'palette.marcelo'
                },
                '&:hover svg': {
                    color: 'palette.telli'
                }
            }}
        >
            <TagIcon color={"palette.marcelo"}/>
            <AppTooltip
                label={songTagType.tagDescription}
                placement="auto"
                >
                <Text
                    textStyle="hush"
                    cursor={"pointer"}
                    maxW={"100%"}
                >
                    {songTagType.tagName}
                </Text>
            </AppTooltip>
        </HStack>
    )
}

export default SongTagTypeLI