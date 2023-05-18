import { globalCss } from '@/stitches';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$inter',
    fontWeight: '$regular'
  }
});
