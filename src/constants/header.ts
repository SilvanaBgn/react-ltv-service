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
    url: '#home_section',
    Icon: Home,
  },
  {
    label: 'Quiénes somos',
    url: '#about_us_section',
    Icon: PeopleAlt,
  },
  {
    label: 'Ubicación',
    url: '#location_section',
    Icon: LocationOn,
  },
  {
    label: 'Horarios',
    url: '#hours_section',
    Icon: AccessTime,
  },
  {
    label: 'Contacto',
    url: '#contact_section',
    Icon: Phone,
  },
]