export const debounce = (fn: any, interval: number = 100) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, interval);
  };
};
