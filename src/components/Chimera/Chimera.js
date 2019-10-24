import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import AppContext from '../../contexts/AppContext';


function Chimera(props) {
    const classes = useStyles();

    const context = useContext(AppContext);
    
    return (
        <div className={classes.create}>
            <img className={classes.ears} src={context.selectedEar} alt="ears" />
            <img className={classes.head} src={context.selectedHead} alt="ears" />
            <img className={classes.body} src={context.selectedBody} alt="ears" />
            <img className={classes.tail} src={context.selectedTail} alt="ears" />
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