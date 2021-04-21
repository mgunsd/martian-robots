import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { Screen, Header, Chart, Form } from 'components';
import './App.css';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Screen container spacing={3}>
        <Grid item xs={12}>
          <Header title="Martian Robots" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Form />
        </Grid>
        <Grid item xs={12} md={8}>
          <Chart />
        </Grid>
      </Screen>
    </>
  );
};

export default App;
