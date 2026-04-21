import { Flex, FlexProps } from "@chakra-ui/react";


const AppContent = (props: FlexProps) => {
    return (
        <Flex
            w="100%"
            h="100%"
            overflow="auto"
            justifyContent="center"
            alignItems="flex-start"
            {...props}
        >
        </Flex>
    );
}

export default AppContent;