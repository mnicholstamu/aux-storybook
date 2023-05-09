import { link /*CONSTANT NAME*/ } from './Link';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Atoms/Links', /*LOCATION IN SIDE MENU */
  component: 'aux-link', /* COMPONENT NAME TO REFERENCE */
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: { /*DESCRIPTION OF MAIN COMPONENT WITHIN STORYBOOK AT THE TOP OF THE PAGE*/
        component: 'Another description.<br/> This is another line',
      },
    },
  },
  tags: ['autodocs'],
  render: (args) => link/*CONSTANT NAME*/(args),
  argTypes: {
    label: {
        name: "Label",
      },
    linkType : {
        name: "Link Type",
        control: {type: 'select'},
        options: ['Default Link', 'CTA with Trailing Icon', 'CTA with Leading Icon'],
        mapping : {
            'Default Link': '',
            'CTA with Trailing Icon': 'link--cta',
            'CTA with Leading Icon': 'link--cta-leading',
        },
    },


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
        linkType: '',
        label: 'This is a default link',
    },
    parameters: {
        badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
        docs: {
            description: {
                story: 'This is a description of each individual story (component version)',
            },
        },
    }
};




export const CTALink = {
    args: {
        linkType: 'link--cta',
        label: 'This is a CTA link',
    },
    parameters: {
        badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
        docs: {
            description: {
                story: 'This is a description of each individual story (component version)',
            },
        },
    }
};


export const LinkCTALeading = {
    args: {
        linkType: 'link--cta-leading',
        label: 'This is a CTA link with leading icon',        
    },
    parameters: {
        badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
        docs: {
            description: {
                story: 'This is a description of each individual story (component version)',
            },
        },
    }
};