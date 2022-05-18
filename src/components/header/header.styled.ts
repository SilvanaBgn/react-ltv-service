import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';

const HEADER_LOGO_SIZE = 60;

const Styled = {
  Toolbar: styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between'
  })),

  LogoWrapper: styled(Icon)(() => ({
    height: HEADER_LOGO_SIZE,
    width: HEADER_LOGO_SIZE
  }))
}

export default Styled;