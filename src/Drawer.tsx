import React, { useState } from 'react'

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
const DrawerComponent = ({ pages }: { pages: string[] }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      {' '}
      <IconButton
        sx={{ marginLeft: 'auto', color: 'inherit' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          elevation: 8,
          sx: {
            width: 240,
            color: 'white',
            backgroundColor: '#4459b5',
          },
        }}
      >
        <List>
          {pages.map((p, i) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={i}>
              <ListItemText>{p}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default DrawerComponent
