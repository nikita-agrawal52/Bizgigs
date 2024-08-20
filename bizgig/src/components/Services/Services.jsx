import React from 'react'
import ServiceCard from './ServiceCard'
import EcomImg from '../../images/ecom-website.png'
import TravelImg from '../../images/travel-website.jpeg'
import CustomImg from '../../images/custom-website.jpeg'
import { Grid } from '@mui/material'

function Services() {
    const EcomDesc ="Transform your online store with our comprehensive e-commerce development services. We build robust, secure, and user-friendly e-commerce platforms using leading technologies . From product catalog management to secure payment gateways, we've got you covered."
    const customDesc = "Your business is unique, and your website should reflect that. Our custom website development services ensure that your site is built from the ground up to meet your specific needs. We handle everything from the initial concept to the final launch, creating a website that not only looks great but also functions seamlessly."
    const travelDesc = "Showcase your travel offerings with our destination and tour management features. We build systems that allow you to easily manage and display travel packages, itineraries, and special offers. Highlight popular destinations, detailed itineraries, and captivating images to attract and engage potential travelers."
    return (
        <div>
        <Grid container spacing={2} p={5}>
            <Grid item xs={12} md={4} >
            <ServiceCard
                image={EcomImg}
                title='Ecommerce Website Development'
                desc = {EcomDesc}
            />
            </Grid>
            <Grid item xs={12} md={4} >
            <ServiceCard
                image={TravelImg}
                title='Travel Agency Website Development'
                desc = {travelDesc}
            />
            </Grid>
            <Grid item xs={12} md={4} >
            <ServiceCard
                image={CustomImg}
                title=' Custom Website Development'
                desc = {customDesc}
            />
            </Grid>
            
        </Grid>
            
        </div>
    )
}

export default Services
