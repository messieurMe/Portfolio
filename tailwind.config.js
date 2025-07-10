import {heroui} from "@heroui/theme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|card|chip|divider|image|link|scroll-shadow|toggle|table|tabs|ripple|spinner|checkbox|form|spacer).js"
  ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [heroui()],
};