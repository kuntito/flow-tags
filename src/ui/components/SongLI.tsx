import { HStack, VStack, Text, Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react';
import { Song } from '../../models/Song';
import { AddTagIcon } from './appIcons/AddTagIcon';
import AppIconButton from './AppIconButton';
import TagSongDropdown from './TagSongDropdown';
import SongTagBadgeRow from './songTags/SongTagBadgeRow';
import EmptySongTagBadge from './songTags/EmptySongTagBadge';
import { useState } from 'react';
import { SongTagType } from '../../models/SongTagType';


interface Props {
    song: Song;
}


const SongLI = ({ song }: Props) => {
    // when i add song tags, i don't want to refetch the song to reflect the new UI state
    // since the add function return onSuccess boolean,
    // once i receive that, i'd manually modify the list of song tags
    const [songTagsLocal, setSongTagsLocal] = useState(song.tags);
    const onSongTagAdded = (songTag: SongTagType) => {
        const tagAlreadyExists = songTagsLocal.some(
            t => t.tagId === songTag.tagId
        )
        if (tagAlreadyExists) return;

        setSongTagsLocal([...songTagsLocal, songTag]);
    }

    const { 
        isOpen: isDropdownOpen, 
        onOpen: showDropdownMenu, 
        onClose: hideDropdownMenu 
    } = useDisclosure();
    
    return <HStack
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
                songTagsLocal.length === 0 ?
                <EmptySongTagBadge /> :                
                <SongTagBadgeRow
                    songTags={songTagsLocal} 
                    w={"100%"}
                />
            }
        </VStack>
        <Menu
            isOpen={isDropdownOpen}
            onClose={hideDropdownMenu}
        >
            <MenuButton
                as={AppIconButton}
                icon={<AddTagIcon boxSize={"24px"}/>}
                iconColor='palette.isco'
                iconColorWhenHovered='palette.telli'
                onClick={showDropdownMenu}
            />
            <MenuList
                bg={"palette.aguero"}
                border={"none"}
                px={0}
                display={"flex"}
                justifyContent={"center"}
            >
                <TagSongDropdown
                    songId={song.id}
                    songTitle={song.title}
                    hideDropdownMenu={hideDropdownMenu}
                    onSongTagAdded={onSongTagAdded}
                    // border={"1px solid green"}
                    w={"100%"}
                />
            </MenuList>
        </Menu>
    </HStack>
}

export default SongLI