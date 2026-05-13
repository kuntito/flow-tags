import { Box, Center, Text, Image, ImageProps } from "@chakra-ui/react"

interface Props extends ImageProps {
    
}


const EmptySongTagBadge = (
    {...imageProps }: Props
) => {
    return (
        <Image 
            src='/aaUnknownHorizontal.png'
            border={"1.5px solid"}
            borderColor={"palette.marcelo"}
            borderRadius={100}
            width={"32px"}
            height={"19px"}
            {...imageProps}
        />
    )
}

export default EmptySongTagBadge;