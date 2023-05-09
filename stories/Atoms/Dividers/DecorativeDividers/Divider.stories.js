import { DecorativeDividers } from '../Divider';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Atoms/Divider/Decorative',
  component: 'aux-divider',
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: {
        component: 'Another description.<br/> This is another line',
      },
    },
  },
  tags: ['autodocs'],
  render: (args) => DecorativeDividers(args),
  argTypes: {
    short: {
      name: "Short Divider",
    },
    dividerType: {
      name: "Divider Type",
      control: { type: 'select' },
      options: ['Dots', 'Hash'],
      mapping: {
        'Dots': 'divider-dots',
        'Hash': 'divider-hash',
      },
    },
  },
}

export const Dots = {
  args: {
    dividerType: 'divider-dots',
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

export const Hash = {
  args: {
    dividerType: 'divider-hash',
    short: false
  },
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
  }
};
