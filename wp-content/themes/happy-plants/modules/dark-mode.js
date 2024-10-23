import { createApp } from "https://unpkg.com/petite-vue?module";
const state = {
  // state exposed to all expressions within v-scope regions
  darkMode: isInitiallyDarkMode,
  // methods
  isDarkMode() {
    return (
      localStorage.getItem("vueuse-color-scheme") === "dark" ||
      (!localStorage.getItem("vueuse-color-scheme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  },
  initDarkMode() {
    this.darkMode = this.isDarkMode();
  },
  applyDarkMode() {
    if (isInitiallyDarkMode !== null) {
      isInitiallyDarkMode = null;
      return;
    }
    if (this.darkMode !== null) {
      localStorage.setItem(
        "vueuse-color-scheme",
        this.darkMode ? "dark" : "light"
      );
      document.documentElement.classList.toggle("dark", this.darkMode);
    }
  },
};

createApp(state).mount("#dark-mode");
