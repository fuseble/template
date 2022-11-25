export const isSSR = () => {
  return typeof window === 'undefined';
};

export const isCSR = () => {
  return !isSSR();
};
