// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'users',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'temperature',
    path: '/dashboard/products',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'accelerometer',
    path: '/dashboard/products',
    icon: getIcon('eva:file-text-fill'),
  },

  {
    title: 'gyroscope',
    path: '/login',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'optical images',
    path: '/register',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
