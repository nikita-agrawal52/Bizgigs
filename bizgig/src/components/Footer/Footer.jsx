import React from 'react'
import {Box, Grid, Typography, Link } from '@mui/material'
import CoffeeIcon from '@mui/icons-material/Coffee';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div>
      <Grid container spacing ={3}>
      
        <Grid item xs={12} md={6}>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}> <CoffeeIcon  sx={{fontSize:"4rem", color:'white'}}/>
            <Typography variant='body1' py={2} px={5} sx={{color:"white", mb:4 }}>
            At Bizgigs, we're passionate about transforming businesses into digital powerhouses. Our tailored eCommerce solutions empower companies to reach new heights and thrive in the digital marketplace. Whether you’re a local store or a global brand, we provide the tools and expertise to help you go digital seamlessly.
            </Typography>
        </Box>
           
        </Grid> 
        <Grid item xs={12} md={6}>
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Typography variant='h5' py={2} px={5} sx={{color:"white",  }}>Contact Us 24*7</Typography>
            <Link href='https://wa.link/nxxiot' target='_blank' underline='none'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 , mb:4, mt:2}}>
                <WhatsAppIcon sx={{ color: 'white' }} />
                <Typography variant='body1' sx={{ color: 'white' }}>
                    +91 9129744773
                </Typography>
            </Box>
            </Link>
            <Link href='tel:+919129744773' underline='none'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,mb:4 }}>
                <PhoneIcon sx={{ color: 'white' }} />
                <Typography variant='body1' sx={{ color: 'white' }}>
                    +91 9129744773
                </Typography>
            </Box>
            </Link>
            <Link href='mailto:bizgigssolution@gmail.com?subject=Inquiry&body=Hello, I am intrested in your web development services...' underline='none'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 ,mb:4}}>
                <EmailIcon sx={{ color: 'white' }} />
                <Typography variant='body1' sx={{ color: 'white' }}>
                    bizgigssolution@gmail.com
                </Typography>
            </Box>
            </Link>
            </Box>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Footer
