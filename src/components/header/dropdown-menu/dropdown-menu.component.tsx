import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { MENU_ITEMS } from '../../../constants/header'

import Styled from './dropdown-menu.styled';

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Styled.HambButton
        id="basic-button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconButton
          size="large"
          color="primary"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Styled.HambButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          MENU_ITEMS.map((item) => {
            const { label, url, Icon } = item;

            return (
              <MenuItem
                onClick={handleClose}
                LinkComponent='a'
                href={url} >
                  <ListItemIcon>
                    <Icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{label}</ListItemText>
              </MenuItem>
            )
          })
        }
      </Menu>
    </>
  )
}

export default DropdownMenu;