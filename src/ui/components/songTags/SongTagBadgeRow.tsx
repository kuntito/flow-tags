import { HStack, StackProps } from "@chakra-ui/react"
import { SongTagType } from "../../../models/SongTagType"
import SongTagBadge from "./SongTagBadge";

interface Props extends StackProps {
    songTags: SongTagType[];
}

const SongTagBadgeRow = ({ songTags, ...stackProps }: Props) => {
    return (
        <HStack
            gap={"10px"}
            {...stackProps}
        >
            {songTags.map(st => 
                <SongTagBadge tagName={st.tagName} />
            )}
        </HStack>
    )
}

export default SongTagBadgeRow