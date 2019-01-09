import "./styles.css";

function weatherAppFn() {
  const latitude = "";
  const longitude = "";
  const weatherApp = {
    getCurrentLocation: () => {
      let cordinates = {
        latitude: "",
        longitude: ""
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          (cordinates.latitude = position.coords.latitude),
            (cordinates.longitude = position.coords.longitude);
        });
      } else {
        throw Error("geolocation api not found");
      }
      console.log(cordinates);
      return cordinates;
    },
    showWeather: async () => {
      let currentLocation = weatherApp.getCurrentLocation();
      let weatherApiEndPoint = await fetch(
        `https://fcc-weather-api.glitch.me//api/current?lon=:${
          currentLocation.longitude
        }&lat=:${currentLocation.latitude}`
      );
      weatherApiEndPoint.then(resp => {
        console.log(resp);
      });
    }
  };
  weatherApp.showWeather();
}

const weatherApp = weatherAppFn();
