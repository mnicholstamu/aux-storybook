import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'AUX',
  brandUrl: 'https://aux.tamu.edu',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',


    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    //
    colorPrimary: '#500000',
    colorSecondary: '#500000',
  
    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#500000',
    appBorderRadius: 4,
  
    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',
  
    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#500000',
    barBg: '#ffffff',
  
    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,

});