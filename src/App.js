import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Cards from './comp/Cards'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import { mainListItems, secondaryListItems } from '../src/comp/listItems';


export default function App() {
  return (
      <main>
        <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Cards />
            </Grid>
          </Grid>
        </Container>
    </div>
      </main>
  );
}
