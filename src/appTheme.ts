import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        kdb: "#030303",
        sane: "#111111",
        saneTransparent: "#111111E6", // E6 - 90% opacity
        aguero: "#181818",
        telli: "#FFFFFF",
        telliTransparent: "#FFFFFF33", // 33 - 20% opacity
        marcelo: "#3C3C3C",
        raze: "#68B439",
        debit: "#FD5273",
    }
}

const textStyles = {
    blaze: {
        fontSize: "24px",
        fontWeight: "normal",
    },
    orion: {
        fontSize: "16px",
        fontWeight: "normal",
    },
    hush: {
        fontSize: "12px",
        fontWeight: "normal",
    },
    tiny: {
        fontSize: "8px",
        fontWeight: "normal",
    }
}

const appTheme = extendTheme({
    colors,
    textStyles,
    styles: {
        global: {
            body: {
                background: "palette.kdb",
                color: "palette.telli",
            }
        }
    },
})

export default appTheme;