import { Image, ImageProps } from '@chakra-ui/react'
import React from 'react'

const FlowTagsLogo = (imageProps: ImageProps) => {
  return (
    <Image 
        src='/ic_flow-tags-logo.svg'
        {...imageProps}
    />
  )
}

export default FlowTagsLogo;