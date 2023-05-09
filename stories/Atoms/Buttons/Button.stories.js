import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Atoms/Button',
  component: 'aux-button',
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
  },
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    label: {
      name: "Label",
    },
    buttonType: {
      name: "Button Color",
      control: { type: 'select' },
      options: ['Primary','Primary Alt', 'Primary Dark', 'Primary Alt Dark'],
      mapping: {
        'Primary': 'btn--primary',
        'Primary Alt': 'btn--primary-alt',
        'Primary Dark': 'btn--primary__dark',
        'Primary Alt Dark': 'btn--primary-alt__dark'
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    buttonType: 'btn--primary'
  },
  parameters: {
    badges: [BADGE.BETA],
  }
};

export const Secondary = {
  args: {
    label: 'Button',
    buttonType: 'btn--primary-alt'
  },
  parameters: {
    badges: [BADGE.BETA],
  }
};

export const PrimaryDark = {
  args: {
    label: 'Button',
    buttonType: 'btn--primary__dark',
  },
  parameters: {
    badges: [BADGE.BETA],
    backgrounds: { default: 'dark' },
  },
};

export const SecondaryDark = {
  args: {
    label: 'Button',
    buttonType: 'btn--primary-alt__dark'
  },
  parameters: {
    badges: [BADGE.BETA],
    backgrounds: { default: 'dark' },
  },
};

