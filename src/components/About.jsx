import { Box, Flex, Text, Stack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box id="about_section" w={{ base: '100%', lg: '80%', md: '100%', sm: '100%' }} m='auto'>
            <Flex w='100%' h={{ base: "33vh", lg: '35vh', md: '50vh', sm: '38vh' }} direction='column' justifyContent='center' alignItems='center'>
                <Stack spacing={{ base: '2', lg: '2', md: '1', sm: '0' }} w={{ base: '100%', lg: '55vw', md: '95vw', sm: '90vw' }} justifyContent='center' alignItems='center'>
                    <Text as='b' color='rgb(64, 112, 244)' letterSpacing='0.15rem' fontSize={{ base: '1.9rem', lg: '2.1rem', md: '2.7rem', sm: '2.4rem' }}>About</Text>
                    <Text color='blackAlpha.800' fontSize={['1.7rem', '1.9rem', '1.9rem', '1.9rem']} display={['none', 'inline-block', 'inline-block', 'inline-block']}>Rohit Singh</Text>
                    <Text color='blackAlpha.900' textAlign='center' fontSize={{ base: '1rem', lg: '1rem', md: '1.2rem', sm: '1.1rem', xl: '1.3rem' }}>
                        Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.
                    </Text>
                    <Text color='blackAlpha.800' letterSpacing={1}>Drop a mail - Rohitsinghmadan@gmail.com</Text>
                </Stack>
            </Flex>
        </Box >
    )
}

export default About