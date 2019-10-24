import React, {useContext} from 'react';
import { makeStyles, Button } from '@material-ui/core';
import AppContext from '../../contexts/AppContext';

function Categories(props) {
    const classes = useStyles();
    const context = useContext(AppContext);

    const handleClick = (body) => {
        context.setBodyPart(body);
    }

    return (
        <div className={classes.buttons}>
            <Button onClick={() => {handleClick('heads')}} variant="contained" className={classes.button}> heads </Button>
            <Button onClick={() => {handleClick('ears')}} variant="contained" className={classes.button}> ears </Button>
            <Button onClick={() => {handleClick('tails')}} variant="contained" className={classes.button}> tails </Button>
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
        color: '#4d877e',
        background: 'linear-gradient(45deg, #85dd89 30%, #a7edac 90%)',
        '&:hover': {
            background: '#6dc082',
        }
    },
}));

export default Categories;