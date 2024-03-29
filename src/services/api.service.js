import NotFound from "../components/not-found";

// servicios para  llamada a la api

export const findAllCountries = async () => {
  try {
    return (await fetch("https://restcountries.com/v3.1/all")).json();
  } catch (error) {
    return <NotFound />;
  }
};

export const findOneCountry = async (countryCode) => {
  try {
    return (
      await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    ).json();
  } catch (error) {
    return <NotFound />;
  }
};
