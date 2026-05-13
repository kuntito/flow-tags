import { HStack, VStack, Text, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { Song } from '../../models/Song';
import { AddTagIcon } from './appIcons/AddTagIcon';
import AppIconButton from './AppIconButton';
import TagSongDropdown from './TagSongDropdown';
import SongTagBadgeRow from './songTags/SongTagBadgeRow';
import EmptySongTagBadge from './songTags/EmptySongTagBadge';


interface Props {
    song: Song;
}


const SongLI = ({ song }: Props) => (
    <HStack
        justifyContent={"space-between"}
        w={"434px"}
    >
        <VStack
            alignItems={"start"}
            w={"100%"}
            gap={"8px"}
            >
            <VStack
                gap={0}
                w={"100%"}
                alignItems={"start"}
            >
                <Text textStyle={"orion"}>
                    {song.title}
                </Text> 
                <Text textStyle={"hush"}>
                    {song.artistStr}
                </Text>
            </VStack>
            { 
                song.tags.length === 0 ?
                <EmptySongTagBadge /> :                
                <SongTagBadgeRow
                    songTags={song.tags} 
                    w={"100%"}
                />
            }
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

export default SongLI