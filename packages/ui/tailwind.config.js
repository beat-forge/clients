const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  content: [
    // app content
    "./components/**/*.{html,js,svelte,ts}",
  ],
};