import { Flex, FlexProps } from "@chakra-ui/react";
import SongSearchFrame from "../frames/songSearchFrame/SongSearchFrame";



const AppContent = (props: FlexProps) => {
    return (
        <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="flex-start"
            overflow="auto"
            sx={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    bg: 'palette.kdb',
                },
                '&::-webkit-scrollbar-thumb': {
                    bg: 'palette.marcelo',
                    borderRadius: '4px',
                },
            }}
            {...props}
        >
            {/* TODO this frame being visible should be conditional */}
            <SongSearchFrame />
        </Flex>
    );
}

export default AppContent;