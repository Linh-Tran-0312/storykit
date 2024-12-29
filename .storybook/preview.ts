// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react-vite';
import { themes } from '@storybook/theming';
import '../src/style/global.css';
import '../src/style/ant-util.css';

const preview: Preview = {
  parameters: {
    docs: {
      // themes: themes.dark
    },
    options: {
      storySort: {
        order: ['Components','Custom Hooks'],
      },
    },
  },
};
 
export default preview;