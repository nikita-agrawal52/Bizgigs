import React from 'react'
import { Card,CardContent,CardMedia,Typography,Button,CardActionArea,CardActions } from '@mui/material'


function ServiceCard(props) {
  return (
    <div>
      <Card sx={{maxWidth:'350px',maxHeight:'800px'}}>
        <CardActionArea>
            <CardMedia
                component='img'
                height='200'
                alt="ecom website"
                image = {props.image}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' sx={{color:'#3f4726'}}>{props.title}</Typography>
                <Typography variant='body2' color='text.secondary'>{props.desc}</Typography>
            </CardContent>

        </CardActionArea>
        <CardActions sx={{marginBottom:"20px"}}>
            <Button size='small'  variant='contained' href='#contact' sx={{
                                    bgcolor: "#3f4726", color: "white",
                                    '&:hover': {
                                        bgcolor: '#2a3e1a'
                                    }
                                }}>Contact Us</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ServiceCard
