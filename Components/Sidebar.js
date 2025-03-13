import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <div style={{width:"250px",padding:"20px"}}>
        <h3>Catogaries</h3>
        <List>
            <ListItem>
                <ListItemText primary="Technology" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Lifestyle" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Design" />
            </ListItem>
        </List>

      
    </div>
  )
}

export default Sidebar
