import { HStack, VStack, Text, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { Song } from '../../models/Song';
import { AddTagIcon } from './appIcons/AddTagIcon';
import AppIconButton from './AppIconButton';
import TagSongDropdown from './TagSongDropdown';


interface Props {
    song: Song;
}


const SongToTagLI = ({ song }: Props) => (
    <HStack
        justifyContent={"space-between"}
        w={"434px"}
    >
        <VStack
            alignItems={"start"}
            w={"100%"}
            gap={0}
        >
            <Text textStyle={"orion"}>
                {song.title}
            </Text>
            <Text textStyle={"hush"}>
                {song.artistStr}
            </Text>
        </VStack>
        <Menu>
            <MenuButton
                as={AppIconButton}
                icon={<AddTagIcon boxSize={"24px"}/>}
                iconColor='palette.isco'
                iconColorWhenHovered='palette.telli'
                onClick={() => {}}
            />
            <MenuList
                bg={"palette.aguero"}
                border={"none"}
                px={0}
                display={"flex"}
                justifyContent={"center"}
            >
                <TagSongDropdown
                    // border={"1px solid green"}
                    w={"100%"}
                />
            </MenuList>
        </Menu>
    </HStack>
)

export default SongToTagLI