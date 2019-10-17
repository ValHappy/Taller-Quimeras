import React from 'react';
import { makeStyles } from '@material-ui/core';

function Create() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Create a chimera</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white'
    }
}));

export default Create;