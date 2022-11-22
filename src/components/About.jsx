import { Box, Flex, Text, Stack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box id="about_section" w={{ base: '95%', lg: '100%', md: '100%', sm: '100%' }} m='auto'>
            <Flex w='100%' h={{ base: "44vh", lg: '45vh', md: '45vh', sm: '55vh' }} direction='column' justifyContent='center' alignItems='center'>
                <Stack spacing={{ base: '2', lg: '2', md: '1', sm: '2' }} w={{ base: '100%', lg: '55vw', md: '95vw', sm: '90vw' }} justifyContent='center' alignItems='center'>
                    <Text as='b' color='rgb(64, 112, 244)' letterSpacing='0.15rem' fontSize={{ base: '1.9rem', lg: '2.1rem', md: '2.7rem', sm: '2rem' }}>About</Text>
                    <Text fontSize={['1.7rem', '1.8rem', '1.9rem', '1.9rem']} display={['none', 'inline-block', 'inline-block', 'inline-block']}>Rohit Singh</Text>
                    <Text textAlign='center' fontSize={{ base: '0.9rem', lg: '1.2rem', md: '1.2rem', sm: '1rem', xl: '1.2rem' }}>
                        Observant & detail-oriented aspir ing full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.
                    </Text>
                    <Text fontSize={['0.8rem', '1rem', '1rem', '1rem']} display={['none', 'inline-block', 'inline-block', 'inline-block']} letterSpacing={1}>Drop a mail - Rohitsinghmadan@gmail.com</Text>
                </Stack>
            </Flex>
        </Box >
    )
}

export default About