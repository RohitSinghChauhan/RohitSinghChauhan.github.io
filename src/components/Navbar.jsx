import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

export default function Navbar() {
    return <Box w='100%' position='sticky' top='0' zIndex='5' bgColor='whitesmoke' >
        <Box w={{ lg: '70vw', md: '90vw', sm: '99vw' }} m='auto'>
            <Flex h='8vh' as='b' fontSize='1.2rem' justifyContent='space-between' alignItems='center'>
                <Box display={{ lg: 'inline-block', md: 'inline-block', sm: 'inline' }}>
                    <Image w='10vw' src='https://i.ibb.co/CJwQm6Q/my-logo.png' alt='mylogo' />
                </Box>
                <Flex gap={{ lg: '12', md: '8', sm: '20' }} m={{ lg: "0", md: "0", sm: "auto" }} alignItems='center'>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)'><Link href='#home_section'>Home</Link></Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)'><Link href='#about_section'>About</Link></Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)'><Link href='#skills_section'>Skills</Link></Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)'><Link href='#projects_section'>Projects</Link></Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)'><Link href='#contact_section'>Contact</Link></Text>
                    <Text as='b' fontSize='1.2rem' color='rgb(64, 112, 244)' cursor='pointer'>
                        <Link href='https://drive.google.com/file/d/1cH9psbQrOsA4JfaJprb6M1Rok6tTG-oC/view?usp=sharing'>
                            Resume</Link></Text>
                </Flex>
            </Flex>
        </Box >
    </Box >
}