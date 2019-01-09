import "./styles.css";

function weatherAppFn() {
  let latitude = "";
  let longitude = "";
  const weatherApp = {
    getCurrentLocation: () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          console.log(latitude, longitude, "coords");
        });
      } else {
        throw Error("geolocation api not found");
      }
    },
    showWeather: async () => {
      weatherApp.getCurrentLocation();
      console.log(latitude, longitude);
      let weatherApiEndPoint = await fetch(
        `https://fcc-weather-api.glitch.me//api/current?lon=193&lat=12`
      );
      weatherApiEndPoint.json().then(resp => console.log(resp));
      // weatherApiEndPoint.then(resp => {
      //   console.log(resp)
      // })
    }
  };
  weatherApp.showWeather();
}

const weatherApp = weatherAppFn();
