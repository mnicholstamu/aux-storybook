/** @type { import('@storybook/web-components').Preview } */

const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)", "../stories/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@geometricpanda/storybook-addon-badges", "@storybook/addon-a11y", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  staticDirs: ['../static']
};
export default config;