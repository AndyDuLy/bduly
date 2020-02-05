import React from 'react';
import './Styles/App.css';
import Grid from '@material-ui/core/Grid';
import Home from './Pages/Home';


export default function App() {
  return (
    <Grid container direction="row">     
      <Grid item>
        <Home/>
      </Grid>
    </Grid>
  );
}
