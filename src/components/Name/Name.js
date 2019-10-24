import React, { useContext } from 'react';
import { makeStyles, InputBase, Button } from '@material-ui/core';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { fade } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

function Name(props) {
    const classes = useStyles();
    const context = useContext(AppContext);

    const handleClick = (event) => {
        if (!context.name.length) {
            alert("¡Dale un nombre a tu mascotica! >:c");
        } else {
            let chimeras = [...context.chimeras];
            chimeras.push(
                {
                    name: context.name,
                    head: context.selectedHead,
                    ear: context.selectedEar,
                    body: context.selectedBody,
                    tail: context.selectedTail
                }
            );
            context.setChimeras(chimeras);
            context.reset();
            context.setShowModal(false);
            props.history.push('/garage');
        }
    }

    const handleInput = (event) => {
        context.setName(event.target.value);
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Give your pet a name</h1>
            <div className={classes.input} onKeyPress={handleInput}>
                <div className={classes.icon}><CreateRoundedIcon /></div>
                <InputBase placeholder="Name..." classes={{ root: classes.inputRoot, input: classes.inputInput, }} onChange={handleInput} value={context.name} />
            </div>
            <div className={classes.buttons}>
                <Button onClick={handleClick} variant="contained" className={classes.button}> done </Button>
                <Button onClick={() => context.setShowModal(false)} variant="contained" className={classes.buttonC}> cancel </Button>
            </div>
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
        color: "#4d888f"
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
        color: "#4d888f",
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
    buttons: {
        display: 'flex',
        margin: 10
    },
    button: {
        width: '10%',
        margin: 5,
        padding: 5,
        color: 'white',
        background: 'linear-gradient(45deg, #4d888f 40%, #59ef66 90%)',
        '&:hover': {
            background: '#355f64',
        }
    },
    buttonC: {
        width: '10%',
        margin: 5,
        padding: 5,
        color: 'white',
        background: '#546e7a',
        '&:hover': {
            background: '#37474f',
        }
    },
}));

export default withRouter(Name);