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
            <div className={classes.logo}>
                <img src="url('https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg')" alt="aiuda" />
            </div>

            <Tabs className={classes.navbar} value={props.location.pathname} onChange={handleChange} indicatorColor="secondary" textColor="primary" licentered>
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
    navbar: {
        fontWeight: 'bolder',
        color: 'white'
    },
    logo: {
        padding: 0.5,
        marginRight: '60%',
    }
}));

export default withRouter(Navbar);