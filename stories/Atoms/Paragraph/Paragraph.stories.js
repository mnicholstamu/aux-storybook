import { p } from './Paragraph';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Atoms/Paragraph', /*LOCATION IN SIDE MENU */
  component: 'aux-p', /* COMPONENT NAME TO REFERENCE */
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: { /*DESCRIPTION OF MAIN COMPONENT WITHIN STORYBOOK AT THE TOP OF THE PAGE*/
        component: 'Paragraphs must have a line height of 1.5 to be Level AA compliant. Open Sans should almost exclusively be used for body text, especially for content-rich components.',
      },
    },
  },
  tags: ['autodocs'],
  render: (args) => p (args),
  argTypes: {
    // label: {
    //     name: "Label",
    //   },

    // short: { /* BOOLEAN */
    //   name: "Short Divider",
    // },
    // dividerType: { /*DROPDOWN SELECT */
    //   name: "Divider Type",
    //   control: { type: 'select' },
    //   options: ['Dots', 'Hash'],
    //   mapping: {
    //     'Dots': 'divider-dots', /* CLASS NAME FROM SCSS */
    //     'Hash': 'divider-hash',
    //   },
    // },
  },
};


/* THIS IS NEEDED IN ORDER FOR IT TO DISPLAY IN THE SIDEBAR - THIS IS THE DOCUMENTATION PAGE */
export const Default = {
    args: {
    },
    parameters: {
        badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
        docs: {
            description: {
            },
        },
    }
};