import React from 'react';
import { makeStyles, Card } from '@material-ui/core';

function Selection(props) {
    const classes = useStyles();

    return (
        <div className={classes.parts}>
            <Card className={classes.card}> <img className={classes.img} src="./img/chimera/ears/ears_1.png" alt="" /> </Card>
            <Card className={classes.card}> <img className={classes.img} src="./img/chimera/ears/ears_2.png" alt="" /> </Card>
            <Card className={classes.card}> <img className={classes.img} src="./img/chimera/ears/ears_3.png" alt="" /> </Card>
            <Card className={classes.card}> <img className={classes.img} src="./img/chimera/ears/ears_4.png" alt="" /> </Card>
            <Card className={classes.card}> <img className={classes.img} src="./img/chimera/ears/ears_5.png" alt="" /> </Card>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    parts: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 60,
        margin: 5,
        padding: 1,
        color: 'white',
        background: '#355f64',
        '&:hover': {
            width: 100,
            height: 80,
        }
    },
}));

export default Selection;