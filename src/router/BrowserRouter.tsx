import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { isEmpty } from 'lodash';
import ErrorPage from '@/pages/Errors/ErrorPage.tsx';
import Routes from '@/router/Routes';
import { RouteListType, RouteType } from '@/router/type';



// Protected Route Component
const ProtectedRoute = ({ layout: Layout, component: Component, auth }) => {
  if (!auth()) {
    return <Navigate to='/?login' replace />;
  }


  return Layout ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Component />
  );
};

const ElementLayoutRouter = (route) => {
  const Layout = route?.layout;
  const auth = route?.auth;
  const Component = route?.component;

  if (auth) {
    return (
      <ProtectedRoute
        layout={Layout}
        component={Component}
        auth={auth}
      />
    );
  }

  return Layout ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Component />
  );
};

const BrowserChildrenRouter = (route) => {
  if (!isEmpty(route?.children) && typeof route?.children !== 'undefined') {
    const routesListChildren: RouteType[] = [];
    const routesChildren = route?.children;

    for (const routeChildKey in routesChildren) {
      const routeChildren = routesChildren[routeChildKey];

      routeChildren.element = <ElementLayoutRouter {...routeChildren} />;
      if (
        !isEmpty(routeChildren) &&
        !isEmpty(routeChildren?.children) &&
        typeof routeChildren?.children !== 'undefined'
      ) {
        routeChildren.children = BrowserChildrenRouter(routeChildren); 
      }
      routesListChildren.push({
        ...routeChildren,
        errorElement: <ErrorPage />
      });
    }

    return routesListChildren;
  }
};

const BrowserRouter = () => {
  const routes: RouteType[] = Routes.map((route: RouteListType) => {
    route.element = <ElementLayoutRouter {...route} />;

    const response: RouteType = {};

    if (!isEmpty(route) && !isEmpty(route?.children) && typeof route?.children !== 'undefined') {
      response.children = BrowserChildrenRouter(route);
    }

    response.path = route.path;
    response.loader = route.loader;
    response.element = <ElementLayoutRouter {...route} />;
    // response.errorElement = <ErrorPage />;

    return response;
  });


  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default BrowserRouter;
