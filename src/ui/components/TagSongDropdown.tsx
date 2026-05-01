import { Box, HStack, StackProps, Text, VStack } from "@chakra-ui/react";
import { SongTagType } from "../../models/SongTagType";
import RefreshTagsTrigger from "./RefreshTagsTrigger";
import TagSongDropdownContent from "./TagSongDropdownContent";
import { AddTagIcon } from "./appIcons/AddTagIcon";

interface Props extends StackProps {

}

const TagSongDropdown = ({
    ...stackProps
 }: Props) => {
    /**
     * header and tag list items share the same horizontal padding
     * header padding is declared here, but tag LI padding are nested within item list.
     * 
     * hence, the top-level declaration.
     */
    const paddingX = 10;


    return (
        <VStack
            bg={"palette.aguero"}
            borderRadius={"10px"}
            pt={"4px"}
            w={"176px"}
            minH={"80px"}
            maxH={"160px"}
            gap={"4px"}
            {...stackProps}
        >
            <HStack
                w={"100%"}
                px={`${paddingX}px`}
            >
                <AddTagIcon />
                <Text flex={1} textStyle={"hush"}>add to</Text>
                <RefreshTagsTrigger />
            </HStack>
            <Box h={"4px"} />
            <TagSongDropdownContent
                paddingX={paddingX}
                w={"100%"}
                flex={1}
            />
            <Box h={"4px"} />
        </VStack>
    )
}

export default TagSongDropdown