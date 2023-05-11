import { Box, Flex, Image, Text, Link, Tooltip } from "@chakra-ui/react";
import { HiOutlineDownload } from 'react-icons/hi';

export default function Navbar() {
    return <Box w='100%' bgColor='whitesmoke' position='sticky' top='0' zIndex='1' >
        <Box w='100%'>
            <Flex w='100%' h='8vh' as='b' justifyContent={['space-between', 'space-between', 'space-between', 'space-between']} alignItems='center'>

                <Box>
                    <Image w={{ base: '9rem', lg: '9rem', md: '8rem', sm: '10rem' }} src='https://i.ibb.co/CJwQm6Q/my-logo.png' alt='mylogo' />
                </Box>

                <Flex w={{ base: '40vw', lg: '60vw', md: '70vw', sm: '30vw' }} justifyContent='space-evenly' alignItems='center'>
                    <Text display={['none', 'none', 'inline-flex', 'inline-flex']} as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#home_section'>Home</Link></Text>
                    <Text display={['none', 'none', 'inline-flex', 'inline-flex']} as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#about_section'>About</Link></Text>
                    <Text display={['none', 'none', 'inline-flex', 'inline-flex']} as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#skills_section'>Skills</Link></Text>
                    <Text display={['none', 'none', 'inline-flex', 'inline-flex']} as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#projects_section'>Projects</Link></Text>
                    <Text display={['none', 'none', 'inline-flex', 'inline-flex']} as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#contact_section'>Contact</Link></Text>
                    <Flex gap={['0.4rem', '0.3rem', '0.7rem', '1rem']} alignItems='center'>
                        <Text as='b' fontSize={{ base: '1.2rem', lg: '1.2rem', md: '1.3rem', sm: '1.2rem' }} color='rgb(64, 112, 244)' cursor='pointer'>
                            <Link target='_blank' href='https://drive.google.com/file/d/1FzHQpwXtJu0dbpY5eq5GKNO-yOY63q91/view?usp=share_link'>
                                Resume</Link>
                        </Text>
                        <Tooltip hasArrow label='Download resume' bg='gray.300' color='black'>
                            <Link href="https://drive.google.com/u/0/uc?id=1FzHQpwXtJu0dbpY5eq5GKNO-yOY63q91&export=download" download>
                                <HiOutlineDownload size='1.3rem' color='rgb(64, 112, 244)' />
                            </Link>
                        </Tooltip>
                    </Flex>
                </Flex>

            </Flex>
        </Box >
    </Box >
}