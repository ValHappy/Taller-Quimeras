import React from 'react';
import { makeStyles } from '@material-ui/core';

function Chimera(props) {
    const classes = useStyles();

    return (
        <div className={classes.create}>
            <img className={classes.ears} src={props.ear} alt="ears" />
            <img className={classes.head} src={props.head} alt="head" />
            <img className={classes.body} src={props.body} alt="body" />
            <img className={classes.tail} src={props.tail} alt="" />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    create: {
        width: '100%',
        minHeight: 450,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ears: {
        position: 'absolute',
        top: '8%',
        zIndex: 2,
    },
    head: {
        position: 'absolute',
        top: '23%',
        zIndex: 4,
    },
    body: {
        position: 'absolute',
        top: '29%',
        zIndex: 3,
    },
    tail: {
        position: 'absolute',
        top: '29%',
        left: 550,
        zIndex: 2,
    }
}));

export default Chimera;