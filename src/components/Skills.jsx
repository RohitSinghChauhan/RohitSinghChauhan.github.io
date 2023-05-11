import React from 'react';
import { Box, Image, Flex, Text, Center, Tooltip } from '@chakra-ui/react';

const Skills = () => {
    return (
        <Box id='skills_section' w={{ base: '95%', lg: '94%', md: '90%', sm: '95%' }} m='auto' mb={['2rem', '0', '0', '0']} >
            <Flex w='100%' h={{ base: 'auto', lg: '43vh', md: '30vh', sm: '40vh' }} direction='column' justifyContent={['center', 'center', 'center', 'center']} alignItems='center'>
                <Center>
                    <Text as='b' fontSize={{ base: '1.3rem', lg: '1.8rem', md: '1.7rem', sm: '1.6rem' }} color='rgb(64, 112, 244)'>Skills</Text>
                </Center>
                <Flex mt='1.3rem' w='100%' justifyContent='space-between' alignItems='center'>
                    <Tooltip hasArrow label='HTML' bg='gray.300' color='black'>
                        <Image w={['2rem', '3rem', '5rem', '5rem']} src='data:image/png;base64,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' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='CSS' bg='gray.300' color='black'>
                        <Image w={['2rem', '3rem', '5rem', '5rem']} src='data:image/png;base64,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' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='JavaScript' bg='gray.300' color='black'>
                        <Image w={['2rem', '3rem', '5rem', '5rem']} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASTSURBVHgB7ZxNbA1RFMeP79JWJYLXEkHbZ6eJ7hDd6QIhbCReWDXFDmFJ1E6DnRI7qbAhkbSLdsXCksS22viKvucrxLwqlZb7n9dp2teZ9z1z+ub9f4lE38zcSc7/3nPPOfdkRAghhBBCCCGEEEIIIaQSWCQFMv5m8z8hM6zc+r4gWy4WogoFUIYCKEMBlKEAylAAZSiAMhRAGQqgDAVQhgIoQwGUoQDKUABlKIAyFEAZCqAMBVCGAihDAZShAMpQAGUogDIUQBkKoAwFUGaplAHxxDI5dX6r67XurncSbfyTbQixkovl4eO18uJVtbweXinWWGru1VZPSXPTuBnjtxw78k0aIn8lSMpCABD/tMz1dyu5JONzMPzde+tt47teN0K8NKLgH+7Zv++HdJz4HJgQZSNAITgrx0s8N/oH19hi9Fx/E4gIod4D8jW+A545bZ7NtrpKQWgF6BtYU5DxHfDs3XvrxG9C64Lg972orZ6UvXssSZoZPjS8whh7uft9NVPiN6EUYGi4ynP2Y4PtOPFlzm8PH62VGz2Rmb+bG8fl8oVRiTb9Fr8JpwAjVa6/19ZMzjM+OHb0m4yaVdA/UCcdJ7/Y4WhQhDoKSqcmg0s5dyZuDP818DygojLhpMkJMkU2QRsfhFKAeg9Dwvg3bkUCCS9zJZQCoKwAf+8GEq1YZ6Mdpi4EQikAjN+2y/K8jgipq3ujHDoetYUYTRSeLxRLaPcAhJteq8DBEeJwLCpXrm1UESK0AmAfOHs6kfP9cE0aQoQ6CjrQ/kMuXfiYdSXMBkKgDvT0ea0EQejDUIjQe3vE7Ak/c34Gruni5c2B1IIqIg+AO+ru+mCvhp0tYzk/h3qS3yuhohIxrIbb199K750ROWAOXnLhqtmk/cwbKvJMGHnCpYsf5UnvUFYhYPz+wTrxi4o+lIdrcoTI5JqePl8tfsGuCJneI658MGVo9/Kz13lBKSgLAYrxwch0c3keoerBdnd3FPcxL1AXIHVwvsUuknlhjXkb0CvGf/FqlT0uMt1MY2ujdh6AdpGbt+qlbzBVFEMnQtvun9La8mvevf0ZCmfpPUEQFOGjM679vPl/Q2TC9TBmNg8eubeu5JPI5YvKCkCCc/j49jlGAl3XNs0rA2AmP/PYBKNpPhsnYbHOpnnjpt653l4RGC8dPIdrXseY+eQO+aKyAqzk0pnOtNnAAKjHNE+Xk+OJ5Rk7G9KPDiFIxMx0y+NIEqsMZQanG85+Z5Z3gEyV1WJR+WoiNsVY57aioov6DRPSY5Kq9FMsuKDYqcaSJU94z5P7r7PeV1ZfTcTsRmmgGN967kzC9QgRISWEKYXfRvsKxvITtSgI7gJFMsywfIBRkDy17bZKPnb6e9xWWKlR/3ArXAWaYvsG6rK6JGyGKKjlYxQ7Isph7NmgQRddEvk0ZhXqghbUl3NTreNVMmo2RSf2bzCzuNmEmq0tyaI61VBOeGkiIEQ8eIczPmY62lXQhNW6Y0z2t38v6D2hEKCc4aeLyxQKoAwFUIYCKEMBlKEAylAAZSgAIYQQQgghhBBCCCGEkAD4D1t8ruwdQCb8AAAAAElFTkSuQmCC' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='React' bg='gray.300' color='black'>
                        <Image w={['2rem', '3rem', '5rem', '5rem']} src='data:image/png;base64,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' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='Redux' bg='gray.300' color='black'>
                        <Image w={['2rem', '3rem', '5rem', '5rem']} src='https://vaibhav-darvekar-portfolio-devv.netlify.app/static/media/redux.5a9c5274e84215aca629.png' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='Node Js' bg='gray.300' color='black'>
                        <Image display={['none', 'inline-block', 'inline-block', 'inline-block']} w={['3rem', '3rem', '5rem', '5rem']} src='https://vaibhav-darvekar-portfolio-devv.netlify.app/static/media/node.4e97577b981eca678bfe.webp' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='TypeScript' bg='gray.300' color='black'>
                        <Image display={['none', 'inline-block', 'inline-block', 'inline-block']} w={['2rem', '1rem', '4rem', '4rem']} src='https://raw.githubusercontent.com/maciejkorsan/typescript-blue/master/logo.svg?sanitize=true' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='MongoDB' bg='gray.300' color='black'>
                        <Image display={['none', 'inline-block', 'inline-block', 'inline-block']} w={['3rem', '3rem', '5rem', '5rem']} src='https://vaibhav-darvekar-portfolio-devv.netlify.app/static/media/mgdb.24c2fc7ac6311170d07e.png' alt='skill'></Image>
                    </Tooltip>
                    <Tooltip hasArrow label='Express Js' bg='gray.300' color='black'>
                        <Image display={['none', 'inline-block', 'inline-block', 'inline-block']} w={['3rem', '3rem', '5rem', '5rem']} src='https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg' alt='skill'></Image>
                    </Tooltip>
                </Flex>
                <Flex display={['flex', 'none', 'none', 'none']} mt='1rem' w='100%' justifyContent='space-around' alignItems='center'>
                    <Image w={['2rem', '3rem', '5rem', '5rem']} src='https://vaibhav-darvekar-portfolio-devv.netlify.app/static/media/node.4e97577b981eca678bfe.webp' alt='skill'></Image>
                    <Image w={['1.5rem', '1rem', '4rem', '4rem']} src='https://raw.githubusercontent.com/maciejkorsan/typescript-blue/master/logo.svg?sanitize=true' alt='skill'></Image>
                    <Image w={['2rem', '3rem', '5rem', '5rem']} src='https://vaibhav-darvekar-portfolio-devv.netlify.app/static/media/mgdb.24c2fc7ac6311170d07e.png' alt='skill'></Image>
                    <Image w={['2rem', '3rem', '5rem', '5rem']} src='https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg' alt='skill'></Image>
                </Flex>
            </Flex>
        </Box >
    )
}


export default Skills;