import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

export default function Navbar() {
    return <Box w='100%' position='fixed' zIndex='1' bgColor='whitesmoke'>
        <Box w={{ lg: '70vw', md: '90vw', sm: '99vw' }} m='auto'>
            <Flex h='8vh' as='b' fontSize='1.2rem' justifyContent='space-between' alignItems='center'>
                <Box>
                    {/* <Text color='rgb(64, 112, 244)'>Rohit</Text> */}
                    <Image w={{ lg: '2.6rem', md: '2.3rem', sm: '2.3rem' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/RYE-R-Logo.png/640px-RYE-R-Logo.png' />
                </Box>
                <Flex gap={{ lg: '12', md: '8', sm: '7' }} alignItems='center'>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)'><Link href='#home_section'>Home</Link></Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)'><Link href='#about_section'>About</Link></Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)' cursor='pointer'>Skills</Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)' cursor='pointer'>Projects</Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)' cursor='pointer'>Contact</Text>
                </Flex>
            </Flex>
        </Box >
    </Box >
}