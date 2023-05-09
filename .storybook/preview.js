/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction', 
          'Branding',
          [
            'Colors',
              ['Colors','Primary','Secondary','Accent'],
              'Fonts & Icons',
              ['*']
          ],
          'Atoms',
          [
            'Button', 'Divider'
          ]
        ]
      },
    },
    badgesConfig: {
      beta: {
        title:'Beta',
        tooltip: {
          title: 'Beta',
          desc: 'Be ready to receive updates frequently and leave a feedback',
        },
      },
      experimental: {
        title:'Experimental',
        tooltip: {
          title: 'Experimental',
          desc: 'This is a newly created component that is still being developed. Once completed, it will be placed in Beta.',
        },
      },
      deprecated: {
        styles: {
          backgroundColor: '#FFF',
          borderColor: '#6200EE',
          color: '#6200EE',
        },
        title: 'Deprecated',
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#3c001c',
        },
      ],
    },
  },
};
import '../static/css/aux-grid.css';
import '../static/css/fonts.css';

export default preview;