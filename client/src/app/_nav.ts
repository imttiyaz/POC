import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'GUI Screen'
  },
  {
        name: 'File Search',
        url: '/gui/filesearch',
        icon: 'icon-puzzle'
      },
      {
        name: 'Restricted Files',
        url: '/gui/restrictedfiles',
        icon: 'icon-puzzle'
      },
      {
        name: 'Customers / Accounts',
        url: '/gui/customersaccounts',
        icon: 'icon-puzzle'
      },
      {
        name: 'User Serial Number',
        url: '/gui/userserialnumber',
        icon: 'icon-puzzle'
      },
      {
        name: 'Override - Single File',
        url: '/gui/overridesinglefile',
        icon: 'icon-puzzle'

      }
  
];
