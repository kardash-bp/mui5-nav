import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material'
import ApiIcon from '@mui/icons-material/Api'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
const Header = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <AppBar>
      <Toolbar>
        <ApiIcon />
        <Tabs
          sx={{ marginLeft: '1rem' }}
          textColor='inherit'
          value={value}
          onChange={handleChange}
          aria-label='icon label tabs example'
        >
          <Tab icon={<PhoneIcon />} label='RECENT' />
          <Tab icon={<FavoriteIcon />} label='FAVORITES' />
          <Tab icon={<PersonPinIcon />} label='NEARBY' />
        </Tabs>
        <Button sx={{ marginLeft: 'auto' }} variant='contained'>
          Login
        </Button>
        <Button sx={{ marginLeft: '1rem' }} variant='contained'>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
