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

export const useInterval = (fn: () => void, interval: number) => {
    const active = { value: false };
    let intervalRef: number | undefined;
    let fnRef: (() => void) | undefined;

    const start = () => {
      if (!active.value && !intervalRef) {
        fnRef = fn;
        intervalRef = window.setInterval(fnRef, interval);
        active.value = true;
      }
    };

    const stop = () => {
      active.value = false;
      if (intervalRef !== undefined) {
        window.clearInterval(intervalRef);
        intervalRef = undefined;
      }
    };

    const toggle = () => {
      if (active.value) {
        stop();
      } else {
        start();
      }
    };

    return { start, stop, toggle, active: active.value };
  }
