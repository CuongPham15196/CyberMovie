import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routerHome, routerAdmin } from "Route";
import HomeTemplate from "Pages/HomeTemplate";
import AdminTemplate from "Pages/AdminTemplate";
import Auth from "Pages/AdminTemplate/Auth";
import PageNotFound from "Pages/PageNotFound";

function App() {
  const showLayoutHome = (routerHome) => {
    return routerHome?.map((page, index) => {
      return (
        <HomeTemplate path={page.path} Component={page.component} exact={page.exact} key={index} />
      );
    });
  };

  const showLayoutAdmin = (routerAdmin) => {
    return routerAdmin?.map((page, index) => {
      return (
        <AdminTemplate path={page.path} Component={page.component} exact={page.exact} key={index} />
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routerHome)}
        {showLayoutAdmin(routerAdmin)}
        <Route path="/auth" component={Auth} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
