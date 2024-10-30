import { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
// main.js configuration docs: https://storybook.js.org/docs/api/main-config/main-config-features
// @storybook/addon-essentials docs: https://storybook.js.org/addons/@storybook/addon-essentials
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        // '@storybook/addon-interactions',
        // 'storybook-addon-i18n',
      ],
    framework: '@storybook/react-vite',
    features: {
        argTypeTargetsV7: true,
    },
    docs: {
        autodocs: false,
    },
};
 
export default config;