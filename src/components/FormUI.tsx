import { Paper, Box, TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const InputCard = styled(Paper)({
  background: '#6CA3A1',
  flexDirection: 'column',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  width: '100%',
  margin: 8,
  padding: 20,
  color: '#FBB54D',
});
export const Side = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: 12,
  color: '#FBB54D',
});

export const Input = styled(TextField)({
  margin: 10,
  color: '#FBB54D',
  text: '#FBB54D',
  '& label.Mui-focused': {
    color: '#FBB54D',
  },
  '& label': {
    color: '#FBB54D',
  },
  '& input:valid': {
    color: '#FBB54D',
  },
  '& .MuiInputAdornment-root': {
    color: '#FBB54D',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FBB54D',
    },
    '&:hover fieldset': {
      borderColor: '#FBB54D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FBB54D',
    },
  },
});
