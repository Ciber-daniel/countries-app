import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// components
import Header from "../components/header/header";
// styles
import "./detail.css";

const Details = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(location.state.country);

  return (
    <>
      <Header />
      <div className="container-button-back">
        <div
          onClick={() => {
            history.push("/");
          }}
          className="button-back"
        >
          <FontAwesomeIcon className="icon-arrow" icon={faArrowLeft} />
          Go Back
        </div>

        <div className="container-detail">
          <div className="flag-img">
            <img
              src={location.state.country.flags.png}
              alt={location.state.country.flags.alt}
            />
          </div>
          <div className="container-flex">
            <h2>{location.state.country.name.common}</h2>
            <div className="detail-body">
              <div className="detail-col-left">
                <p>
                  <strong>Population: </strong>
                  {location.state.country.population}
                </p>
                <p>
                  <strong>Region: </strong>
                  {location.state.country.region}
                </p>
                <p>
                  <strong>Sub region: </strong>
                  {location.state.country.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {location.state.country.capital[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
