import { Center, HStack, Input } from '@chakra-ui/react'

import React, { useMemo, useState } from 'react'
import { SearchIcon } from './appIcons/SearchIcon'
import AppIconButton from './AppIconButton';
import { CloseIcon } from './appIcons/CloseIcon';
import { useDebouncedCallback } from 'use-debounce';
import useAppStore from '../../state-management/appStore';


/**
 * when people type, they press multiple keys one after the other.
 * 
 * by default, this would trigger a search on every keystroke.
 * debounce adds a delay after each keystroke.
 *
 * in essence: if i don't receive a new keystroke in `n` milliseconds,
 * i assume the user has stopped typing and execute the search.
 */
const DEBOUNCE_MS = 300;

const AppSearchBar = () => {
    const [query, setQuery] = useState('');

    const searchSongs = useAppStore(s => s.searchSongs);
    const resetSongSearchState = useAppStore(s => s.resetSongSearchState);

    const onQueryChange = (q: string) => {
        if (q.trim()) {
            searchSongs(q);
        } else {
            resetSongSearchState();
        }
    }
    const debouncedSearch = useDebouncedCallback(
        onQueryChange,
        DEBOUNCE_MS
    );
    
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debouncedSearch(value);
    }

    const clearText = () => {
        setQuery("");
        debouncedSearch.cancel();
        resetSongSearchState();
    };

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
                onChange={handleQueryChange}
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