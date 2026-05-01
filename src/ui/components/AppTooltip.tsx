import { Tooltip, TooltipProps } from "@chakra-ui/react"


export const AppTooltip = ({
    label,
    children,
    ...rest
}: TooltipProps) => {
    return <Tooltip
        label={label}
        bg={"palette.saneTransparent"}
        borderRadius={"8px"}
        px={"8px"}
        py={"4px"}
        sx={{
            fontSize: "10px",
            fontWeight: "normal",
            fontFamily: "monospace",
        }}
        {...rest}
    >
        {children}
    </Tooltip>
}