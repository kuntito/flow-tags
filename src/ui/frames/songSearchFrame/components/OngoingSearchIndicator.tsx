import { Center, Spinner } from "@chakra-ui/react"

const OngoingSearchIndicator = () => {
    return (
        <Center 
            w={"100%"}
            h={"100%"}
        >
            <Spinner />
        </Center>
    )
}

export default OngoingSearchIndicator