import { IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    iconColor: string;
    iconColorWhenHovered?: string;
    onClick: () => void;
}


/**
 * a wrapper around ChakraUI's `IconButton`.
 * allows you to define the icon color when hovered.
 * 
 * it requires the icon to be an `svg`
 * the icons created with 
 * 
 * `import { createIcon } from "@chakra-ui/react";`
 * 
 * are rendered as svg.
 */
const AppIconButton = ({
    icon,
    iconColor,
    iconColorWhenHovered = iconColor,
    onClick
}: Props) => {
    return <IconButton
        aria-label="some icon"
        variant={"ghost"} 
        icon={icon}
        _hover={{ 
            bg: "palette.telliTransparent",
        }}
        sx={{
            '& svg': {
                color: iconColor,
            },
            '&:hover svg': {
                color: iconColorWhenHovered,
            }
        }}
        onClick={onClick}
    />
}

export default AppIconButton;