import { HeadingDivider } from '../Divider';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Atoms/Divider/Heading Divider',
  component: 'aux-divider-heading',
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: {
        component: 'Another description.<br/> This is another line',
      },
    },
    controls: { expanded: true },
  },
  tags: ['autodocs'],
  render: (args) => HeadingDivider(args),
  argTypes: {
    headingText: {
        control: { type: 'text' }, /* This adds text to the item */
    },
    short: {
      name: "Short Divider",
    },
    
  },
}

export const Heading_Divider = {
  args: {
    headingText: 'Hello World',
    short: false
  },
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: {
        story: 'This is a description of the dots divider.',
      },
    },
  }
};