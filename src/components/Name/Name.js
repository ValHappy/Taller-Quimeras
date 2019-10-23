import React from 'react';
import { makeStyles, InputBase, Button } from '@material-ui/core';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { fade } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

function Name() {
    const classes = useStyles();

    const handleClick = (event) =>{
        console.log("value del input");
    }

    const handleInput = (event) => {
        let name = event.target.value;
        console.log(name);
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Give your pet a name</h1>

            <div className={classes.input} onKeyPress={handleInput}>
                <div className={classes.icon}><CreateRoundedIcon /></div>
                <InputBase placeholder="Name..." classes={{ root: classes.inputRoot, input: classes.inputInput, }} />
            </div>

            <Button onClick={handleClick} variant="contained" className={classes.button}> done </Button>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "white"
    },
    input: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.2),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.3),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    icon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        color: "white",
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    button: {
        width: '10%',
        margin: 5,
        padding: 5,
        color: 'white',
        background: 'linear-gradient(45deg, #4d888f 30%, #acf999 90%)',
        '&:hover': {
            background: '#355f64',
        }
    },
}));

export default withRouter(Name);