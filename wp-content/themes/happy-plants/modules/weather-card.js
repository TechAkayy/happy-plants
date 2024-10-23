import { createApp } from "https://unpkg.com/petite-vue?module";
const state = {
  weather: null,
  loading: true,
  error: "",
  getLocation() {
    navigator.geolocation.getCurrentPosition(
      async (pos) =>
        await this.fetchWeather(pos.coords.latitude, pos.coords.longitude),
      async () => await this.fetchWeather(-37.70433, 144.7254891) // Fallback coordinates
    );
  },
  async fetchWeather(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6cd22634f8f1c9a74704828f7f0523e&units=imperial`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");
      this.weather = await response.json();
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  },
  get weatherIcon() {
    return this.loading
      ? "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_16x16.png"
      : `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;
  },
};

createApp(state).mount("#weather-island");
