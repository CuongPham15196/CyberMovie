import CinemaMobile from "Components/CinemaMobile";
import React from "react";
import Footer from "Components/Footer";
import bg from "Assets/Images/bg.jpg";

function Cinema() {
  return (
    <div style={{ background: "black" }}>
      <CinemaMobile />
      <Footer />
    </div>
  );
}

export default Cinema;
