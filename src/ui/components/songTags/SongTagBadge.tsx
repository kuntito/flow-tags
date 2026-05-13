import { Center, Text } from "@chakra-ui/react";

interface Props {
    tagName: string;
}

const SongTagBadge = ({ tagName }: Props) => {
    return (
        <Center
            bg={"palette.marcelo"}
            borderRadius={100}
            paddingX={"8px"}
            pt={"4px"}
            pb={"5px"} // font padding makes text bottom-heavy, this offsets it
        >
            <Text
                textStyle={"mono"}
                lineHeight={1}
                letterSpacing={0.5}
            >
                {tagName}
            </Text>
        </Center>
    )
}

export default SongTagBadge