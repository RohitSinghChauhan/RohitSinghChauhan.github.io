import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

export default function Navbar() {
    return <Box w='100%' bgColor='whitesmoke' position='sticky' top='0' zIndex='1' >
        <Box w='100%'>
            <Flex w='100%' h='8vh' as='b' justifyContent='space-between' alignItems='center'>
                <Box>
                    <Image w={{ base: '4.4rem', lg: '9rem', md: '8rem', sm: '6rem' }} src='https://i.ibb.co/CJwQm6Q/my-logo.png' alt='mylogo' />
                </Box>
                <Flex w={{ base: '88vw', lg: '72vw', md: '70vw', sm: '85vw' }} justifyContent='space-evenly' alignItems='center'>
                    <Text as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#home_section'>Home</Link></Text>
                    <Text as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#about_section'>About</Link></Text>
                    <Text as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#skills_section'>Skills</Link></Text>
                    <Text as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#projects_section'>Projects</Link></Text>
                    <Text as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)'><Link href='#contact_section'>Contact</Link></Text>
                    <Text as='b' fontSize={{ base: '1rem', lg: '1.3rem', md: '1.3rem', sm: '1.1rem' }} color='rgb(64, 112, 244)' cursor='pointer'>
                        <Link target='_blank' href='https://drive.google.com/file/d/1FzHQpwXtJu0dbpY5eq5GKNO-yOY63q91/view?usp=share_link'>
                            Resume</Link></Text>
                </Flex>
            </Flex>
        </Box >
    </Box >
}