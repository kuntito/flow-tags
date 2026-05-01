import { Box, BoxProps, Center, Spinner, Text } from "@chakra-ui/react";
import useAppStore from "../../state-management/appStore";
import ItemList from "./AppItemList";
import SongTagTypeLI from "./SongTagTypeLI";
import { useEffect } from "react";

interface Props extends BoxProps {
    // padding is passed cause it needs to match parent header padding
    paddingX: number;
}

const TagSongDropdownContent = ({ paddingX, ...boxProps }: Props ) => {
    const fetchSongTagState = useAppStore(s => s.fetchSongTagState);
    const fetchSongTagTypes = useAppStore(s => s.fetchSongTagTypes);

    useEffect(() => {
        fetchSongTagTypes();
    }, []);
    
    const renderContent = () => {
        
        switch(fetchSongTagState.state) {
            case 'idle':
                return null;
            case 'fetching':
                return (
                    <Center
                        flex={1}
                    >
                        <Spinner
                            boxSize={"16px"}
                        />
                    </Center>
                );
            case 'noTagsFound':
                return <Text>no tags found</Text>
            case 'tagsFetchedSuccess':
                return(
                    <ItemList 
                        data={fetchSongTagState.songTagTypes}
                        renderItem={(item, idx) => (
                            <SongTagTypeLI
                                key={idx}
                                songTagType={item}
                                itemPaddingX={paddingX}
                            />
                        )}
                        gap="6px"
                        edgePadding={0}
                        overflowY={"auto"}
                        maxH={"120px"}
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
                    />
                ) 
            case 'error':
                return
        }
    }

    return <Box 
        display={"flex"}
        {...boxProps }
    >
        {renderContent()}
    </Box>
}

export default TagSongDropdownContent