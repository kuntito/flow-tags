import { Divider, HStack, VStack } from "@chakra-ui/react"
import FlowTagsLogo from "./FlowTagsLogo";
import AppSearchBar from "./AppSearchBar";

const AppHeader = () => {
    return <VStack
        gap={0}
    >
        <HStack
            w={"100%"}
            h={"64px"}
            px={"24px"}
            justifyContent={"space-between"}
        >
            <FlowTagsLogo />
            <AppSearchBar />
            {/* invisible logo to balance left logo and center search bar */}
            <FlowTagsLogo opacity={0}/>
        </HStack>
        <Divider bg={"palette.marcelo"} height={0.4}/>
    </VStack>
}

export default AppHeader;