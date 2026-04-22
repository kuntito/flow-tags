import { Center, Text } from "@chakra-ui/react"


const SongSearchNoResultsIndicator = () => {
    return (
        <Center
            w={"100%"}
            h={"100%"}
        >
            <Text textStyle={"orion"}>
                couldn't find it.
            </Text>
        </Center>
    )
}

export default SongSearchNoResultsIndicator