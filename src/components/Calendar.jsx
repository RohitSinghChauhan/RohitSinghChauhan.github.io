import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { Box } from '@chakra-ui/react'

const Calendar = () => {
    return (
        <Box>
            <GitHubCalendar
                style={{ margin: 'auto' }}
                username="rohitsinghchauhan"
                blockSize={20}
                fontSize={15}
            >
                <ReactTooltip delayShow={20} html />
            </GitHubCalendar>
        </Box>
    )
}

export default Calendar;