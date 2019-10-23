import React from 'react';
import { makeStyles } from '@material-ui/core';

function Chimera(props) {
    const classes = useStyles();

    return (
        <div className={classes.create}>
            <img className={classes.ears} src="./img/chimera/ears/ears_1.png" alt="ears" />
            <img className={classes.head} src="./img/chimera/head/head_2.png" alt="ears" />
            <img className={classes.body} src="./img/chimera/body.png" alt="ears" />
            <img className={classes.tail} src="./img/chimera/tails/tail_3.png" alt="ears" />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    create: {
        width: 600,
        height: 500,
        padding: 0,
        margin: 0,
    },
    ears: {
        position: 'fixed',
        top: 65,
        left: 585,
        right: 0,
        bottom: 10,
        zIndex: 1,
    },
    head: {
        position: 'fixed',
        top: 170,
        left: 700,
        right: 0,
        bottom: 10,
        zIndex: 3

    },
    body: {
        position: 'fixed',
        top: 210,
        left: 695,
        right: 0,
        bottom: 10,
        zIndex: 2,

    },
    tail: {
        position: 'fixed',
        top: 240,
        left: 530,
        right: 0,
        bottom: 10,
        zIndex: 1,
    }
}));

export default Chimera;