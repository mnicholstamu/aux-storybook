import { IconDivider } from '../Divider';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import ThumbsUp  from '../../../assets/thumbs-up-solid.svg';
import Hash  from '../../../assets/divider-short-hash.svg';



export default {
  title: 'Atoms/Divider/Icon Divider',
  component: 'aux-divider-icon',
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: {
        component: 'Another description.<br/> This is another line',
      },
    },
    controls: { expanded: false },
  },
  tags: ['autodocs'],
  render: (args) => IconDivider(args),
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['Thumbs Up', 'Hash'],
      mapping: {
        'Thumbs Up': ThumbsUp,
        'Hash': Hash,
      }, 
    },
    short: {
      name: "Short Divider",
    },
    
  },
}

export const Icon_Divider = {
  args: {
    short: false
  },
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
    docs: {
      description: {
        story: 'This is a description of the icon divider.',
      },
    },
  }
};