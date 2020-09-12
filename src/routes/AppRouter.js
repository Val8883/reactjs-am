import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';

const DashboardPage = lazy(() =>
  import(
    /* webpackChunkName: "DashboardPage" */
    '../components/pages/DashbordPage'
  )
);
const AddPage = lazy(() =>
  import(
    /* webpackChunkName: "AddPage" */
    '../components/pages/AddPage'
  )
);
const EditPage = lazy(() =>
  import(
    /* webpackChunkName: "EditPage" */
    '../components/pages/EditPage'
  )
);
const HelpPage = lazy(() =>
  import(
    /* webpackChunkName: "HelpPage" */
    '../components/pages/HelpPage'
  )
);
const NotFoundPage = lazy(() =>
  import(
    /* webpackChunkName: "NotFoundPage" */
    '../components/pages/NotFoundPage'
  )
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Header />
        <Switch>
          <Route path='/' component={DashboardPage} exact />
          <Route path='/create' component={AddPage} />
          <Route path='/edit' component={EditPage} />
          <Route path='/help' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
