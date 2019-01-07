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
    showWeather: () => {
      let currentLocation = weatherApp.getCurrentLocation();
      console.log(currentLocation);
    }
  };
  weatherApp.showWeather();
}

const weatherApp = weatherAppFn();
