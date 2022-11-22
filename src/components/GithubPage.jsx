import React from 'react';
import Calendar from './Calendar';
import { Box, Center, Stack, Text } from '@chakra-ui/react';
import Stats from './Stats';

const GithubPage = () => {
    return (
        <Stack spacing='7rem' width='100%' display={['none', 'none', 'inline-block', 'inline-block', 'inline-block']} justifyContent='space-around' alignItems='center'>
            <Box>
                <Text color='rgb(64, 112, 244)' textAlign='center' fontSize={['1.2rem', '1.2rem', '1.7rem', '1.8rem']}>Github Statitics</Text>
                <Center><Stats /></Center>
            </Box>

            <Box w={['80%', '90%', '100%', '100%']}>
                <Text color='rgb(64, 112, 244)' textAlign='center' fontSize={['1.2rem', '1.5rem', '1.7rem', '1.8rem']} m='auto'>Github Calendar</Text>
                <Calendar />
            </Box>
        </Stack>
    )
}
export default GithubPage