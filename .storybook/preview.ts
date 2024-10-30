// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react-vite';
 
const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Components','Custom Hooks'],
      },
    },
  },
};
 
export default preview;