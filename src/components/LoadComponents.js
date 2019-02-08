import Loadable from 'react-loadable';
import Loading from './Loading';

export const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading,
});
export const HomePage = Loadable({
  loader: () => import('./HomePage'),
  loading: Loading,
});

export const TopBar = Loadable({
  loader: () => import('./TopBar'),
  loading: Loading,
});

