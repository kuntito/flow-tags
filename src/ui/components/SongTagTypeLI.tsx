import { HStack, Text, Tooltip } from "@chakra-ui/react"
import { TagIcon } from "./appIcons/TagIcon"
import { SongTagType } from "../../models/SongTagType"
import { AppTooltip } from "./AppTooltip";

interface Props {
    songTagType: SongTagType;
    itemPaddingX: number;
}

const SongTagTypeLI = ({ 
    songTagType,
    itemPaddingX 
}: Props) => {
    return (
        <HStack
                w={"100%"}
                py={"3px"}
                px={`${itemPaddingX}px`}
                gap={"10px"}
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