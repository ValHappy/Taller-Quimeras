import React from 'react';
import { makeStyles } from '@material-ui/core';

function Garage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Your chimeras</h1>

            <section className={classes.element}>
                <div className={classes.content}>
                    <img className={classes.quimera} src="https://i.ytimg.com/vi/XqxWuT1M1kM/maxresdefault.jpg" alt="Your chimera" />
                </div>
                <p>Asigned name :3</p>
            </section>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 50,
    },
    element: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: 200,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #4d888f 30%, #acf999 90%)',
        transition: 'all .3s ease-in-out',

        "&:hover": {
            cursor: 'pointer',
        }
    },
    quimera: {
        width: 100,
        height: 200,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
}));

export default Garage;