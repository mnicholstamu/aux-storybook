import { Quote } from './Quote';
import { BADGE } from '@geometricpanda/storybook-addon-badges';


// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Atoms/Quote',
  component: 'aux-quote',
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: { /*DESCRIPTION OF MAIN COMPONENT WITHIN STORYBOOK AT THE TOP OF THE PAGE*/
        component: 'This is where I can talk about the differences between pullquotes and blockquotes.',
      },
    },
  },
  render: (args) => Quote(args),
  argTypes: {
    quoteType: {
        name: "Quote Type",
        control: { type: 'radio' },
        options: ['Blockquote', 'Pullquote'],
        mapping: {
          'Blockquote': 'blockquote',
          'Pullquote': 'pullquote'

        },
      },              
    hasCite: {
        name: "Has Citation",
        control: { type: 'boolean' },
    },    
      length: {
        name: "Quote Length",
        control: { type: 'radio' },
        options: ['Standard', 'Content-Rich', 'Slim'],
        mapping: {
          'Default': '',
          'Content-Rich': 'blockquote--long',
          'Slim': 'blockquote--short'          
        },
      },          
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Blockquote = {
  args: {
    quoteType: 'blockquote',
    hasCite: false,
    length: ''
  },
};

export const Pullquote = {
    args: {
      quoteType: 'pullquote',
      hasCite: false,
      length: ''
    },
  };


  export const BlockquoteHasCite = {
    args: {
      quoteType: 'blockquote',
      hasCite: true,
      length: ''
    },
  };

  export const PullquoteHasCite = {
    args: {
      quoteType: 'pullquote',
      hasCite: true,
      length: ''
    },
  };