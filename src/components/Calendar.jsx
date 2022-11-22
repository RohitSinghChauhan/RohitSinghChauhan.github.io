import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { Box } from '@chakra-ui/react'

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(day => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();

        return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
        );
    });
};

const Calendar = () => {
    return (
        <Box>
            <GitHubCalendar
                style={{ margin: 'auto' }}
                username="rohitsinghchauhan"
                transformData={selectLastHalfYear}
                blockSize={20}
                fontSize={15}
            >
                <ReactTooltip delayShow={20} html />
            </GitHubCalendar>
        </Box>
    )
}

export default Calendar;