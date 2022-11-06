import { Box, Image, Flex } from "@chakra-ui/react";

const Stats = () => {
    return (
        <Flex>
            <Box>
                <a href="https://github.com/rohitsinghchauhan">
                    <Image alt='imges'
                        align="left"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=rohitsinghchauhan"
                    />
                </a>
            </Box>

            <Flex>
                <a href="https://github.com/rohitsinghchauhan">
                    <Image alt='imges'
                        align="center"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohitsinghchauhan"  //launguages
                    />
                </a>
                <a href="https://github.com/rohitsinghchauhan">
                    <Image alt='imges'
                        align="left"
                        src="https://github-readme-stats.vercel.app/api?username=rohitsinghchauhan&count_private=true&show_icons=true" //stats
                    />
                </a>
            </Flex>
        </Flex >
    );
};

export default Stats;
