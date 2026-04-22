import { Flex, FlexProps } from "@chakra-ui/react";
import SongSearchFrame from "../frames/songSearchFrame/SongSearchFrame";



const AppContent = (props: FlexProps) => {
    return (
        <Flex
            w="100%"
            h="100%"
            overflow="auto"
            justifyContent="center"
            alignItems="flex-start"
            {...props}
        >
            {/* TODO this frame being visible should be conditional */}
            <SongSearchFrame />
        </Flex>
    );
}

export default AppContent;