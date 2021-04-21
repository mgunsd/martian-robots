import { Paper, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import robot from './assets/mars.gif';

export const HeaderBar = styled(Paper)({
  background: '#6CA3A1',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '100px',
  margin: 20,
  padding: 20,
  color: '#FBB54D',
});

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderBar>
      <img alt="Robot" src={robot} height="80px" />
      <Typography variant="h3">{title}</Typography>
    </HeaderBar>
  );
};
