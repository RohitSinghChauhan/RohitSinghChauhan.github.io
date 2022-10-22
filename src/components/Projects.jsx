import { Box, Center, Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
    return (
        <Box id='projects_section' mt={{ lg: '10rem', md: '5rem', sm: '5rem' }} w={{ lg: '70vw', md: '90vw', sm: '99vw' }} m='auto'>
            <Flex w='100%' direction='column' justifyContent='center' alignItems='center'>
                <Center>
                    <Text as='b' fontSize={{ lg: '1.8rem', md: '1rem', sm: '1rem' }} color='rgb(64, 112, 244)'>Projects</Text>
                </Center>

                <Flex w='80%' mt='1.3rem' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h='50vh' w='50%' justifyContent='center' alignItems='center' direction='column'>
                        <Image w='90%' src='https://user-images.githubusercontent.com/100186167/180634476-9259d2c9-1c3f-40eb-9376-3b6b3723d78b.png' />
                    </Flex>

                    <Flex justifyContent='space-evenly' h='50vh' w='50%' direction='column'>
                        <Text as='b' fontSize={{ lg: '1.8rem', md: '1rem', sm: '1rem' }} > Mytheresa</Text>
                        <Text fontSize='1.2rem'>Made a clone of the famous luxury fashion and designer shopping e-commerce website.</Text>
                        <Text as='b' fontSize='1.1rem'>Tech stack- React | HTML | CSS | Chakra-UI</Text>
                        <Flex w='47%' justifyContent='space-between' alignItems='center'>
                            <Button bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Website</Button>
                            <Button bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex w='80%' mt='1.3rem' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h='50vh' w='50%' justifyContent='center' alignItems='center' direction='column'>
                        <Image w='90%' src='https://user-images.githubusercontent.com/100186167/180634476-9259d2c9-1c3f-40eb-9376-3b6b3723d78b.png' />
                    </Flex>

                    <Flex justifyContent='space-evenly' h='50vh' w='50%' direction='column'>
                        <Text as='b' fontSize={{ lg: '1.8rem', md: '1rem', sm: '1rem' }} > Mytheresa</Text>
                        <Text fontSize='1.2rem'>Made a clone of the famous luxury fashion and designer shopping e-commerce website.</Text>
                        <Text as='b' fontSize='1.1rem'>Tech stack- React | HTML | CSS | Chakra-UI</Text>
                        <Flex w='47%' justifyContent='space-between' alignItems='center'>
                            <Button bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Website</Button>
                            <Button bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex w='80%' mt='1.3rem' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h='50vh' w='50%' justifyContent='center' alignItems='center' direction='column'>
                        <Image w='90%' src='https://user-images.githubusercontent.com/100186167/180634476-9259d2c9-1c3f-40eb-9376-3b6b3723d78b.png' />
                    </Flex>

                    <Flex justifyContent='space-evenly' h='50vh' w='50%' direction='column'>
                        <Text as='b' fontSize={{ lg: '1.8rem', md: '1rem', sm: '1rem' }} > Mytheresa</Text>
                        <Text fontSize='1.2rem'>Made a clone of the famous luxury fashion and designer shopping e-commerce website.</Text>
                        <Text as='b' fontSize='1.1rem'>Tech stack- React | HTML | CSS | Chakra-UI</Text>
                        <Flex w='47%' justifyContent='space-between' alignItems='center'>
                            <Button bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Website</Button>
                            <Button bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Box >
    )
}

export default Projects;