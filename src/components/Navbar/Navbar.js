import React from 'react';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';

function Navbar(props) {
    const classes = useStyles();

    function handleChange(event, newValue) {
        props.history.push(newValue);
    }

    return (
        <section className={classes.container}>
            <div className={classes.logo}>
                <img src="url('https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg')" alt="aiuda" />
            </div>

            <Tabs value={props.location.pathname} onChange={handleChange} indicatorColor="secondary" textColor="primary" licentered>
                <Tab label="Home" value="/" />
                <Tab label="Create a Chimera" value="/create" />
                <Tab label="My Chimeras" value="/garage" />
            </Tabs>
        </section>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        padding: 0.5,
        marginRight: '60%',
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#709fa5',
            main: '#4d888f',
            dark: '#355f64',
            contrastText: '#fff',
        },
        secondary: {
            light: '#bcfaad',
            main: '#acf999',
            dark: '#78ae6b',
            contrastText: '#fff',
        },
    },
  });

export default withRouter(Navbar);