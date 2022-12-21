import React from "react";
import "./MattressCard.css";
import { BsSuitHeart } from "react-icons/bs";
import { MDBIcon } from "mdb-react-ui-kit";
import Jane from "../MattressJane/MattressjaneCard/Jane";
import { Link } from "react-router-dom";

function MattressCard(items) {
  return (
    <>
      <Link to="/jane">
        <div className="matresscardcontainer">
          <div>
            {" "}
            <h4 className="hearticon">
              <BsSuitHeart className="suitheart"></BsSuitHeart>
            </h4>{" "}
          </div>
          <img src={items.img} />
          {items.launch ? (
            <>
              <div className="launch">
                <h5 className="newlaunch">{items.launch}</h5>
              </div>
            </>
          ) : null}

          <div className="matressContent">
            <div className="matressleft-content">
              <h3 id="mattxt">{items.title}</h3>
              <p>The Sustainable mattress ever</p>
              <p id="offertxt">Festive Offer @</p>
              <h4 className="price">
                Rs.{items.price} <del>Rs.33.678</del>
              </h4>
            </div>
            <div className="matressright-content">
              <h5 className="bold">{items.rating}</h5>
              <p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                </div>
              </p>
              <p>(27)</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MattressCard;
