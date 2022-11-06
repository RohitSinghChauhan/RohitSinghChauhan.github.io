import React from 'react';
import Calendar from './Calendar';
import { Box, Stack, Text } from '@chakra-ui/react';
import Stats from './Stats';

const GithubPage = () => {
    return (
        <Stack width='100%' h={['30vh', '36vh', '50vh', '80vh']} justifyContent='space-evenly' alignItems='center'>
            <Box display={['none', 'none', 'inline-block', 'inline-block', 'inline-block']}>
                <Text color='rgb(64, 112, 244)' textAlign='center' fontSize={['1.2rem', '1.2rem', '1.7rem', '1.8rem']}>Github Statitics</Text>
                <Stats />
            </Box>

            <Box>
                <Text color='rgb(64, 112, 244)' textAlign='center' fontSize={['1.2rem', '1.5rem', '1.7rem', '1.8rem']} m='auto'>Github Calendar</Text>
                <Calendar />
            </Box>
        </Stack>
    )
}

export default GithubPage