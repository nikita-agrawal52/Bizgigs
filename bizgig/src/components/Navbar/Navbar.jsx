import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Grid, Box, Avatar, Link } from '@mui/material'
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import heroImage from '../../images/hero-image.webp';
import ClientLogo from '../ClientLogo/ClientLogo';
import Onboarding from '../Onboaring/Onboarding';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from '../Footer/Footer';

import './Navbar.css'




function Navbar() {
    return (
        <div>

            <AppBar position='static' sx={{ bgcolor: '#3f4726', padding: " 10px 0" }}>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit'>
                        <CoffeeIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} >
                        Bizgig
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit' href='#home'>Home</Button>
                        <Button color='inherit' href='#services'>Services</Button>
                        <Button color='inherit' href='#services'>Roadmap</Button>
                        {/* <Button color='inherit'>Work</Button> */}
                        <Button color='inherit' href='#whyUs'>Why Us?</Button>
                        <Button color='inherit' href='#contact'>Let's Connect</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} id="Home" sx={{ bgcolor: "#d4ddb7", p: 2, height: "90vh" }} >
                <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }} className ='zoom-in'>
                    <Box p={5} px={10}>
                        <Box>
                            <Typography variant='h2' component='h1' sx={{ color: '#333', textAlign: 'left' }}>
                                Your <span style={{ color: 'red' }}>partner</span> in crafting seamless <span style={{ color: 'red' }}>online </span>experiencess
                            </Typography>
                            <Typography variant='subtitle1' component='p' py={5}>
                                Transform your digital presence with our tailored eCommerce solutions. We blend innovation and design to create seamless online experiences that drive success.
                            </Typography>
                        </Box>

                        <Box py={7}>
                            <Button variant='outlined' href="#contact" sx={{
                                marginRight: '20px', borderColor: '#3f4726',
                                color: '#3f4726',
                                '&:hover': {
                                    borderColor: '#2a3e1a',

                                }

                            }} size='large'>Get Started</Button>
                            <Button variant='contained' size='large' href='#services'
                                sx={{
                                    bgcolor: "#3f4726", color: "white",
                                    '&:hover': {
                                        bgcolor: '#2a3e1a'
                                    }
                                }}>Explore More</Button>
                        </Box>

                    </Box>

                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box p={5} px={10} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img src={heroImage} style={{ width: '150%', maxWidth: '600px', height: 'auto' }} alt="HeroImage" />
                    </Box>

                </Grid>
            </Grid>
            <Box sx={{ bgcolor: '#eff0ec', p: 4 }} id="whyUs">
                <Grid container spacing={4}>

                    <Grid item xs={12} md={3}  >
                        <Box m={2} p={3} sx={{ bgcolor: "#3f4726", color: "white", marginTop: "-90px", borderRadius: "10px", height: '350px' }} className='zoom-out'>
                            <IconButton size='large' edge='start' color='inherit' >
                                <EmojiObjectsIcon sx={{ fontSize: "50px" }} />
                            </IconButton>
                            <Typography variant='h5' component='h3'>Customized Solution</Typography>
                            <Typography variant='subtitle2' mt={3}>We understand that every business is unique. Our team takes the time to understand your specific requirements and goals, ensuring that our eCommerce solutions are tailored to meet your exact needs. From custom design to bespoke functionality, we create platforms that align perfectly with your brand and business objectives.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}  >
                        <Box m={2} p={3} sx={{ bgcolor: "#3f4726", color: "white", marginTop: "-90px", borderRadius: "10px", height: '350px' }} className='zoom-out'>
                            <IconButton size='large' edge='start' color='inherit' >
                                <PsychologyIcon sx={{ fontSize: "50px" }} />
                            </IconButton>
                            <Typography variant='h5' component='h3'>Expert Team</Typography>
                            <Typography variant='subtitle2' mt={3}>Our team consists of experienced web developers, designers, and strategists who bring a wealth of knowledge and expertise to every project. With a focus on innovation and quality, we are committed to delivering solutions that not only meet but exceed your expectations.</Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={3}  >
                        <Box m={2} p={3} sx={{ bgcolor: "#3f4726", color: "white", marginTop: "-90px", borderRadius: "10px", height: '350px' }} className='zoom-out' >
                            <IconButton size='large' edge='start' color='inherit' >
                                <SupportAgentIcon sx={{ fontSize: "50px" }} />
                            </IconButton>
                            <Typography variant='h5' component='h3'>End to End Support</Typography>
                            <Typography variant='subtitle2' mt={3}>From the initial consultation to post-launch support, we provide comprehensive services to ensure your eCommerce store’s success. Our dedicated support team is always available to assist with any questions or issues, ensuring a smooth and hassle-free experience.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}  >
                        <Box m={2} p={3} sx={{ bgcolor: "#3f4726", color: "white", marginTop: "-90px", borderRadius: "10px", height: '350px' }} className='zoom-out'>
                            <IconButton size='large' edge='start' color='inherit' >
                                <TrendingUpIcon sx={{ fontSize: "50px" }} />
                            </IconButton>
                            <Typography variant='h5' component='h3'>Result Driven Approach</Typography>
                            <Typography variant='subtitle2' mt={3}>Our goal is to help your business achieve its objectives. We use data-driven strategies and insights to optimize your eCommerce platform for maximum performance, ensuring that your investment translates into measurable results and business growth.</Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Typography variant='h5' p={10} sx={{ display: "flex", justifyContent: "center", color: '#333' }}> Ready to start your online journey??&nbsp; <Link href="#contact" underline='none' color="error">Contact Us...!</Link> </Typography>

            </Box>
            <Box sx={{ bgcolor: "#888f70", p: 4 }}>
                <Typography variant='h3' component='h1' py={5} sx={{ display: 'flex', justifyContent: "center", color: '#eff0ec' }}>Our Clients</Typography>
                <ClientLogo />
                <Typography variant='h3' component='h1' py={5} sx={{ display: 'flex', justifyContent: "center", color: '#3f4726' }}>Your Journey with us</Typography>
                <Onboarding />
            </Box>
            <Box sx={{ bgcolor: "#d4ddb7", p: 4 }} id='services'>
                <Typography variant='h3' component='h1' py={5} sx={{ display: 'flex', justifyContent: "center" }}>Our services to help you go &nbsp;<span style={{ color: 'red' }}>DIGITAL</span></Typography>
                <Services />
            </Box>

            <Box sx={{ bgcolor: "#eff0ec", p: 4 }} id='contact'>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }} className='swipe-right'>
                        <Typography variant='h3' component='h1' py={5} sx={{ display: 'flex', justifyContent: "center" }}>Let's Connect</Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                            <Link href='https://wa.link/nxxiot' target='_blank' underline='none'>
                                <Avatar sx={{
                                    width: 50,
                                    height: 50,
                                    fontSize: '1.8rem',
                                    bgcolor: '#34b726',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <WhatsAppIcon sx={{ fontSize: 'inherit', color: 'white' }} />
                                </Avatar>
                            </Link>
                            <Link href='tel:+919129744773' underline='none'>
                                <Avatar sx={{
                                    width: 50,
                                    height: 50,
                                    fontSize: '1.8rem',
                                    bgcolor: 'text.primary',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <PhoneIcon sx={{ fontSize: 'inherit', color: 'white' }} />
                                </Avatar>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className='swipe-left'>

                        <Contact />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ bgcolor: "#3f4726", p: 4 }}>
                <Footer />
            </Box>
            <Box sx={{ bgcolor: "#888f70", p: 1, display: 'flex', justifyContent: 'center' }}>
                <Typography variant='body1' sx={{ color: '#333' }}>© All rights reserved with Bizgigs.</Typography>
            </Box>



        </div>
    )
}

export default Navbar
