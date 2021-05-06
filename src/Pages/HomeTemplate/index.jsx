import NavBarHome from "Components/NavBarHome";
import React from "react";
import { Route } from "react-router-dom";

function HomeLayout(props) {
  return (
    <div>
      <NavBarHome />
      {props.children}
    </div>
  );
}

function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}

export default HomeTemplate;
