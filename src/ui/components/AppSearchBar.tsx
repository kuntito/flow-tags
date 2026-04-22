import { Center, HStack, Input } from '@chakra-ui/react'

import React, { useState } from 'react'
import { SearchIcon } from './appIcons/SearchIcon'
import AppIconButton from './AppIconButton';
import { CloseIcon } from './appIcons/CloseIcon';

const AppSearchBar = () => {
    const [query, setQuery] = useState('');

    const clearText = () => setQuery("")

    return (
        <HStack
            bg={"palette.aguero"}
            borderRadius={"24px"}
            h={"40px"}
            ps={"16px"}
            pe={"10px"}
            w={"444px"}
        >
            <SearchIcon color={"palette.telli"}/>
            <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                variant={'unstyled'}
            />
            <Center 
                boxSize={"24px"}
            >
                {query && (
                    <AppIconButton
                        icon={<CloseIcon />}
                        iconColor='palette.telli'
                        onClick={clearText}
                    />
                )}
            </Center>
        </HStack>
    )
}

export default AppSearchBar;