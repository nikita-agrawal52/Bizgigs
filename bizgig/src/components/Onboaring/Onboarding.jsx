import React from 'react'
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot
} from '@mui/lab'
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import DevicesIcon from '@mui/icons-material/Devices';

import RepeatIcon from '@mui/icons-material/Repeat';
import { Typography } from '@mui/material';

function Onboarding() {
    return (
        <>
            <Timeline position='alternate' sx={{paddingBottom:'100px'}}>
                <TimelineItem>
                    
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{backgroundColor:"#3f4726"}}>
                            <InfoIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant='h5' component='span' >
                            Infogathering
                        </Typography>
                        <Typography sx={{color:'white'}}>Undrestand the dream,style and goal of the project</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{backgroundColor:"#3f4726"}}>
                            <SettingsIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h5" component="span">
                            Planning
                        </Typography>
                        <Typography sx={{color:'white'}}>We will plan the entire project with deadlines </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{backgroundColor:"#3f4726"}}>
                            <DevicesIcon />
                        </TimelineDot>
                        <TimelineConnector  />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h5" component="span">
                            Development
                        </Typography>
                        <Typography sx={{color:'white'}}>Now our experienced developer will develop your project as proposed.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector  />
                        <TimelineDot  sx={{backgroundColor:"#3f4726"}}>
                            <RepeatIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h5" component="span">
                            Testing
                        </Typography>
                        <Typography sx={{color:'white'}}>This is the final phase post which your project will ready to be hosted </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default Onboarding
