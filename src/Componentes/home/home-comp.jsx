import React from "react";
const HomeBanner = () => {
  return (
    <section>
      <div className="animation-area">
        <div className="banner-text">
          <div id="logo-home">
            <img src={require("../../images/logo.png")} alt="TRADER PRO" />
          </div>
          <p>
            Llevando tu{" "}
            <strong>
              <i>trading</i>
            </strong>{" "}
            al siguiente nivel
          </p>
        </div>
        <div className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
    </section>
  );
};
export default HomeBanner;
   
