import React from 'react';
import { Box, Flex, Link, Image } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box id='contact_section' mt={['3rem', '5rem', '6rem', '6rem']} bgColor='blackAlpha.900'>
            <Flex h={['20vh', '24vh', '27vh', '27vh']} m='auto' w='70%' justifyContent='center' alignItems='center'>
                <Flex gap={{ base: '7', lg: '6', md: '8', sm: '20' }} m={{ base: '0', lg: "0", md: "0", sm: "auto" }} alignItems='center'>
                    <Link target='_blank' href='https://www.linkedin.com/in/rohit-singh-786b51193'>
                        <Image h='4.6vh' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/linkedin-512.png' />
                    </Link>
                    <Link target='_blank' href='https://github.com/RohitSinghChauhan'>
                        <Image h='5vh' src='https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png' />
                    </Link>
                    <Link target='_blank' href='mailto:rohitsinghmadan@gmail.com'>
                        <Image h='4.5vh' src='https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Mail-256.png' />
                    </Link>
                    <Link href='tel:8079086048'>
                        <Image h='5vh' src='https://cdn0.iconfinder.com/data/icons/leto-most-searched-mix-1/64/_active_call_phone_answer-256.png' />
                    </Link>
                </Flex>
            </Flex>
        </Box >
    )
}

export default Footer;