import type { Preview } from '@storybook/tanstack-react'
import "../src/style.css";

const preview: Preview = {
  decorators: [
    (Story) => {
      document.documentElement.dataset.theme = "winter";

      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;