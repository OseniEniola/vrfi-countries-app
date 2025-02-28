import { Loading, Root } from '@/components';
import { RouteListType } from './type';
import { LoginPage, NotFound } from '@/pages';
import { CountriesList } from '@/pages/Countries';
import { CountryDetails } from '@/components/Countries';

const Routes: RouteListType[] = [
  {
    component: LoginPage,
    path: '/login',
    auth: false,
  },
  {
    component: Root,
    loader: Loading,
    path: 'app',
    children: [
      { path: 'home', component: CountriesList, auth: false },
      { path: 'country/detail', component: CountryDetails, auth: false },
    ],
  },
  {
    path: '*',
    component: NotFound
  }
];

export default Routes;
