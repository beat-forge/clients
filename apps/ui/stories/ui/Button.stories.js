import ButtonsView from './views/ButtonsView.svelte';

export default {
  title: 'ui/Buttons',
  component: ButtonsView,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'download'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
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
    variant: 'primary',
    disabled: false,
  },
};
export const Secondary = {
  args: {
    variant: 'secondary',
    disabled: false,
  },
};
export const Download = {
  args: {
    variant: 'download',
    disabled: false,
  },
};
