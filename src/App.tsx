import { Box } from "@chakra-ui/react";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";


function App() {

    return (
        <Box
            w={"100vw"}
            h={"100vh"}
            display={"flex"}
            flexDirection={"column"}
        >
            <AppHeader />
            <AppContent />
        </Box>
    );
}

export default App;
