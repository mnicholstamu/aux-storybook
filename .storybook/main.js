/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
import remarkGfm from 'remark-gfm';

const config = {
  stories: [
    "../stories/**/*.mdx", 
    "../stories/**/**/*.mdx", 
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@geometricpanda/storybook-addon-badges",
    "@storybook/addon-a11y",
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../static']
};
export default config;
