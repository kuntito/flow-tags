import { createIcon } from "@chakra-ui/react";

export const SyncIcon = createIcon({
    displayName: "SyncIcon",
    viewBox: "0 0 16 16",
    defaultProps: {
        color: "white",
    },
    path: [
        <path key="arc" d="M13.5833 8.92469V7.99344C13.5833 4.90813 11.0758 2.40625 7.98334 2.40625C7.14206 2.40522 6.31139 2.59395 5.55315 2.95841C4.79492 3.32286 4.12866 3.85365 3.60396 4.51125M2.3999 7.07375V8.005C2.3999 11.0938 4.90615 13.5938 7.9999 13.5938C8.83878 13.5925 9.66681 13.4042 10.4237 13.0424C11.1805 12.6806 11.8471 12.1545 12.3749 11.5025" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
        <path key="arrows" d="M1 8L2.375 6.625L3.8125 8M15 8L13.625 9.375L12.1875 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
    ],
});
