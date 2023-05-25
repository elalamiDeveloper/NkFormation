import { v4 as uuidv4 } from 'uuid';

import { TfiUser, TfiDashboard } from './icons';

const navigations = [
  {
    id: uuidv4(),
    path: 'dashboard',
    label: 'Dashboard',
    icon: <TfiDashboard />,
  },

  {
    id: uuidv4(),
    path: 'clients',
    label: 'Clients',
    icon: <TfiUser />,
  },
];

export default navigations;
