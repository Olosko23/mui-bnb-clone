import React from 'react'
import {Box, Container} from '@mui/material';
import { flexBetweenCenter, dFlex} from '../themes/commonStyles';
import Logo from './Logo';

const Header = () => {
  return (
    <Box sx={{...dFlex, minHeight: 70, borderBottom:"1px solid #ddd"}}>

        <Container maxWidth='xl'>
            <Box sx={{...flexBetweenCenter,minHeight: 70,px: 4,}}>
            <Logo />
            </Box>
        </Container>

    </Box>
 )
}

export default Header