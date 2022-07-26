/** pixel to rem */
export const pxToRem = (pixel: number): string => {
  return (
    pixel / parseFloat(getComputedStyle(document.documentElement).fontSize) +
    'rem'
  );
};
