import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';

const HomePage = lazy(() =>
  import(
    /* webpackChunkName: "HomePage" */
    '../components/pages/HomePage'
  )
);
const PortfolioPage = lazy(() =>
  import(
    /* webpackChunkName: "PortfolioPage" */
    '../components/pages/PortfolioPage'
  )
);
const ContactPage = lazy(() =>
  import(
    /* webpackChunkName: "ContactPage" */
    '../components/pages/ContactPage'
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
        <h1>Portfolio</h1>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/portfolio' component={PortfolioPage} />
          <Route path='/contact' component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
