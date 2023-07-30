import React from "react";
import { Link } from "react-router-dom";
// styles
import "./item.css";

const Item = ({ country }) => (
  <Link
    className="link"
    to={{
      pathname: "/details",
      state: {
        country: country,
      },
    }}
  >
    <div className="country">
      <div>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div className="country-infos">
        <h2 className="country-name">{country.name.common}</h2>
        <p>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p className="country-region">
          <strong>Region: </strong>
          {country.region}
        </p>
      </div>
    </div>
  </Link>
);

export default Item;
