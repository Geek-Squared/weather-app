import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

/**
 *
 * @returns Component for search box
 */
const Search = () => {
  const [location, setLocation] = useState<any>(null);
  const [latitude, setLat] = useState(0);
  const [longitude, setLng] = useState(0);
  // hide content until location is selected
  const [showContent, setShowContent] = useState(false);

  // function to get coordinates from google places api
  const getCoordinates = async (address: any) => {
    const results = await geocodeByAddress(address.value.description);
    const latLng = await getLatLng(results[0]);
    const { lat, lng } = latLng;
    setLat(lat);
    setLng(lng);
    setShowContent(true);
  };

  console.log("latitude :>> ", latitude);

  useEffect(() => {
    const fetchWeatherData = async () => {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
        )
        .then((res: any) => {
          setLocation(res);
        });
    };
    fetchWeatherData();
  }, [latitude, longitude]);

  return (
    <div>
      <div style={{ width: "70%", marginTop: "20px" }}>
        <Typography variant="caption">
          Enter Place eg (Country, City)
        </Typography>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
          selectProps={{
            placeholder: "Enter your location",
            variant: "outlined",
            onChange: (e: any) => {
              getCoordinates(e);
            },
          }}
        />
      </div>

      {showContent && (
        <div style={{ width: "70%", marginTop: "20px" }}>
          <Typography>Temp : {location?.data?.main?.temp}</Typography>
          <Typography>Humidity: {location?.data?.main?.humidity}</Typography>
          <Typography>Wind Speed: {location?.data?.wind?.speed}</Typography>
        </div>
      )}
    </div>
  );
};

export default Search;
