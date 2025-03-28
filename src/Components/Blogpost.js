import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Blogpost = ({ title,image,content}) => {
  return (
    <Card style={{margin:"20px 0"}} >
        <CardMedia component="img"  image={image} alt='blog-image'/>
    <CardContent>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='body2'>{content}</Typography>

    </CardContent>
    </Card>
  )
}

export default Blogpost
