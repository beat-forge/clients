// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (func: Function, delay: number) => {
    let timerId: ReturnType<typeof setTimeout>;

    return function (this: unknown, ...args: unknown[]) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};