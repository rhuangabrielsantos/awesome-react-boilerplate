import { styled } from '@/stitches';

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  padding: 20,

  borderRadius: 5,
  border: '2px solid black',

  width: 'fit-content',

  variants: {
    color: {
      dark: {
        backgroundColor: 'black',
        color: 'white'
      },
      light: {
        backgroundColor: 'white',
        color: 'black'
      }
    }
  }
});
