import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        kdb: "#030303",
        sane: "#111111",
        aguero: "#181818",
        telli: "#FFFFFF",
        telliTransparent: "#FFFFFF33",
        marcelo: "#3C3C3C",
        raze: "#68B439",
        debit: "#FD5273",
    }
}

const fontSizes = {
    blaze: "24px",
    modu: "16px"
}

const appTheme = extendTheme({
    colors,
    fontSizes,
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