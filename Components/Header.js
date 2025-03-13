import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
  
      <AppBar position="static">
    <Toolbar>
        <Typography variant='h6' style={{flexGrow:1}}>
            My Blog
        </Typography>

        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Contact</Button>
    </Toolbar>
      </AppBar>
    
  )
}

export default Header
