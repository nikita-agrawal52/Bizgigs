import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Grid } from '@mui/material'
import logoImg from '../../images/logo-3.png'

function ClientLogo() {
    const logoData = [
        { img: logoImg },
        { img: logoImg },
        { img: logoImg },
        { img: logoImg },
        { img: logoImg },
        { img: logoImg },
        { img: logoImg }
    ]
    const slides = [];
    for (let i = 0; i < logoData.length; i += 3) {
        const slideLogos = logoData.slice(i, i + 3);
        slides.push(
            <Grid container spacing={2} key={i} sx={{display:'flex', justifyContent:'space-between'}}>
                {slideLogos.map((logo, index) => (
                    <Grid item xs={3}  key={index} >
                        <img src={logo.img} sx={{width:'100px', height:'100px'}} alt={`Logo ${index + 1}`} />
                    </Grid>
                ))}

            </Grid>
        )
    }
    return (
        <div>
            <Box p={5}>
                <Carousel>
                    {slides}
                </Carousel>
            </Box>
        </div>
    )
}

export default ClientLogo
