import React from "react";
import SideMenuComp from "Components/SideBarAdmin";
import { Redirect, Route } from "react-router-dom";
import "./styleadmin.css"

import AppBarAdmin from "Components/AppBarAdmin";

function AdminLayout(props) {
  return (
    <div className="container-fluid" >
          {/* //  <div className="row">
          //    <div className="col-2 noPadding" >
          //    <SideMenuComp/>
          //    </div>
          //    <div className="col-10 noPadding">
          //    {props.children}
          //    </div>
          //  </div> */}
          <AppBarAdmin children={props.children}/>
     </div>
  )

}

function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
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
