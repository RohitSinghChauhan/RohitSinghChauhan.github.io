import { Box, Center, Flex, Text, Image, Button, Link } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
    return (
        <Box id='projects_section' mt={{ base: '10rem', lg: '8rem', md: '2rem', sm: '1rem' }} w={{ lg: '70vw', md: '90vw', sm: '99vw' }} m='auto'>
            <Flex w='100%' direction='column' justifyContent='center' alignItems='center'>
                <Center>
                    <Text as='b' fontSize={{ base: '1.3rem', lg: '1.8rem', md: '1.7rem', sm: '1.6rem' }} color='rgb(64, 112, 244)'>Projects</Text>
                </Center>

                <Flex w={['100%', '80%', '80%', '80%']} direction={['column', 'column', 'row', 'row']} mt='1.3rem' justifyContent='center' alignItems='center' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h={['auto', '50vh', '50vh', '50vh']} w={['100%', '100%', '50%', '50%']} justifyContent={['flex-start', 'center', 'center', 'center']} alignItems='center' direction='column'>
                        <Image w='90%' src='https://i.postimg.cc/7Pd7b6Gg/Screenshot-24.png' />
                    </Flex>

                    <Flex justifyContent='space-around' h={['36vh', '46vh', '50vh', '50vh']} w={['80%', '80%', '50%', '50%']} direction='column'>
                        <Text as='b' fontSize={{ base: '1.4rem', lg: '1.8rem', md: '1rem', sm: '1.4rem' }} >Notes App</Text>
                        <Text fontSize={{ base: '.9rem', lg: '1.2rem', md: '1.2rem', sm: '1rem' }}>
                            NotesApp is an note making website, Where a user can Read, Write, Edit & Delete and manage notes online.</Text>
                        <Text as='b' fontSize={{ base: '0.9rem', lg: '1.1rem', md: '1.1rem', sm: '1rem' }}>Tech stack- React | Redux | NodeJs |  | MongoDB | ExpressJs | Chakra-UI</Text>
                        <Flex w={['68%', '45%', '63%', '63%']} justifyContent='space-between' alignItems='center'>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://gleeful-centaur-a09809.netlify.app/'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>
                                    Website</Button>
                            </Link>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://github.com/RohitSinghChauhan/NotesApp'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex w={['100%', '80%', '80%', '80%']} direction={['column', 'column', 'row', 'row']} mt='1.3rem' justifyContent='center' alignItems='center' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h={['auto', '50vh', '50vh', '50vh']} w={['100%', '100%', '50%', '50%']} justifyContent={['flex-start', 'center', 'center', 'center']} alignItems='center' direction='column'>
                        <Image w='90%' src='https://i.postimg.cc/PxqcX3s6/mytheresa.png' />
                    </Flex>

                    <Flex justifyContent='space-around' h={['36vh', '46vh', '50vh', '50vh']} w={['80%', '80%', '50%', '50%']} direction='column'>
                        <Text as='b' fontSize={{ base: '1.4rem', lg: '1.8rem', md: '1rem', sm: '1.4rem' }} > Mytheresa</Text>
                        <Text fontSize={{ base: '.9rem', lg: '1.2rem', md: '1.2rem', sm: '1rem' }}>Made a clone of the famous luxury fashion and designer shopping e-commerce website.</Text>
                        <Text as='b' fontSize={{ base: '0.9rem', lg: '1.1rem', md: '1.1rem', sm: '1rem' }}>Tech stack- React | Node Js | MongoDB | ExpressJs | Chakra-UI</Text>
                        <Flex w={['68%', '45%', '63%', '63%']} justifyContent='space-between' alignItems='center'>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://mytheresa-clone-zeta.vercel.app/'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>
                                    Website</Button>
                            </Link>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://github.com/RohitSinghChauhan/Mytheresa-Clone'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex w={['100%', '80%', '80%', '80%']} direction={['column', 'column', 'row', 'row']} mt='1.3rem' justifyContent='center' alignItems='center' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h={['auto', '50vh', '50vh', '50vh']} w={['100%', '100%', '50%', '50%']} justifyContent={['flex-start', 'center', 'center', 'center']} alignItems='center' direction='column'>
                        <Image w='90%' src='https://camo.githubusercontent.com/3074933f6d16c0127aef5185fe663a4c715437c1ad3fdd66293d7e61dbf528c4/68747470733a2f2f692e6962622e636f2f524363443459712f696d6167652e706e67' />
                    </Flex>

                    <Flex justifyContent='space-around' h={['36vh', '46vh', '50vh', '50vh']} w={['80%', '80%', '50%', '50%']} direction='column'>
                        <Text as='b' fontSize={{ base: '1.4rem', lg: '1.8rem', md: '1rem', sm: '1.4rem' }} >Hubspot</Text>
                        <Text fontSize={{ base: '.9rem', lg: '1.2rem', md: '1.2rem', sm: '1rem' }}>HubSpot is a Cloud-Based CRM, HubSpot is a Software platform which is designed to help company market and sell more effectively.</Text>
                        <Text as='b' fontSize={{ base: '0.9rem', lg: '1.1rem', md: '1.1rem', sm: '1rem' }}>Tech stack- React | NodeJs | Express Js | MongoDB</Text>
                        <Flex w={['68%', '45%', '63%', '63%']} justifyContent='space-between' alignItems='center'>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://hubspot-alpha.vercel.app/'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>
                                    Website</Button>
                            </Link>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://github.com/RohitSinghChauhan/HubSpot.com-Clone'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex w={['100%', '80%', '80%', '80%']} direction={['column', 'column', 'row', 'row']} mt='1.3rem' justifyContent='center' alignItems='center' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h={['auto', '50vh', '50vh', '50vh']} w={['100%', '100%', '50%', '50%']} justifyContent={['flex-start', 'center', 'center', 'center']} alignItems='center' direction='column'>
                        <Image w='90%' src='https://user-images.githubusercontent.com/101378760/236643081-944721f9-992e-446e-95db-8f8b0210dda9.png' />
                    </Flex>

                    <Flex justifyContent='space-around' h={['36vh', '46vh', '50vh', '50vh']} w={['80%', '80%', '50%', '50%']} direction='column'>
                        <Text as='b' fontSize={{ base: '1.4rem', lg: '1.8rem', md: '1rem', sm: '1.4rem' }}>Online Recipe Book</Text>
                        <Text fontSize={{ base: '.9rem', lg: '1.2rem', md: '1.2rem', sm: '1rem' }}>
                            Recipe book is a handy online recipe catalogue, with famous international recipes.</Text>
                        <Text as='b' fontSize={{ base: '0.9rem', lg: '1.1rem', md: '1.1rem', sm: '1rem' }}>Tech stack- React | Redux | NodeJs | | MongoDB | ExpressJs | Chakra-UI</Text>
                        <Flex w={['68%', '45%', '63%', '63%']} justifyContent='space-between' alignItems='center'>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://recipe-book-mauve.vercel.app/'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>
                                    Website</Button>
                            </Link>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://github.com/RohitSinghChauhan/RecipeBook-App'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex w={['100%', '80%', '80%', '80%']} direction={['column', 'column', 'row', 'row']} mt='1.3rem' justifyContent='center' alignItems='center' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                    <Flex h={['auto', '50vh', '50vh', '50vh']} w={['100%', '100%', '50%', '50%']} justifyContent={['flex-start', 'center', 'center', 'center']} alignItems='center' direction='column'>
                        <Image w='90%' src='https://i.postimg.cc/767BYptn/Screenshot-231.png' />
                    </Flex>

                    <Flex justifyContent='space-around' h={['36vh', '46vh', '50vh', '50vh']} w={['80%', '80%', '50%', '50%']} direction='column'>
                        <Text as='b' fontSize={{ base: '1.4rem', lg: '1.8rem', md: '1rem', sm: '1.4rem' }} >Nature's Basket</Text>
                        <Text fontSize={{ base: '.9rem', lg: '1.2rem', md: '1.2rem', sm: '1rem' }}>Nature’s Basket is India’s pioneering food destination present through physical retail stores, online portal and a mobile application.</Text>
                        <Text as='b' fontSize={{ base: '0.9rem', lg: '1.1rem', md: '1.1rem', sm: '1rem' }}>Tech stack- HTML | CSS | JavaScript | DOM</Text>
                        <Flex w={['68%', '45%', '63%', '63%']} justifyContent='space-between' alignItems='center'>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://nature-sbasket.netlify.app/'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>
                                    Website</Button>
                            </Link>
                            <Link style={{ 'textDecoration': 'none' }} target='_blank' href='https://github.com/Mufadal03/Nature-sBasket-Clone'>
                                <Button w={['4rem', '4.5rem', '6rem', '7rem']} fontSize={['0.8rem', '0.9rem', '1rem', '1rem']} bgColor='rgb(64, 112, 244)' colorScheme='blue' color='white'>Github</Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Box >
    )
}

export default Projects;