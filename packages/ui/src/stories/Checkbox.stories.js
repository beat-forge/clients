import Checkbox from './Checkbox.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export const Primary = {
  render: () => ({
    Component: Checkbox,
  })
}