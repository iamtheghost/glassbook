import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#F7F9F2" },
        {
          name: "City",
          value:
            "url(https://superdevresources.com/wp-content/uploads/2015/12/new-york-background.jpg)",
        },
      ],
      // 👇 Specify default background
      default: "City",
    },
  },
};

export default preview;
