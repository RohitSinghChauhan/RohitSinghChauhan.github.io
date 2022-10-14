import { Box, Flex, Text, Stack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box id="about_section" w='70vw' m='auto'>
            <Flex w='100%' h='60vh' direction='column' justifyContent='center' alignItems='center'>
                <Stack w={{ lg: '62vw', md: '80vw', sm: '90vw' }} justifyContent='center' alignItems='center'>
                    <Text as='b' color='rgb(64, 112, 244)' fontSize='2.3rem'>About</Text>
                    <Text color='blackAlpha.800' fontSize='1.9rem'>Rohit Singh</Text>
                    <Text color='blackAlpha.900' textAlign='center'>
                        Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.
                    </Text>
                    <Text color='blackAlpha.800' letterSpacing={1}>Drop a mail - Rohitsinghmadan@gmail.com</Text>
                </Stack>
            </Flex>
        </Box>
    )
}

export default About