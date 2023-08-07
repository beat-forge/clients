import IconsView from './views/IconsView.svelte';

export default {
    title: 'ui/Icons',
    component: IconsView,
    tags: ['autodocs'],
    argTypes: {
        className: "h-8 w-8"
    }
};

export const Default = {
    args: {
        className: "h-8 w-8"
    }
}
