import { styled } from '@/stitches';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 20,
  width: '100%',
  height: '100%'
});

export const Title = styled('h1', {
  fontSize: 50
});
