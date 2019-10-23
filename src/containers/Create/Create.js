import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Chimera from '../../components/Chimera/Chimera';
import Categories from '../../components/Categories/Categories';
import Selection from '../../components/Selection/Selection'

function Create() {
    const classes = useStyles();

    function handleClick() {

    }

    return (
        <div className={classes.container}>
            <Chimera />
            <Categories />
            <Selection />
            <Button onClick={handleClick} variant="contained" className={classes.button}> done </Button>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 655,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '8%',
        margin: 5,
        padding: 5,
        color: 'white',
        background: '#4d888f',
        '&:hover': {
            background: '#355f64',
        }
    },
}));

export default Create;