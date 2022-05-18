import React from 'react';
import AppBar from '@mui/material/AppBar';

import DropdownMenu from './dropdown-menu/dropdown-menu.component';
import LogoIcon from '../../assets/logo.svg'
import Styled from './header.styled';

const Header = () => {
  return (
    <AppBar color="secondary" position="sticky">
      <Styled.Toolbar>
        <Styled.LogoWrapper>
          <img src={LogoIcon} alt="LTV Service logo" />
        </Styled.LogoWrapper>
        <DropdownMenu />
      </Styled.Toolbar>
    </AppBar>
  )
}

export default Header;
