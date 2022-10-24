import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import ApiIcon from '@mui/icons-material/Api'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import InfoIcon from '@mui/icons-material/Info'
import DrawerComponent from './Drawer'
const Header = () => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <AppBar>
      <Toolbar>
        <ApiIcon />
        {isMatch ? (
          <DrawerComponent
            pages={[
              'FAVORITES',
              'NEARBY',
              'ABOUT',
              'CONTACT',
              'LOGIN',
              'REGISTER',
            ]}
          />
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: '1rem' }}
              textColor='inherit'
              value={value}
              onChange={handleChange}
              aria-label='icon label tabs example'
            >
              <Tab icon={<FavoriteIcon />} label='FAVORITES' />
              <Tab icon={<PersonPinIcon />} label='NEARBY' />
              <Tab icon={<InfoIcon />} label='ABOUT' />
              <Tab icon={<PhoneIcon />} label='CONTACT' />
            </Tabs>
            <Button sx={{ marginLeft: 'auto' }} variant='contained'>
              Login
            </Button>
            <Button sx={{ marginLeft: '1rem' }} variant='contained'>
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
