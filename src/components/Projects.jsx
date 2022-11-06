import { Box, Center, Flex, Text, Image, Button, Link } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
    return (
        <Box id='projects_section' mt={{ base: '10rem', lg: '2rem', md: '2rem', sm: '1rem' }} w={{ lg: '70vw', md: '90vw', sm: '99vw' }} m='auto'>
            <Flex w='100%' direction='column' justifyContent='center' alignItems='center'>
                <Center>
                    <Text as='b' fontSize={{ base: '1.3rem', lg: '1.8rem', md: '1.7rem', sm: '1.6rem' }} color='rgb(64, 112, 244)'>Projects</Text>
                </Center>

                <Flex w={['100%', '80%', '80%', '80%']} mt='1.3rem' justifyContent='center' alignItems='center' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h='50vh' w='50%' justifyContent='center' alignItems='center' direction='column'>
                        <Image w='90%' src='https://i.postimg.cc/PxqcX3s6/mytheresa.png' />
                    </Flex>

                    <Flex justifyContent='space-evenly' h={['44vh', '50vh', '50vh', '50vh']} w='50%' direction='column'>
                        <Text as='b' fontSize={{ base: '1.4rem', lg: '1.8rem', md: '1rem', sm: '1rem' }} > Mytheresa</Text>
                        <Text fontSize={{ base: '1.1rem', lg: '1.2rem', md: '1.2rem', sm: '1.1rem' }}>Made a clone of the famous luxury fashion and designer shopping e-commerce website.</Text>
                        <Text as='b' fontSize={{ base: '0.9rem', lg: '1.2rem', md: '1.2rem', sm: '1.1rem' }}>Tech stack- React | HTML | CSS | Chakra-UI</Text>
                        <Flex w={['68%', '70%', '63%', '63%']} justifyContent='space-between' alignItems='center'>
                            <Link target='_blank' href='https://mytheresabyrohit.netlify.app/'>
                                <Button w={['4rem', '5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>
                                    Website</Button>
                            </Link>
                            <Link target='_blank' href='https://github.com/RohitSinghChauhan/unknown-lumber-9954'>
                                <Button w={['4rem', '5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex w={['100%', '80%', '80%', '80%']} mt='1.3rem' justifyContent='center' alignItems='center' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h='50vh' w='50%' justifyContent='center' alignItems='center' direction='column'>
                        <Image w='90%' src='https://i.postimg.cc/767BYptn/Screenshot-231.png' />
                    </Flex>

                    <Flex justifyContent='space-evenly' h={['44vh', '50vh', '50vh', '50vh']} w='50%' direction='column'>
                        <Text as='b' fontSize={{ base: '1.4rem', lg: '1.8rem', md: '1rem', sm: '1rem' }} >Nature's Basket</Text>
                        <Text fontSize={{ base: '1.1rem', lg: '1.2rem', md: '1.2rem', sm: '1.1rem' }}>Nature’s Basket is India’s pioneering food destination present through physical retail stores, online portal and a mobile application.</Text>
                        <Text as='b' fontSize={{ base: '0.9rem', lg: '1.2rem', md: '1.2rem', sm: '1.1rem' }}>Tech stack- HTML | CSS | JavaScript | DOM</Text>
                        <Flex w={['68%', '70%', '63%', '63%']} justifyContent='space-between' alignItems='center'>
                            <Link target='_blank' href='https://nature-sbasket.netlify.app/'>
                                <Button w={['4rem', '5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>
                                    Website</Button>
                            </Link>
                            <Link target='_blank' href='https://github.com/Mufadal03/Nature-sBasket-Clone'>
                                <Button w={['4rem', '5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Box >
    )
}

export default Projects;