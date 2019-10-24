import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import AppContext from '../../contexts/AppContext';
import Chimera from '../../components/Chimera/Chimera';

function Garage() {
    const classes = useStyles();

    const context = useContext(AppContext);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Your chimeras</h1>

            <div className={classes.content}>
                {context.chimeras.map((chimera) =>
                    <section className={classes.element}>
                        <div className={classes.img}>
                            <Chimera head={chimera.head} ear={chimera.ear} body={chimera.body} tail={chimera.tail} />
                        </div>
                        <p className={classes.info}>{chimera.name}</p>
                    </section>)}
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        // height: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    element: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 50,
    },
    img: {
        width: 200,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #4d888f 30%, #acf999 90%)',
        transition: 'all .3s ease-in-out',
        borderRadius: 20,

        "&:hover": {
            cursor: 'pointer',
        }
    },
    quimera: {
        width: 200,
        height: 200,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    info: {
        fontWeight: 'bolder',
        color: '#4d888f',
    }
}));

export default Garage;