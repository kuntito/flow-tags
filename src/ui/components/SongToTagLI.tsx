import { HStack, VStack, Text } from '@chakra-ui/react';
import { Song } from '../../models/Song';
import { AddTagIcon } from './appIcons/AddTagIcon';
import AppIconButton from './AppIconButton';


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
        <AppIconButton
            icon={<AddTagIcon boxSize={"24px"}/>}
            iconColor='palette.isco'
            iconColorWhenHovered='palette.telli'
            onClick={() => {}}
        />
    </HStack>
)

export default SongToTagLI