import React, { useContext } from 'react';
import { makeStyles, Card } from '@material-ui/core';
import AppContext from '../../contexts/AppContext';

function Selection(props) {

    const context = useContext(AppContext);

    const classes = useStyles();

    return (
        <div className={classes.parts}>
            {context.bodyPart === 'heads' &&
                context.heads.map((element, index) =>
                    <Card key={index} className={classes.card}> <img className={classes.img} src={element} alt="" /> </Card>
                )
            }
            {context.bodyPart === 'ears' &&
                context.ears.map((element, index) =>
                    <Card key={index} className={classes.card}> <img className={classes.img} src={element} alt="" /> </Card>
                )
            }
            {context.bodyPart === 'tails' &&
                context.tails.map((element, index) =>
                    <Card key={index} className={classes.card}> <img className={classes.img} src={element} alt="" /> </Card>
                )
            }
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