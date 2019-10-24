import React from 'react';
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom';

function Navbar(props) {
    const classes = useStyles();

    function handleChange(event, newValue) {
        props.history.push(newValue);
    }

    return (
        <section className={classes.container}>
            <Tabs className={classes.navbar} value={props.location.pathname} onChange={handleChange} indicatorColor="secondary">
                <Tab label="Home" value="/" />
                <Tab label="Create a Chimera" value="/create" />
                <Tab label="My Chimeras" value="/garage" />
            </Tabs>
        </section>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navbar: {
        fontWeight: 'bolder',
        color: '#355f64'
    },
}));

export default withRouter(Navbar);