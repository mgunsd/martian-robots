import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import background from './assets/bg.webp';

export const Screen = styled(Grid)({
  background: `url(${background}) center center no-repeat`,
  minHeight: '100vh',
  width: '100%',
  backgroundSize: 'cover',
});
