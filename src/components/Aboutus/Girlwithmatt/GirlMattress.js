import React from "react";
import Aboutslider from "../AboutSlider/Aboutslider";
import "./girlmattress.css";

function GirlMattress() {
  return (
    <>
      <div className="totalblurimg">
        <div>
          <div className="girlmattress">
            <div className="contenttoneita">
              <p className="bulding">With integrity and creativity!</p>
              <h3 className="maincontent">
                {" "}
                we are committed to reduce our environmental impact by
                minimizing the utilization of resources. We do this by using
                “recycled polyester staple fibre” a sustainable material that is
                processed from pet bottles, saving them from going to landfills
                & ocean.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* second blurimg */}
      <div className="totalblurimg">
        <div>
          <div className="toneitabacktitle">
            <div className="contenttoneita2">
              <p className="bulding">At Toneita</p>
              <h3 className="maincontent">
                we are continually evaluating the market for new enrichment,
                exclusively for eco-conscious customers, with the intention of
                breaking free from the linear economy (take, make, dispose) and
                moving towards a circular economy.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Aboutslider />
    </>
  );
}

export default GirlMattress;
