export interface RouteType {
  element?: any;
  auth?: boolean;
  layout?: any;
  path?: any;
  component?: any;
  errorElement?: any;
  loader?: any;
  children?: RouteType[];

  // path: string; component: () => JSX.Element;
  // children: ({ layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<CreateType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<CreateType>; path: string; component: (props) => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<CreateType>; path: string; component: (props) => JSX.Element; auth: boolean } | { path: string; component: React.FunctionComponent<AuthType>; children: ({ path: string; component: () => JSX.Element } | { path: string; component: () => JSX.Element })[] })[]
}

export class RouteListType {
  element?: any;
  auth?: boolean;
  layout?: any;
  path?: string;
  component?: any;
  loader?: any;
  changeCurrency?: boolean = true;
  children?: RouteListType[];

  // path: string; component: () => JSX.Element;
  // children: ({ layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<CreateType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<MainType>; path: string; component: () => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<CreateType>; path: string; component: (props) => JSX.Element; auth: boolean } | { layout: React.FunctionComponent<CreateType>; path: string; component: (props) => JSX.Element; auth: boolean } | { path: string; component: React.FunctionComponent<AuthType>; children: ({ path: string; component: () => JSX.Element } | { path: string; component: () => JSX.Element })[] })[]
}
