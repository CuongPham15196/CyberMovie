import React from "react";
import { Redirect, Route } from "react-router-dom";
import NavBarAdmin from "Components/NavBarAdmin";
import { useStyles } from "./style";

function AdminLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBarAdmin />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("Admin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}

export default AdminTemplate;
