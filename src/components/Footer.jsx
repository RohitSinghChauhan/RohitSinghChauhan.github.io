import React from 'react';
import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box id='contact_section' mt='6rem' bgColor='blackAlpha.900'>
            <Flex h='27vh' m='auto' w='70%' justifyContent='space-between' alignItems='center'>
                <Flex gap={{ lg: '6', md: '8', sm: '20' }} m={{ lg: "0", md: "0", sm: "auto" }} alignItems='center'>
                    <Link href='https://www.linkedin.com/in/rohit-singh-786b51193'>
                        <Image h='4vh' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/linkedin-512.png' />
                    </Link>
                    <Link href='https://github.com/RohitSinghChauhan'>
                        <Image h='4vh' src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png' />
                    </Link>
                </Flex>

                <Text fontSize={{ lg: '1.9rem', md: '1rem', sm: '1rem' }} letterSpacing='0.15rem' color='whitesmoke'>Thanks for visiting!</Text>
            </Flex>
        </Box >
    )
}

export default Footer;