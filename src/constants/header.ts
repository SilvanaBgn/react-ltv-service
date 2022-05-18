import { Home, PeopleAlt, LocationOn, AccessTime, Phone } from '@mui/icons-material';

interface MenuItem {
  label: string;
  url: string;
  Icon: any;
}

// const HomeFunction = () => {
//   return  <Home fontSize="small" />;
// };

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Inicio',
    url: '',
    Icon: Home,
  },
  {
    label: 'Quiénes somos',
    url: '',
    Icon: PeopleAlt,
  },
  {
    label: 'Ubicación',
    url: '',
    Icon: LocationOn,
  },
  {
    label: 'Horarios',
    url: '',
    Icon: AccessTime,
  },
  {
    label: 'Contacto',
    url: '',
    Icon: Phone,
  },
]