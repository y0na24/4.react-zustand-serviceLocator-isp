export const debounce = <Args extends unknown[]>(
  fn: (...args: Args) => unknown,
  delay: number,
) => {
  let timerId: NodeJS.Timeout | null = null;

  return (...args: Args) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
};
