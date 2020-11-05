import getRoutes from './getRoutes';

export default getRoutes('')({
  label: 'Home',
  path: '/',
  children: {},
} as const);
