import { Box, Flex, Text, Stack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box id="about_section" w='70vw' m='auto'>
            <Flex w='100%' h={{ lg: '60vh', md: '50vh', sm: '40vh' }} direction='column' justifyContent='center' alignItems='center'>
                <Stack spacing={{ lg: '', md: '1', sm: '1' }} w={{ lg: '62vw', md: '95vw', sm: '90vw' }} justifyContent='center' alignItems='center'>
                    <Text as='b' color='rgb(64, 112, 244)' fontSize={{ lg: '2.3rem', md: '2.7rem', sm: '2.6rem' }}>About</Text>
                    <Text color='blackAlpha.800' fontSize='1.9rem'>Rohit Singh</Text>
                    <Text color='blackAlpha.900' textAlign='center' fontSize={{ lg: '', md: '1.2rem', sm: '1.2rem' }}>
                        Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.
                    </Text>
                    <Text color='blackAlpha.800' letterSpacing={1}>Drop a mail - Rohitsinghmadan@gmail.com</Text>
                </Stack>
            </Flex>
        </Box>
    )
}

export default About