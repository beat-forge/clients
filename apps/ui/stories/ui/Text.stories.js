import TextView from './views/TextView.svelte';

export default {
  title: 'ui/Text',
  component: TextView,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'body', 'subtitle', 'eyebrow'],
    },
    customClasses: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = {
  args: {
    variant: 'body',
  },
};
export const Heading_1 = {
  args: {
    variant: 'h1',
  },
};
export const Heading_2 = {
  args: {
    variant: 'h2',
  },
};
export const Heading_3 = {
  args: {
    variant: 'h3',
  },
};
export const Heading_4 = {
  args: {
    variant: 'h4',
  },
};
export const Heading_5 = {
  args: {
    variant: 'h5',
  },
};
export const Heading_6 = {
  args: {
    variant: 'h6',
  },
};
export const Subtitle = {
  args: {
    variant: 'subtitle',
  },
};
export const Eyebrow = {
  args: {
    variant: 'eyebrow',
  },
};
