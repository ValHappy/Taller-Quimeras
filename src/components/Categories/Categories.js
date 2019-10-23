import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

function Categories(props) {
    const classes = useStyles();

    function handleClick() {
        console.log("Nombre de la categoria para poner en url");
    }

    return (
        <div className={classes.buttons}>
            <Button onClick={handleClick} variant="contained" className={classes.button}> heads </Button>
            <Button onClick={handleClick} variant="contained" className={classes.button}> ears </Button>
            <Button onClick={handleClick} variant="contained" className={classes.button}> tails </Button>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    buttons: {
        width: '100%',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '8%',
        margin: 5,
        padding: 5,
        color: '#4d888f',
        background: '#acf999',
        '&:hover': {
            background: '#78ae6b',
        }
    },
}));

export default Categories;